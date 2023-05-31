import { FC } from 'react';
import { VscBook, VscLinkExternal } from 'react-icons/vsc';

import { BlogPostPreview } from '../hooks/useBlogPosts';

export const BlogPost: FC<{ post: BlogPostPreview }> = ({
    post: { title, description, pubDate, url },
}) => {
    const date = new Date(pubDate);

    return (
        <a
            href={url}
            target="_blank"
            className="border p-2 grid hover:bg-gray-50 gap-4"
            style={{ gridTemplateColumns: '66px 1fr auto' }}
        >
            <div className="p-4 flex items-center justify-center aspect-square border">
                <VscBook size={32} />
            </div>
            <div className="grow shrink">
                <h2 className="font-bold">{title}</h2>
                <p className="">{description}</p>
            </div>
            <div className="italic">
                <VscLinkExternal />
            </div>
        </a>
    );
};
