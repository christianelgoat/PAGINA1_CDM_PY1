import React, { useState } from 'react';
import type { QuizQuestion, Criterion } from '../types';
import { CorrectAnswerAnimation } from './CorrectAnswerAnimation';
import { GeminiChatbot } from './GeminiChatbot';
import { RobotIcon } from './icons';

interface QuizProps {
    quiz: QuizQuestion[];
    criterion: Criterion;
}

export const Quiz: React.FC<QuizProps> = ({ quiz, criterion }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.length).fill(null));
    
    const currentQuestion = quiz[currentQuestionIndex];
    const selectedOption = answers[currentQuestionIndex];
    const isAnswered = selectedOption !== null;
    const isCorrect = isAnswered && selectedOption === currentQuestion.correctAnswerIndex;

    const handleOptionSelect = (index: number) => {
        if (isAnswered) return;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = index;
        setAnswers(newAnswers);
    };

    const goToNext = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    
    const goToPrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const getButtonClass = (index: number) => {
        if (!isAnswered) {
            return 'bg-white hover:bg-slate-100 border-slate-300';
        }
        if (index === currentQuestion.correctAnswerIndex) {
            return 'bg-green-100 border-green-400 text-green-800 font-semibold';
        }
        if (index === selectedOption) {
            return 'bg-red-100 border-red-400 text-red-800';
        }
        return 'bg-slate-50 border-slate-200 text-slate-500';
    };

    const difficultyColor = {
        'Fácil': 'text-green-600 bg-green-100',
        'Intermedio': 'text-yellow-600 bg-yellow-100',
        'Difícil': 'text-red-600 bg-red-100',
    };

    return (
        <div className="relative overflow-hidden p-4 border rounded-lg bg-slate-50/50 min-h-[300px]">
            {/* Progress Bar and Navigation */}
            <div className="flex items-center justify-between mb-4">
                <button onClick={goToPrev} disabled={currentQuestionIndex === 0} className="px-3 py-1 text-sm bg-white border rounded-md disabled:opacity-50 hover:bg-slate-100">Anterior</button>
                <div className="text-sm font-semibold text-slate-600">Pregunta {currentQuestionIndex + 1} de {quiz.length}</div>
                <button onClick={goToNext} disabled={currentQuestionIndex === quiz.length - 1} className="px-3 py-1 text-sm bg-white border rounded-md disabled:opacity-50 hover:bg-slate-100">Siguiente</button>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
                <div className="bg-stone-500 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}></div>
            </div>

            {/* Question */}
            <div className="text-center">
                 <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${difficultyColor[currentQuestion.difficulty]}`}>
                    Nivel: {currentQuestion.difficulty}
                </span>
                <p className="font-medium text-slate-800 mb-4 text-lg animate-float">{currentQuestion.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-2 max-w-md mx-auto">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-3 border rounded-md transition-all duration-200 ${getButtonClass(index)}`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Feedback & Floating Robot */}
            {isAnswered && (
                 <>
                    {!isCorrect && (
                         <div className="absolute bottom-0 left-0 w-full h-48 z-0 pointer-events-none" aria-hidden="true">
                            <RobotIcon className="absolute w-28 h-28 text-stone-400 opacity-70 animate-float-across" />
                        </div>
                    )}
                    <div className="relative z-10 mt-4 p-3 rounded-md text-sm animate-fade-in max-w-xl mx-auto">
                        {isCorrect ? (
                             <div className="text-center bg-green-50 border-green-200 text-green-800 p-4 rounded-lg">
                                <CorrectAnswerAnimation />
                                <p className="font-semibold mb-1 text-lg">¡Correcto!</p>
                                <p>{currentQuestion.explanation}</p>
                            </div>
                        ) : (
                            <div>
                                 <div className="p-3 rounded-md text-sm bg-red-50 border-red-200 text-red-800 mb-4">
                                    <p className="font-semibold mb-1">Incorrecto.</p>
                                    <p>{currentQuestion.explanation}</p>
                                </div>
                                <GeminiChatbot criterion={criterion} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};