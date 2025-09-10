import React, { useState, useRef, useEffect } from 'react';
import type { Criterion } from '../types';
import { RobotIcon, SendIcon } from './icons';

interface GeminiChatbotProps {
    criterion: Criterion;
}

interface Message {
    role: 'user' | 'model';
    text: string;
}

// Helper to extract text from ReactNode for the system prompt
const extractTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractTextFromReactNode).join(' ');
    if (React.isValidElement(node)) {
        const props = node.props as { children?: React.ReactNode };
        if (props.children) {
            return React.Children.toArray(props.children).map(extractTextFromReactNode).join(' ');
        }
    }
    return '';
};

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({ criterion }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: '¡Hola! Soy Rubi, tu tutor robótico. Parece que tuviste una duda. ¡No te preocupes! Si tienes alguna pregunta sobre este tema, escríbela abajo y haré lo mejor para ayudarte.' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [systemInstruction, setSystemInstruction] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const analysisText = extractTextFromReactNode(criterion.analysis.content);
        const summaryText = extractTextFromReactNode(criterion.summary.content);
        
        const instruction = `Eres un robot tutor amigable llamado 'Rubi'. Tu único propósito es ayudar a los usuarios a comprender un tema específico relacionado con un artículo científico sobre biosensores. Tu conocimiento se limita ESTRICTAMENTE a la siguiente información sobre el criterio "${criterion.title}":\n\n---CONTEXTO---\nAnálisis: ${analysisText}\nResumen Clave: ${summaryText}\n\nNo respondas a ninguna pregunta que no esté directamente relacionada con este contexto. Si te preguntan sobre otra cosa, responde amablemente: "Mi programación solo me permite ayudarte con el tema de '${criterion.title}'. ¿Tienes alguna duda sobre eso?". Sé conciso y claro en tus explicaciones. No te presentes en cada respuesta, solo en la primera.`;
        setSystemInstruction(instruction);
    }, [criterion]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: userInput };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages, systemInstruction }),
            });

            if (!response.ok || !response.body) {
                const errorText = await response.text();
                throw new Error(errorText || `Error del servidor: ${response.status}`);
            }
            
            setMessages(prev => [...prev, { role: 'model', text: '' }]);
            
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text += chunk;
                    return newMessages;
                });
            }

        } catch (e) {
            console.error("Error sending message:", e);
            const errorMessage = e instanceof Error ? e.message : "Hubo un error al comunicarse con el asistente.";
            setError(errorMessage);
            // Remove the empty placeholder on error
            setMessages(prev => prev.filter(p => p.role !== 'model' || p.text !== ''));
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="border rounded-lg bg-white shadow-inner flex flex-col max-h-96">
            <div className="p-3 border-b bg-slate-50 flex items-center space-x-2 rounded-t-lg">
                <RobotIcon className="w-6 h-6 text-stone-600" />
                <h4 className="font-semibold text-slate-700">Habla con el Robot Tutor</h4>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role === 'model' && <RobotIcon className="w-6 h-6 text-stone-500 flex-shrink-0" />}
                        <div className={`p-3 rounded-lg max-w-sm ${msg.role === 'model' ? 'bg-slate-100 text-slate-800' : 'bg-stone-500 text-white'}`}>
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && messages[messages.length -1]?.role !== 'model' && (
                     <div className="flex items-start gap-2.5">
                        <RobotIcon className="w-6 h-6 text-stone-500 flex-shrink-0" />
                        <div className="p-3 rounded-lg bg-slate-100">
                           <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse"></span>
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
            {error && <p className="px-4 pb-2 text-sm text-red-600">{error}</p>}

            <form onSubmit={handleSendMessage} className="p-2 border-t flex items-center">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={"Haz una pregunta sobre el tema..."}
                    className="flex-1 px-3 py-2 text-sm border-slate-300 rounded-lg focus:ring-stone-500 focus:border-stone-500 disabled:bg-slate-100"
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !userInput.trim()} className="ml-2 p-2 bg-stone-500 text-white rounded-full hover:bg-stone-600 disabled:bg-slate-300">
                    <SendIcon className="w-5 h-5"/>
                </button>
            </form>
        </div>
    );
};
