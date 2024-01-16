import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPlanets = (pageNumber) => {
    return axios.get(`http://localhost:4000/planets?_limit=2&_page=${pageNumber}`);
}

export const PaginationQueries = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { isLoading, data: planets, isError, error, isFetching } = useQuery(
        ['planets', pageNumber],
        () => fetchPlanets(pageNumber),
        {
            // Keeps the previous data between the pagination
            keepPreviousData: true
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
            {planets?.data.map((planet) => {
                return <div key={planet.id}>
                    {planet.name} {planet.planet}
                </div >
            })}
            <button
                onClick={() => setPageNumber(number => number - 1)}
                disabled={pageNumber === 1}
            >
                Prev
            </button>
            <button
                onClick={() => setPageNumber(number => number + 1)}
                disabled={pageNumber === 5}
            >
                Next
            </button>
        </>
    );
}
