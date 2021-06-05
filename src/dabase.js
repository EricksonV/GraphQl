import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
        userNewUrlParser: true
        })
        console.log(">>>BASE DE DATOS CONECTADA<<<");
    } catch (error) {
        console.log("No se pudo conectar");
        console.log(error);
    }
}
