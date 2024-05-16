interface ButtonProps {
    color?: string;
    label?: string;
    hover?: string;
    onClick?: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({onClick, color, label, hover}) => {
    return (
        <button 
            className={`${color} text-white px-4 py-2 rounded-md hover:${hover}`} 
            onClick={onClick}
        >
            {label}
        </button>
    )
}