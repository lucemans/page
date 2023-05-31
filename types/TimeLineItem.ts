import { ReactNode } from 'react';

export type TimeLineItem = {
    body: ReactNode;
    date: Date;
    origin: {
        url: string;
        title: string;
    };
};
