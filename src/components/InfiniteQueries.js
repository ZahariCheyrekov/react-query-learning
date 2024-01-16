import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchPlanets = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/planets?_limit=2&_page=${pageParam}`);
}

export const InfiniteQueries = () => {
    const { isLoading, data: planets, isError, error, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'planets',
        fetchPlanets,
        {
            getNextPageParam: (_, pages) => {
                if (pages.length < 5) {
                    return pages.length + 1;
                } else {
                    return undefined;
                }
            }
        }
    )

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    if (isLoading || isFetching) {
        return <h1>Data is Loading...</h1>;
    }

    return (
        <>
            <h1>Planets Pagiantion</h1>
            {planets?.pages.map((group, i) => {
                return <Fragment key={i}>
                    {
                        group.data.map(planet => (
                            <h2 key={planet.id}>
                                {planet.id} {planet.planet}
                            </h2>
                        ))
                    }
                </Fragment >
            })}
            <button
                onClick={fetchNextPage}
                disabled={!hasNextPage}
            >
                Load More
            </button>
        </>
    );
}
