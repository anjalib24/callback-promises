function double(arr,callback)
{
    const doublearr=arr.map((num)=>
    {
        return callback(num);
    });

    return doublearr;

}
const original = [1, 2, 3, 4, 5];
function callback(num) {
    return num * 2;
}

const doubledArray = double(original, callback);
console.log(doubledArray);
