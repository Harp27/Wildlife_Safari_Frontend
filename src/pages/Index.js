import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const animals = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create an Animal</h2>
        <Form method="post" action="/create">
            <input type="text" name="species_name" placeholder="Name"/>
            <input type="text" name="description" placeholder="Description"/>
            <input type="text" name="habitat" placeholder="Habitat"/>
            <input type="text" name="conservation_status" placeholder="Conservation Status"/>
            <input type="text" name="population" placeholder="Population"/>
            <input type="text" name="image" placeholder="Image URL"/>
            <button>Create a new Animal</button>
        </Form>
    </div>
    {animals.map((animal) => <Post key={animal.id} post={animal}/>)}
    </>

}

export default Index;