import url from "./url"

import {redirect} from "react-router-dom"


export const createAction = async({request}) => {
   
    const formData = await request.formData();

    // construct the body for our api call
    const newAnimal = {
        species_name: formData.get("species_name"),
        description: formData.get("description"),
        habitat: formData.get("habitat"),
        conservation_status: formData.get("conservation_status"),
        population: formData.get("population"),
        image: formData.get("image")
    }

    
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    })

    // redirect to the index page
    return redirect("/")
}


export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    
    const updatedAnimal = {
        species_name: formData.get("species_name"),
        description: formData.get("description"),
        habitat: formData.get("habitat"),
        conservation_status: formData.get("conservation_status"),
        population: formData.get("population"),
        image: formData.get("image")
    }

    
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAnimal)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}


export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}