import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({ 
    userName: {type: String, required: [true, 'Campo obligatorio']}, 
    password: String,  
    date:{type: Date, default: Date.now}, 
    activo: {type: Boolean, default: true} 
});

// Convertir a Modelo
const User = mongoose.model('User', userSchema);

export default User;