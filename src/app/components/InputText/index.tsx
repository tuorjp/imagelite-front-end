interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    value?: string;
}

export const InputText: React.FC<InputTextProps> = ({ onChange, style, placeholder, id, value }) => {
    return (
        <input 
            type="text" 
            className={`${style} border px-3 py-2 rounded-md text-gray-900`}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            value={value}
        />
    )
}