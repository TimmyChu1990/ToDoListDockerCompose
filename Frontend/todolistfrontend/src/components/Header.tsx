import Button from "./Button";

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    const onClick = () => {
        console.log("Button to hide the submit form.");
    }
    return (
        <header className='header'>
            <h1 data-testid="header1">{props.title}</h1>
            <Button colour='green' text='Hello' onClick={onClick}></Button>
        </header>
    )
}

export default Header
