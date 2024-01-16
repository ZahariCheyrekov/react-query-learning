import axios from "axios";
import { useQuery } from "react-query";

const fetchPlanets = () => {
    return axios.get('http://localhost:4000/planets');
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
}

export const ParallelQueries = () => {
    const { data: planetsData } = useQuery('planets', fetchPlanets);
    const { data: friendsData } = useQuery('friends', fetchFriends);

    if (planetsData) {
        console.log(planetsData);
    }

    if (friendsData) {
        console.log(friendsData);
    }

    return (
        <h1>ParallelQueries</h1>
    );
}
