import React from 'react'
import Post from './Post'

const PostsList = ({ posts }) => {
    return (
        <div className="user-posts">
            <h2>Recent Posts ({posts.length})</h2>
            {posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            )}
        </div>
    )
}

export default PostsList