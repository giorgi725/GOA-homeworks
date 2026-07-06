import useAuth from "../context/authContext";
import usePost from "../context/PostContext";
import { useState, useEffect } from "react";

function Profile () {
    const {user, logout} = useAuth();
    const {posts, createPost, getPosts, deletePost, editPost} = usePost();
    
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        getPosts(user.id)
    }, [])

    function addPost(e) {
        e.preventDefault();
        const post = {
            title: e.target.title.value,
            desc: e.target.desc.value
        }

        createPost(post, user.id);

        e.target.title.value = ""
        e.target.desc.value = ""
    }

    function editHandler(e) {
        e.preventDefault();
        const newPost = {
            title: e.target.newTitle.value,
            desc: e.target.newDesc.value
        }

        editPost(user.id, editingId, newPost.title, newPost.desc);
        setEditingId(null)
    }

    return (
        <section>
            <h2>Profile Section</h2>
            <h4>Username: {user.username}</h4>
            <h4>Email: {user.email}</h4>

            <button onClick={logout}>Logout</button>

            <h3>Add Post</h3>
            <form onSubmit={addPost}>
                <input type="text" name="title" placeholder="Post Title" required/>
                <br />
                <textarea name="desc" placeholder="Post Description"></textarea>
                <br />
                <button type="submit">Add Post</button>
            </form>

            <section>
                {posts.map((post, index) => {
                    if (editingId === post.postId) {
                        return (
                        <form onSubmit={editHandler}>
                            <input type="text" name="newTitle" placeholder={post.title} required/>
                            <br />
                            <textarea name="newDesc" placeholder={post.desc}></textarea>
                            <br />
                            <button type="submit">Update Post</button>
                            <button onClick={() => setEditingId(null)}>Cancel editing</button>
                        </form>
                        )
                    } else {
                        return (
                            <div key={index}>
                                <h3 key={`${index}h3`}>{post.title}</h3>
                                <p key={`${index}p`}>{post.desc}</p>
                                <button key={`${index}del`} onClick={() => deletePost(user.id, post.postId)}>Delete</button>
                                <button key={`${index}edt`} onClick={() => setEditingId(post.postId)}>Edit</button>
                            </div>
                        )
                    }
                })}
            </section>
        </section>
    )
}

export default Profile;