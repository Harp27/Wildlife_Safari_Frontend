import {Link} from 'react-router-dom';
import "../App.css"

function Post ({post}){
    return <div className="animal-image">
        <Link to={`/post/${post.id}`}>
        <img src={post.image} alt={post.species_name} />
        <h2>{post.species_name}</h2>
        </Link>
    </div>
}

export default Post;

