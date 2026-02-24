import LoadingSpinner from '../commons/LoadingSpinner';
import ErrorMessage from '../commons/ErrorMessage';

const UserProfilePresenter = ({ user, posts, loading, error, onRetry }) => {

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

    return (
        <div>UserProfilePresenter</div>
    )
}

export default UserProfilePresenter