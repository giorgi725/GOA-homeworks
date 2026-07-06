import { useEffect } from "react";
import usePost from "../context/PostContext";
import useAuth from "../context/authContext";

function Feed () {
    const {user} = useAuth();
    const {posts, getAllPosts, deletePost} = usePost();

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <section>
            {posts.map((post, index) => {
                return (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.desc}</p>
                        <button onClick={() => deletePost(user.id, post.postId)}>Delete</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Feed;