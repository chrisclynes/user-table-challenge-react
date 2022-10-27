import './userPosts.css';

const UserPosts = ({ userPosts }) => {
    return (
        <div className="main__posts_container">
            <h3 className="posts_title">Posts</h3>
            <div id="posts">
                {
                    userPosts?.map((post, i) => {
                        return (
                            <>
                                <span className="post_title" key={i}>{post.title}</span>
                                <p className="post_text">{post.body}</p>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserPosts;