import './header.scss';

export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robotic Factory';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
            {children}
        </header>
    );
}
