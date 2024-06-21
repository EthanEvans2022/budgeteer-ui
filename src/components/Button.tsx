import React from 'react';
import '../styles/Button.css'

export enum ButtonModifiers {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
}

interface ButtonProps {
    onClick: () => void;
    text: string;
    mod?: (ButtonModifiers | 'None');
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, mod }) => {
    const buttonClass = `button ${mod}`;

    return (
        <button onClick={onClick} className={buttonClass}>
            {text}
        </button>
    );
};
