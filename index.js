const express = require('express');
const cors = require('cors');
const routerApi = require('./routers');
const {
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');
const port = process.env.PORT || 3003;
const app = express();

app.use(express.json());

const whitelist = ['https://yard-sale-admin.vercel.app/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Yard Sale API');
});

routerApi(app);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
