import mongoose from "mongoose";

mongoose.Promise = global.Promise;
// mongoose.set("debug", true);

const init = async (uri: string) =>
  mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
  });

export default { init };
