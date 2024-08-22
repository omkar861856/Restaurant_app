import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";
import authRouter from "./routes/authRoutes.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connection URL
const url = process.env.MONGO_URL;

const client = new MongoClient(url);

async function ConnectDB() {
  try {
    await client.connect();
    console.log("✔✔ Connected to the database ✔✔");
    return client;
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
  }
}

await ConnectDB();

// Database Name and collection setup
const dbName = "Users";
const db = client.db(dbName);
export const collection = db.collection("users");

// home get method
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use('/auth', authRouter);


//callback function to our app for feedback
app.listen(PORT, () => {
  console.log("Server running on port 3000 🎉🎉🎉");
});