export default () =>{
    return fetch ('http://localhost:3000/api/motorcycle.json')
    .then(response => response.json())
    .then(responseData => responseData.motorcycles)
}