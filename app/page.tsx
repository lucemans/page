export default async () => {
    // This fetch will run on the server during `next build`
    const response = await fetch('https://miguel.build/api/location');
    const data = await response.json();

    return <main>...{JSON.stringify(data)}</main>;
};
