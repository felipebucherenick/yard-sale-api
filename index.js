const express = require('express');
const routerApi = require('./routers');
const {
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');
const port = 3003;
const app = express();

app.get('/', (req, res) => {
  res.send('Yard Sale API');
});

routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port ${port}`);
});
