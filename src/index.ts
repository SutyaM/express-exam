import * as express from 'express';
import { router } from './app/routers/flat';

const app = express();
app.use(express.json());
const { PORT = 3000 } = process.env;


  app.use(router);

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });