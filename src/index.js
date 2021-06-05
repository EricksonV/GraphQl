import express from "express"
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";

import { connect } from "./dabase";

const app = express();
connect();


app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    
}))


app.listen(3000,()=>console.log('>>>Conectado el servidor en el puerto 3000<<<'))