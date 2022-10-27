//shared api service for all user data
export async function fetchData(resource) {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos/1/';
    try{
        const response = await fetch(`${baseURL}${resource}`);
        const data = await response.json();
        console.log(data)
        return data;
    }catch (error) {
        console.log(error);
    }
}