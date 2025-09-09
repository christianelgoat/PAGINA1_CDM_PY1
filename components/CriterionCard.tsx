import React, { useState } from 'react';
import type { Criterion } from '../types';
import { Quiz } from './Quiz';
import { ChevronDownIcon, LightBulbIcon, CheckCircleIcon } from './icons';

interface CriterionCardProps {
    criterion: Criterion;
}

const CollapsibleSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center space-x-3">
                    {icon}
                    <span>{title}</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`transition-[max-height,padding] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
            >
                <div className="p-4 border-t border-slate-200 text-slate-600 prose prose-slate max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
};


export const CriterionCard: React.FC<CriterionCardProps> = ({ criterion }) => {
    const Icon = criterion.icon;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
                <div className="bg-stone-100 p-3 rounded-full mb-4 md:mb-0 self-start">
                    <Icon className="w-8 h-8 text-stone-700" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">{criterion.id}. {criterion.title}</h2>
                </div>
            </div>
            
            <div className="mb-6 p-4 bg-slate-50 border-l-4 border-stone-500 rounded-r-lg">
                <h3 className="font-semibold text-lg text-slate-800 mb-1">Objetivo "Logrado (8-10 pts)"</h3>
                <p className="text-slate-600">{criterion.objective}</p>
            </div>

            <div className="space-y-4 mb-8">
                 <CollapsibleSection title={criterion.analysis.title} icon={<LightBulbIcon className="w-6 h-6 text-yellow-500"/>}>
                    {criterion.analysis.content}
                </CollapsibleSection>

                <CollapsibleSection title={`Resumen para una Respuesta 'Lograda'`} icon={<CheckCircleIcon className="w-6 h-6 text-green-500"/>}>
                    {criterion.summary.content}
                </CollapsibleSection>
            </div>

            <div className="mt-8 border-t pt-6">
                 <h3 className="font-semibold text-lg text-slate-800 mb-4">Pon a Prueba tu Comprensión</h3>
                <Quiz quiz={criterion.quiz} criterion={criterion} />
            </div>
        </div>
    );
};