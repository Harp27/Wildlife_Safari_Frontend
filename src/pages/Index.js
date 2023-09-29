import "milligram"
import "../App.css"
import Header from "../components/Header"
import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';


function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const animals = useLoaderData()

    return (
      <>
      <Header />
        <div className="animals-grid">
          {animals.map((animal) => (
            
              <Post key={animal.id} post={animal} />
            
          ))}
        </div>
        
        <div className="form-container">
          <h2 className="title">Add an Animal</h2> 
          <Form method="post" action="/create">
            <fieldset>
                <input type="text" name="species_name" placeholder="Name" className="input"/>
                <input type="text" name="description" placeholder="Description" className="input"/>
                <input type="text" name="habitat" placeholder="Habitat" className="input"/>
                <input type="text" name="conservation_status" placeholder="Conservation Status" className="input"/>
                <input type="text" name="population" placeholder="Population" className="input"/>
                <input type="text" name="image" placeholder="Image URL" className="input"/>
                <button className="form-container">Add a new Animal</button>
            </fieldset>
          </Form>
        </div>
      </>
    )
}

export default Index;