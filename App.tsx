import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { CriterionCard } from './components/CriterionCard';
import { criteriaData } from './constants/content';
import type { Criterion } from './types';
import { BookOpenIcon } from './components/icons';

const App: React.FC = () => {
    const [activeCriterionIndex, setActiveCriterionIndex] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const activeCriterion: Criterion = criteriaData[activeCriterionIndex];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="flex h-screen bg-stone-100 text-slate-800">
            <Sidebar 
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                activeCriterionIndex={activeCriterionIndex} 
                setActiveCriterionIndex={setActiveCriterionIndex} 
            />
            
            <main className="flex-1 p-4 md:p-8 overflow-y-auto transition-all duration-300">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-8">
                        <div className="flex items-center space-x-3 mb-2">
                            <BookOpenIcon className="w-8 h-8 text-stone-600" />
                            <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
                                Análisis de Rúbrica: Página 1 - Biosensores
                            </h1>
                        </div>
                        <p className="text-slate-600 text-lg">
                            Una guía interactiva para alcanzar la máxima puntuación en la evaluación del artículo.
                        </p>
                    </header>

                    <CriterionCard 
                        key={activeCriterionIndex} 
                        criterion={activeCriterion} 
                    />
                </div>
            </main>
        </div>
    );
};

export default App;