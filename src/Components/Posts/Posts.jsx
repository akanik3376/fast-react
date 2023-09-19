import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './posts.css'

const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts)
    return (
        <div>
            <h1>Posts</h1>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;