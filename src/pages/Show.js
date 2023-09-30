import {Link, useLoaderData, Form} from 'react-router-dom';
import Header from "../components/Header"
import { useEffect } from 'react';

function Show (props){
    const post = useLoaderData()

    useEffect(() => {
        console.log('Show component mounted');
       
      }, []);

    return <div >
        <Header />
        <img src={post.image} alt={post.species_name} className="show-image" />
        <h2 className="show-text">{post.species_name}</h2>
        <p className="show-text"> {post.description}</p>
        <p className="show-text">Habitat: {post.habitat}</p>
        <p className="show-text">Conservation Status: {post.conservation_status}</p>
        <p className="show-text">Population: {post.population}</p>
        <h2 className="show-text">Update Animal</h2>
        <Form method="post" action={`/update/${post.id}`}className="form-container">
            <input className="show-input" type="text" name="species_name" placeholder="Name" defaultValue={post.species_name}/>
            <input className="show-input" type="text" name="description" placeholder="Description" defaultValue={post.description}/>
            <input className="show-input" type="text" name="habitat" placeholder="Habitat" defaultValue={post.habitat}/>
            <input className="show-input" type="text" name="conservation_status" placeholder="Conservation Status" defaultValue={post.conservation_status}/>
            <input className="show-input" type="text" name="population" placeholder="Population" defaultValue={post.population}/>
            <input className="show-input" type="text" name="image" placeholder="Image URL" defaultValue={post.image}/>     
            <button className="form-container">Update Animal</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`} className="form-container">
        <button className="form-container">Delete Animal</button>
        </Form>

        <Link className="form-container" to="/">Home</Link>
    </div>


}


export default Show;