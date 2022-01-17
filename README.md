# Desafio LinkAPI

Integração entre [Pipedrive] e [Bling!]

##### Configuração Inicial

Inicialmente é necessário configurar as variáveis de ambiente no arquivo `.env` (utilize o arquivo `.env.example` como base).


##### Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- NodeJS
- Express
- MongoDB
- Axios
- Pipedrive API
- Bling API

##### Banco de dados (Mongo)
- `MONGO_UR` - url de acesso do Mongo DB atals, que pode ser acessado gratuitamente para testes
   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

##### Bling!
- `bling/bling_api_url` - url da api do bling
- `BLING_API_KEY` - chave de acesso a api do bling

##### Pipedrive
- `pipedrive/url_api` - url da api do pipedrive
- `PIPEDRIVE_API_KEY` - chave de acesso a api do pipedrive


## Documentação Base
[API Reference - Pipedrive](https://developers.pipedrive.com/docs/api/v1/)
[Pedidos API para desenvolvedores - Bling](https://ajuda.bling.com.br/hc/pt-br/articles/360046424094-GET-pedidos)
