import '../styles/globals.scss';

import { ReactNode } from 'react';

export const metadata = {
    title: 'luc.page',
    description: 'Where all the luc stuff comes together on one page.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="ww">{children}</body>
        </html>
    );
}
