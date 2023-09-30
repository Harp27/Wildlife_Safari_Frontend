import url from "./url"


export const indexLoader = async () => {
    // make api call to backend index route
    const response = await fetch(url)
    // turn response into a javascript object
    const animals = await response.json()
    // return the javascript object so the Index component can use it
    return animals
}


export const showLoader = async ({params}) => {
    // grab the id from params
    const id = params.id
    // make an API call to the backend show route
    const response = await fetch(url + id)
    // turn the response into a JavaScript object
    const animal = await response.json()
    // return the JavaScript object so the Show component can use it
    return animal
}