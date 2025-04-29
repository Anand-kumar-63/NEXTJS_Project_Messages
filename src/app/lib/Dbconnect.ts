import mongoose from "mongoose";
type connectionObject = {
  isConnected?: number;
};
const connection: connectionObject = {};
async function ConnectDb(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }
  // if (!process.env.MONGOOSE_DB) {
  //   throw new Error("Please define the MONGOOSE_DB environment variable");
  // }
  try {
    const db = await mongoose.connect(
      "mongodb+srv://anand2327cse1077:XeEtUaFZZgosnsdr@devtindercluster.2y6ga.mongodb.net/Projectemail?retryWrites=true&w=majority&appName=DevtinderCluster",
      {
        dbName: "Projectemail",
      }
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("ERROR IN DATABASE CONNECTION", error);
    process.exit(1); // Important: exit with error code
  }
}
export default ConnectDb;
