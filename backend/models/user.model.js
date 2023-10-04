import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {

        //{"ID":"","username":"","password":"","email":"","fullname":"","groupid":"","active":"","ext_security_id":"","reset_date":},
        nombre:{
            type:String,
            require:true
        },
        apellido:{
            type:String,
            require:true
        },
        edad:{
            type: Number,
            require: true
        },
        login: {
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        estado:{
            type:String,
            require:true
        },
        perfil:{
            type:String,
            require:true
        }

    }
) ;

export default mongoose.model('users',userSchema) ;