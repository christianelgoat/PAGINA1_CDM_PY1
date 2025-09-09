import React from 'react';

export const CorrectAnswerAnimation: React.FC = () => {
    return (
        <div className="star-burst w-full h-20 mb-2">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 90}%`,
                        animationDelay: `${Math.random() * 0.5}s`,
                    }}
                />
            ))}
        </div>
    );
};
