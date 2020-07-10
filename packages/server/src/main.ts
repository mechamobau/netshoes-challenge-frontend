import express from 'express';

import cors from 'cors';

import productRoutes from './entities/product/product.routes';

import bodyParser from 'body-parser';

import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'assets')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product', productRoutes);

const PORT = process.env.PORT || 8000;

const DIRNAME = process.env.DIRNAME || '127.0.0.1';

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://${DIRNAME}:${PORT}`);
});
