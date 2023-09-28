import {Link, useLoaderData, Form} from 'react-router-dom';
import Header from "../components/Header"

function Show (props){
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={div}>
        <Header />
        <img src={post.image} alt={post.species_name} style={{ maxWidth: '100%', height: 'auto' }} />
        <h2>{post.species_name}</h2>
        <p>Description: {post.description}</p>
        <p>Habitat: {post.habitat}</p>
        <p>Conservation Status: {post.conservation_status}</p>
        <p>Population: {post.population}</p>
        <h2>Update Animal</h2>
        <Form method="post" action={`/update/${post.id}`}>
            <input type="text" name="species_name" placeholder="Name" defaultValue={post.species_name}/>
            <input type="text" name="description" placeholder="Description" defaultValue={post.description}/>
            <input type="text" name="habitat" placeholder="Habitat" defaultValue={post.habitat}/>
            <input type="text" name="conservation_status" placeholder="Conservation Status" defaultValue={post.conservation_status}/>
            <input type="text" name="population" placeholder="Population" defaultValue={post.population}/>
            <input type="text" name="image" placeholder="Image URL" defaultValue={post.image}/>
            <button>Update</button>
        </Form>

        <Form method="post" action={`/delete/${post.id}`}>
        <button>Delete Animal</button>
        </Form>

        <Link to="/">Back to Index</Link>
    </div>


}


export default Show;