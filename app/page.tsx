import { Header } from '../components/Header';
import { useBlogPosts } from '../hooks/useBlogPosts';

export default async () => {
    // This fetch will run on the server during `next build`
    const response = await useBlogPosts();

    return (
        <main>
            <Header />
            <div className="p-4">
                <h2>Blog Posts</h2>
                <p>
                    Hello there, this is my page with blogposts, for my other
                    stuff, checkout{' '}
                    <a href="https://luc.computer">luc.computer</a>
                </p>
            </div>
            <div>
                <div className="">
                    {response.map((item) => (
                        <div className="mb-4 relative">
                            <div className="italic border8 text-right p-4 lg:right-full lg:absolute">
                                {item.date.getUTCDay()}
                                {'/'}
                                {item.date.getUTCMonth()}
                                {'/'}
                                {item.date.getUTCFullYear()}
                            </div>
                            <div className="w-full relative">{item.body}</div>
                            <div className="text-right text-sm">
                                from{' '}
                                <a href={item.origin.url} target="_blank">
                                    {item.origin.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
