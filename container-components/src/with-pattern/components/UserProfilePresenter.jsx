import LoadingSpinner from '../commons/LoadingSpinner';
import ErrorMessage from '../commons/ErrorMessage';
import ProfileHeader from './ProfileHeader';
import PostsList from '../posts/PostsList';
import { useState } from 'react';

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    if (loading) {
        return (
            //Moved to a different component altogether

            // <div className="loading-container">
            //     <div className="spinner"></div>
            //     <p>Loading user profile...</p>
            // </div>
            <LoadingSpinner message={"Loading user profile..."} />
        );
    }



    if (error) {
        return (
            // <div className="error-container">
            //     <h3>Oops! Something went wrong</h3>
            //     <p>{error}</p>
            //     <button onClick={fetchUserData}>Try Again</button>
            // </div>
            <ErrorMessage title={"Oops! Something went wrong"}
                message={error}
                onRetry={onRetry} />
        );
    }
    const handleSaveProfile = async () => {
        const result = await onUpdateUser(formData);
        if (result.success) {
            setIsEditing(false);
        }
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                bio: user.bio,
            })
        };

    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    return (
        <div className="user-profile">
            <ProfileHeader user={user}
                isEditing={isEditing}
                formData={formData}
                onStartEdit={() => setIsEditing(true)}
                onInputChange={handleInputChange}
                onCancelEdit={handleCancelEdit}
                onSaveProfile={handleSaveProfile}
            />

            <PostsList posts={posts} />
        </div>
    )
}

export default UserProfilePresenter