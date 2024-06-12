interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    value?: string;
    type?: string;
}

interface FieldErrorProps {
    error: any | null
}

export const InputText: React.FC<InputTextProps> = ({ onChange, style, placeholder, id, value, type="text" }) => {
    return (
        <input 
            type={type} 
            className={`${style} border px-3 py-2 rounded-md text-gray-900`}
            onChange={onChange}
            placeholder={placeholder}
            id={id}
            value={value}
        />
    )
}

export const FieldError: React.FC<FieldErrorProps> = ({error}) => {
    if(error) {
        return (
            <span className="text-red-500 text-sm">{error}</span>
        )
    }

    return false
}