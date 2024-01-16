import axios from "axios";
import { useQuery } from "react-query";

const fetchUserById = (userId) => {
    return axios.get(`http://localhost:4000/users/${userId}`);
}

const fetchPlatformCourses = (platformId) => {
    return axios.get(`http://localhost:4000/platforms/${platformId}`);
}

export const DependentQueries = ({ userId }) => {
    const { data: user } = useQuery(['user', userId], () => fetchUserById(userId));
    const platformId = user?.data.platformId;

    useQuery(
        ['platforms', platformId],
        () => fetchPlatformCourses(platformId),
        {
            // This call won't be executed until the platformId is retrieved
            enabled: !!platformId
        }
    );

    return (
        <h1>DependentQueries</h1>
    );
}
