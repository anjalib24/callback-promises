function manipulate(input,callback)
{
    const manipulate=input.toUpperCase();
    callback(manipulate);
}



function logstring(manipulate)
{
    console.log(`the manipulated string is:${manipulate}`)
}




manipulate("hello,word!",logstring);