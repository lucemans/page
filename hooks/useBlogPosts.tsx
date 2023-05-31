import { BlogPost } from '../components/BlogPost';
import { TimeLineItem } from '../types/TimeLineItem';
import { doFetch } from '../utils/doFetch';

export type BlogPostPreview = {
    title: string;
    description: string;
    pubDate: string;
    url: string;
};

export type BlogPost5Resposne = {
    total: string;
    post_previews: BlogPostPreview[];
};

export const useBlogPosts = async () => {
    const posts = await doFetch<{
        total: string;
        post_previews: BlogPostPreview[];
    }>('http://luc.blog/api/5.json', {
        cache: 'reload',
    });

    return posts.post_previews.map(
        (post) =>
            ({
                body: <BlogPost post={post} />,
                date: new Date(post.pubDate),
                origin: {
                    title: '🗒️ luc.blog',
                    url: 'http://luc.blog',
                },
            } as TimeLineItem)
    );
};
