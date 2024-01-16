import { useState, useEffect } from 'react';
import axios from 'axios';

export const Planets = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/planets').then((res) => {
            setPlanets(res.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <h1>Data is Loading...</h1>;
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
