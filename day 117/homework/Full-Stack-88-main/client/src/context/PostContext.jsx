import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const PostContext = createContext();

const usePost = () => useContext(PostContext)

export default usePost;

const API_URL = 'http://localhost:3000/root/post'

export const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const createPost = async (post, userId) => {
        try {
            const response = await fetch(`${API_URL}/${userId}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })

            const data = await response.json();

            if(!response.ok) {
                alert(data.message)
                return
            }

            alert("Post added successfully!");
            setPosts((prev) => [...prev, data])

        } catch (err) {
            console.log(err)
        }
    }

    const getAllPosts = async () => {
        try {
            const response = await fetch(API_URL)

            const data = await response.json();

            if(!response.ok) {
                alert(data.message)
                return
            }

            setPosts(data)
        } catch(err) {
            console.log(err)
        }

    }

    const getPosts = async (userId) => {
        try {
            const response = await fetch(`${API_URL}/${userId}`)

            const data = await response.json()

            if(!response.ok) {
                alert(response.message)
                return 
            }

            setPosts(data)
        } catch (err) {
            console.log(err)
        }

    }
    
    const deletePost = async (userId, postId) => {
        try {
            const response = await fetch(`${API_URL}/${userId}/${postId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
            const data = await response.json()

            if(!response.ok) {
                alert(data.message)
                return
            }

            setPosts(data)

        } catch (err) {
            console.log(err)
        }
    }

    const editPost = async (userId, postId, newTitle, newDesc) => {
        try {
            const response = await fetch(`${API_URL}/${userId}/${postId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newTitle, newDesc})
            })

            const data = await response.json()

            if(!response.ok) {
                alert(data.message)
                return
            }
            setPosts(data)

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <PostContext.Provider value={{posts, createPost, getAllPosts, deletePost, getPosts, editPost}}>
            {children}
        </PostContext.Provider>
    )
}