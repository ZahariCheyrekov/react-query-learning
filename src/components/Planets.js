import { useState, useEffect } from 'react';
import axios from 'axios';

export const Planets = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [planets, setPlanets] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/planets').then((res) => {
            setPlanets(res.data);
            setIsLoading(false);
        }).catch(error => {
            setError(error.messsage);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <h2>Data is Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <h1>Planets</h1>
            {planets && planets.map((planet) => {
                return <div key={planet.id}>{planet.planet}</div>
            })}
        </>
    );
}
