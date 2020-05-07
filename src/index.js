import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from "react-router-config";
import proxy from 'express-http-proxy';

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

const app = express();

app.use('/api/v1', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        const context = {};

        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send();
    });
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});