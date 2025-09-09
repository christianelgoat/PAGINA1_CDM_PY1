import React from 'react';
import { criteriaData } from '../constants/content';
import { ChevronLeftIcon, MenuIcon } from './icons';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeCriterionIndex: number;
    setActiveCriterionIndex: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeCriterionIndex, setActiveCriterionIndex }) => {
    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="fixed top-4 left-4 z-20 p-2 bg-white/70 backdrop-blur-sm rounded-full text-slate-600 hover:bg-white md:hidden"
            >
                {isOpen ? <ChevronLeftIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
            </button>
            <aside className={`bg-white shadow-lg transition-all duration-300 ease-in-out z-10 flex flex-col ${isOpen ? 'w-64 p-4' : 'w-0 p-0'} overflow-hidden`}>
                <h2 className="text-xl font-bold text-stone-800 mb-6 mt-12 md:mt-0">Criterios de Evaluación</h2>
                <nav className="flex-1">
                    <ul>
                        {criteriaData.map((criterion, index) => {
                            const Icon = criterion.icon;
                            const isActive = activeCriterionIndex === index;
                            return (
                                <li key={criterion.id} className="mb-2">
                                    <button
                                        onClick={() => {
                                            setActiveCriterionIndex(index);
                                            if (window.innerWidth < 768) {
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                                            isActive
                                                ? 'bg-stone-100 text-stone-800 font-semibold shadow-sm'
                                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                    >
                                        <Icon className={`w-6 h-6 ${isActive ? 'text-stone-700' : 'text-slate-400'}`} />
                                        <span className="flex-1">{criterion.title}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                 <div className="mt-auto text-center text-xs text-slate-400 p-2">
                    <p>&copy; {new Date().getFullYear()} Análisis Interactivo</p>
                </div>
            </aside>
        </>
    );
};