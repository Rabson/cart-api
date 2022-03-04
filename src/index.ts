import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./api/app";
import seeders from "./seeders";
import dbConnection from "./utils/dbConnection";

const { PORT = 9001 } = process.env;

const bootStrap = async () => {
  try {
    const connection = await dbConnection.init(process.env.MONGO_URI as string);

    console.info(`connected to database ${connection.connection.name}`);

    await seeders.init();

    console.info("seeding completed");

    app.listen(PORT, (): void =>
      console.info(`Server Running here 👉 http://localhost:${PORT}`)
    );
  } catch (error: any) {
    console.error(`Error : Server not able to start due to ${error.message}`);
    console.error(`Stack trace : ${error.stack}`);
  }
};

bootStrap();

export default app;
