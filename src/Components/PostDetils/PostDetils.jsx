import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostDetils = () => {

    const navigate = useNavigate();

    const post = useLoaderData()
    console.log(post)
    const { title, body } = post

    const HandelGoBackbtn = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={HandelGoBackbtn}>Go Back</button>
        </div>
    );
};

export default PostDetils;