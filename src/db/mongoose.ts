import mongoose from 'mongoose';

class MongoDB {
  uri: string = '';
  currentMongoose = mongoose;

  constructor() {

  }

  async init(dbLogin: string = '', dbPass: string = '', dataBaseName: string = '') {
    this.uri = `mongodb+srv://${dbLogin}:${dbPass}@cluster0-uneen.gcp.mongodb.net/${dataBaseName}`;
    try {
      await this.currentMongoose.connect(this.uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
      this.currentMongoose.set('useFindAndModify', false);
    } catch (e) {
      console.log(e);
    }

  }
}

const DB = new MongoDB();

export default DB;

