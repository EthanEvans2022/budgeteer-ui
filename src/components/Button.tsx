import React from 'react';
import '../styles/Button.css'

export enum ButtonModifiers {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
}

interface ButtonProps {
    onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
    text: string;
    mod?: (ButtonModifiers | 'None');
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, mod, type }) => {
    const buttonClass = `button ${mod}`;

    return (
        <button 
            onClick={onClick} 
            className={buttonClass}
            type={type || 'button'}
        > 
            {text}
        </button>
    );
};
