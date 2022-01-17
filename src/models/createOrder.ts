import axios from "axios";
import {toXML} from "jstoxml";
import dotenv from "dotenv";
import { Response, Request } from "express";
import {bling_api_url} from "../config/bling"
dotenv.config();

export const ordersBling = async (req: Request, res: Response) => {
    const JsonToXml = toXML({
        pedido: {
            cliente: {
               nome: "Organisys Software",
               endereco: "Rua Visconde de São Gabriel",
               cpf_cnpj: "12345678912",
               cep: "95.700-000",
               cidade: "Bento Gonçalves",
               uf: "RS",
               fone: "5481153376",
               email: "linkapi@teste.com.br"
            },
            transporte: {
               transportadora: "Transportadora XYZ",
               tipo_frete: "R",
               servico_correios: "SEDEX - CONTRATO",
               dados_etiqueta: {
                  nome: "Endereço de entrega",
                  endereco: "Rua Visconde de São Gabriel",
                  numero: "392",
                  complemento: "Sala 59",
                  municipio: "Bento Gonçalves",
                  uf: "RS",
                  cep: "95.700-000",
                  bairro: "Cidade Alta"
               },
               volumes: {
                  volume: [
                     {
                        servico: "SEDEX - CONTRATO",
                        codigoRastreamento: "POAFG35HWHREGY"
                     }
                  ]
               }
            },
            itens: {
               item: [
                  {
                     codigo: "001",
                     descricao: "Caneta 001",
                     un: "Pç",
                     qtde: "10",
                     vlr_unit: "1.68"
                  },
                  {
                     codigo: "003",
                     descricao: "Teclado 003",
                     un: "Cx",
                     qtde: "7",
                     vlr_unit: "18.65"
                  }
               ]
            },
            parcelas: {
               parcela: [
                  {
                     data: "01/09/2009",
                     vlr: "100",
                     obs: "Teste obs 1"
                  },
                  {
                     datA: "06/09/2009",
                     vlr: "50",
                     obs: ""
                  },
                  {
                     data: "11/09/2009",
                     vlr: "50",
                     obs: "Teste obs 3"
                  }
               ]
            },
            vlr_frete: "15",
            vlr_desconto: "10",
            obs: "Testando o campo observações do pedido",
            obs_internas: "Testando o campo observações internas do pedido"
         }
    },)

    try {        
        const order = await axios.post(`${bling_api_url}/pedido/json/?apikey=${process.env.BLING_API_KEY}&xml=${JsonToXml},{ 'content-type': 'x-www-form-urlencoded' }`)
        return order;
    } catch (error) {
        console.log(error)
    }

}