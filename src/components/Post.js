import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
        <img src={post.image} alt={post.species_name} style={{ maxWidth: '100%', height: 'auto' }} />
        <h2>{post.species_name}</h2>
        <p>Description: {post.description}</p>
        <p>Habitat: {post.habitat}</p>
        <p>Conservation Status: {post.conservation_status}</p>
        <p>Population: {post.population}</p>
        </Link>
    </div>
}

export default Post;