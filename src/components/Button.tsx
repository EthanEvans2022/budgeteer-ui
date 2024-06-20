import React from 'react';
import '../styles/Button.css'

enum ButtonModifiers {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
}

interface ButtonProps {
    onClick: () => void;
    text: string;
    mods?: (ButtonModifiers | 'None')[];
}

const Button: React.FC<ButtonProps> = ({ onClick, text, mods }) => {
    const buttonClass = `button ${mods?.join(' ')}`;

    return (
        <button onClick={onClick} className={buttonClass}>
            {text}
        </button>
    );
};

export default Button;