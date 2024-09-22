// function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(next); //in catch, next will be called
//     }
// }

// module.exports=wrapAsync;

module.exports = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next); //in catch, next will be called
    }
}
