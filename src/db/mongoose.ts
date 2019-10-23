import mongoose from 'mongoose';

class MongoDB {
  uri: string = '';
  currentMongoose = mongoose;

  constructor() {

  }

  async init(dbLogin: string = '', dbPass: string = '', dataBaseName: string = '') {
    this.uri = `mongodb+srv://${dbLogin}:${dbPass}@cluster0-uneen.gcp.mongodb.net/${dataBaseName}`;
    console.log('Connect to server: ' + this.uri)
    try {
      await this.currentMongoose.connect(this.uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
      this.currentMongoose.set('useFindAndModify', false);
      console.log('connected to db success')
    } catch (e) {
      console.log('ERROR: connect to db',e);
    }

  }
}

const DB = new MongoDB();

export default DB;

