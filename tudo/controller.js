
import schema from './user.model.js'

export function addtask(req,res){
    try {
    const {task}=req.body
    console.log(req.body);
    res.status(201).send(schema.create({task}));
        
    } catch (error) {
        res.status(404).send(error);
        
    }
    

}
export async function getTask(req,res){
    const task=await schema.find()
        res.status(200).send(task)
    

}

export function delTask(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}