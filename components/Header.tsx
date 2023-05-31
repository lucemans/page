import { FC } from 'react';

export const Header: FC = () => {
    return (
        <header className="w-full bg-gray-50 p-2">
            <nav>
                <a href="/" className="text-2xl font-bold">
                    .page
                </a>
                <a href="https://luc.blog" target="_blank">
                    [<span className="text-blue-500 hover:underline">blog</span>
                    ]
                </a>
                <a href="https://luc.contact" target="_blank">
                    [
                    <span className="text-blue-500 hover:underline">
                        contact
                    </span>
                    ]
                </a>
                <a href="https://luc.computer" target="_blank">
                    [
                    <span className="text-blue-500 hover:underline">
                        computer
                    </span>
                    ]
                </a>
                <a href="https://luc.domains" target="_blank">
                    [
                    <span className="text-blue-500 hover:underline">
                        domains
                    </span>
                    ]
                </a>
            </nav>

            <div className="flex justify-between">
                <p>
                    <a href="https://luc.bio"> Luc van Kampen</a>
                </p>
                <p>Confidential</p>
            </div>
        </header>
    );
};
