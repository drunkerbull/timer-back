import app from './app';

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('server run');
});
export default server;
