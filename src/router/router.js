const express = require('express');
const app = express();
const router = express.Router();
const Client = require('../model/model')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname)
    }                        
});
 
let upload = multer({storage:storage})
 
router.get('/',async(req,res)=>{
    try{
        const data = await Client.find();
             res.status(200).json(data);
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.get('/user/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await Client.findById(_id);
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.patch('/edit/:id',upload.single('image'),async(req,res)=>{
    try{
        const _id = req.params.id;
        const image = req.file?req.file.filename:null;
        const {fname,lname,sex,age,salary,phone,email,job,add}= req.body;
        const data = await Client.findByIdAndUpdate(_id,{fname,lname,sex,age,salary,phone,email,job,add,image},{
            new:true
        });
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.delete('/delete/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const data = await Client.findByIdAndDelete(_id);;
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json("error at data");
        }     
    }catch(e){
        res.status(422).json("error at data rendered");
    }
    
});

router.post('/adduser',upload.single('image'),async(req,res)=>{
try{
    const image = req.file?req.file.filename:null;
    const {fname,lname,sex,age,salary,phone,email,job,add}= req.body;
    const user = new Client({fname,lname,sex,age,salary,phone,email,job,add,image});
    const data = await user.save();
    if(data){
        res.status(200).json("registration success")
    }else{
        res.status(422).json("inavlid")
    }
}catch(e){
    res.status(422).json("error at registration")
}
});




module.exports = router;