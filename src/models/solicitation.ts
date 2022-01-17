import {model, Schema, connection} from "mongoose";


type OderType = {
    numero: Number,
    idPedido: Number,
    codigos_rastreamento: {
        codigoRastreamento : String
    },
    volumes:{ 
        volume: {
            servico: String,
            codigoRastreamento: String
        }, 
    }
}

const Orderschema = new Schema<OderType>({
    numero:{
        type: Number,
        required: true 
    },
    idPedido: {
        type: Number,
        required: true
    },
    codigos_rastreamento:{
        codigoRastreamento: { type: String },
    },
    volumes: {
      volume: {
            servico: {type: String, required: true},
            codigoRastreamento:{type: String, required: true}
        }
    }
});

const modelName = "Order";
export default (connection && connection.models[modelName]) ? (connection.models[modelName]) : model<OderType>(modelName,Orderschema);





