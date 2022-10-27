import { useState, useEffect } from 'react';
import { fetchData } from '../services/service';
import UserTable from '../components/table/UserTable';
import UserPosts from '../components/posts/UserPosts';

const Homepage = () => {
    const [userData, setUserData] = useState();
    const [userPosts, setUserPosts] = useState();

    //on mount fetch user data for table
    useEffect(() => {
        const fetchUserData = async () => {
            const data = await fetchData("users");
        
            setUserData(data);
        }
        fetchUserData();
    }, []);

    const getUserPosts = async (id) => {
       const data = await fetchData(`posts?userId=${id}`);

       setUserPosts(data);
    }

    return (
        <div className="App">
            <UserTable userData={userData} getUserPosts={getUserPosts} />
            <UserPosts userPosts={userPosts} />
        </div>
    )
}

export default Homepage;