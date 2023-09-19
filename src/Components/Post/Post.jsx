/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './post.css'



const Post = ({ post }) => {
    // console.log(post)
    const { id, title, body } = post
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h4 className='body'>{body}</h4>

            <Link to={`/post/${id}`}>See details</Link>
        </div>
    );
};

export default Post;