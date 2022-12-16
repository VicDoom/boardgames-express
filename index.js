import express from 'express'
import cors from 'cors'
import {GoodsInfo, types} from "./GoodsInfo.mock.js";

const app = express();

app.use(cors(
    {
        origin: '*',
    }
))

app.get('/:catalog', function (req, res){
    if (types.includes(req.params.type)) {
        res.send(JSON.stringify(GoodsInfo.filter(item => item.type === res.params.type)))
    } else {
        res.send(JSON.stringify(GoodsInfo))
    }
});

app.listen(3002);