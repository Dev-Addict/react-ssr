import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Home from "./client/Components/Home";

const app = express();

app.use(express.static('build/public'));
app.get('/', (req, res) => {
    const html = `
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <div id="root"></div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

app.listen(3000, () => {
    console.log('server is listening port 3000');
});