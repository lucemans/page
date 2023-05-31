export default async () => {
    // This fetch will run on the server during `next build`
    const response = await fetch(
        'http://worldtimeapi.org/api/timezone/Europe/Amsterdam',
        {
            next: { revalidate: 10 },
        }
    );
    const data = await response.json();

    return <main>...{JSON.stringify(data)}</main>;
};
