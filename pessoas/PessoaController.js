// const {Router} =  require("express");
// const router = Router();

// const pessoa = (req,res)=>{
//         if(isNaN(req.params.id)){
//             res.sendStatus(400);
//         }
//         else{
//             let id = parseInt(req.params.id);
//             modelPessoa.findOne({  
//                 where: {id:id}
//             }).then((pessoa)=>{
//                 if(pessoa != undefined){
//                     res.statusCode = 200;
//                     res.json(pessoa);
//                 }
//                 else{
//                     res.sendStatus(404);
//                 }
//             })
//         }
//     }
// module.exports = pessoa;