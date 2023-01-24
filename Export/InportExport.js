const add =(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    if (a>=b)
    return a-b
    else
    return b-a
}
const mul=(a,b)=>{
    return a*b
}
const name= "Vinod"

// module.exports.add = add
// module.exports.sub = sub
// module.exports.mul = mul
// module.exports.name = name

module.exports ={add,mul,name,sub}