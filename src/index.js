import 'babel-polyfill';
import express from 'express';

import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static('build/public'));
app.get('*', (req, res) => {
    const store = createStore();

    const html = renderer(req, store);

    res.send(html);
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});