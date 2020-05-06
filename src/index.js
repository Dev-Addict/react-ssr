import express from 'express';

import renderer from "./helpers/renderer";

const app = express();

app.use(express.static('build/public'));
app.get('*', (req, res) => {
    const html = renderer(req);

    res.send(html);
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});