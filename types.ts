import type React from 'react';

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
    difficulty: 'Fácil' | 'Intermedio' | 'Difícil';
}

export interface Criterion {
    id: number;
    title: string;
    icon: React.FC<{className?: string}>;
    objective: string;
    analysis: {
        title: string;
        content: React.ReactNode;
    };
    summary: {
        title: string;
        content: React.ReactNode;
    };
    quiz: QuizQuestion[];
}