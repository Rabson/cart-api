import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import seeders from "../src/seeders";

let mongo: MongoMemoryServer;

beforeAll(async (): Promise<void> => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  await mongoose.connect(mongoUri);
});

beforeEach(async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;
    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );
    await Promise.all(promises);
    await seeders.init();
  }
});

afterAll(function (done) {
  mongoose.connection
    .dropDatabase()
    .then(() => mongoose.connection.close())
    .then(() => mongo.stop())
    .then(() => done());
});
