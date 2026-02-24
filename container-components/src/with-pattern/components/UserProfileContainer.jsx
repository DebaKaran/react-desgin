import { useState, useEffect } from 'react';
import axios from "axios";

const UserProfileContainer = ({ userId }) => {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserData();
        fetchUserPosts();
    }, [userId]);

    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}`
            );
            setUser(response.data);
            //Form is not required as we are creating Container Component
            // setFormData({
            //     name: response.data.name,
            //     email: response.data.email,
            //     bio: response.data.bio,
            // });
        } catch (err) {
            setError("Failed to fetch user data");
        } finally {
            setLoading(false);
        }
    };

    const fetchUserPosts = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/api/users/${userId}/posts`
            );
            console.log("Posts API response:", response.data);
            setPosts(response.data);
        } catch (err) {
            console.error("Failed to fetch posts");
        }
    };
    return (
        <div>UserProfileContainer</div>
    )
}

export default UserProfileContainer