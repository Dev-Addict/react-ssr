import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Home from "./client/Components/Home";

const app = express();

app.get('/', (req, res) => {
    const content = renderToString(<Home/>);
    res.send(content);
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});