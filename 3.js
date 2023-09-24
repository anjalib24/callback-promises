const person={
    first:"mithun",
    last:"s",
    age:20,

    
};
function ageindays(person,callback)
{
    const fullname=`${person.first}${person.last}`;
    const ageindays=person.age*365;
    callback(fullname,ageindays);

}
function result(fullname,ageindays){
    console.log(`the person's full name is ${fullname} and their age is ${ageindays}`);
}

ageindays(person,result);