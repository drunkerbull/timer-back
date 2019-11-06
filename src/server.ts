import {server} from './app';

server.listen(process.env.PORT || 5000, () => {
  console.log('server run');
});


export default server;
