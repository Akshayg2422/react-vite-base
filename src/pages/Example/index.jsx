import { useQuery } from "@tanstack/react-query"

function Example() {
    const { isPending, error, data, } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    // if (isSuccess) return <div>Data: {JSON.stringify(data)}</div>;

    const handleClick = () => {
        window.location.href = data.url; // Navigate to the URL
    }

    return (
        <div>
            <h1>{data.full_name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
            <div>
                <a onClick={handleClick}>{'Tanstack - Repo'}</a>
            </div>
        </div>
    )
}
export default Example