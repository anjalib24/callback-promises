function greet(name)
{
    return new Promise((resolve)=>
    {
        const greeting=`hello,${name}!`;
        resolve(greeting);

    });

}
greet("mithun").then((message)=>console.log(message));