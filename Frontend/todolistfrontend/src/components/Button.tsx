interface ButtonProps {
    colour: string;
    text: string;
    onClick: () => void;
}

const Button = (Props: ButtonProps) => {
    return <button data-testid="top-button" style={{backgroundColor: Props.colour}} className='btn' onClick={Props.onClick}>{Props.text}</button>
}

export default Button