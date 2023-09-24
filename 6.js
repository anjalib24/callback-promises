async function fetch()
{
const respose=await
fetch(" https://jsonplaceholder.typicode.com/todos/");
const data=await response.json();
console.log(data);
}
fetch();