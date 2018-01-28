// @flow
import express from 'express';
import expressWs from 'express-ws';
import morgan from 'morgan';
import compression from 'compression';
import serveStatic from 'serve-static';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(compression());
app.use(serveStatic(`${__dirname}/public`));

app.get('/', (req, res, next) => {
  console.log('get route', req.testing);
  next();
});

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});
