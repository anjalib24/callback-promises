const books=[
    {
       
        title:"fhe great gatsby",
        author:"f.scott fitzgerald",
        year:1995
    },
    {
        title:"to kill a mockingbird",
        author:"anjali",
        year:2000,
    },
    {
        title:"abnsdjlh",
        author:"birla",
        year:2003,
    }
];
function result(books,callback)
{
    const result=books.map((book)=>book.title);
    callback(result);
}
function titles(result)
{
    result.sort();
    console.log(result.join(","));
}
result(books,titles);
