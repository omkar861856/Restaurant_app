import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";

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
const dbName = "Contacts";
const db = client.db(dbName);
const collection = db.collection("contacts");

let menuItems = [
  {
      id: "1",
      name: "Margherita Pizza",
      category: "Main Course",
      image: "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg",
      rating: 4.5,
      price: 100,
      description: "Classic pizza with tomatoes, mozzarella, and basil."
  }
];

// Create a Menu Item
app.post('/menu-items', (req, res) => {
  const newItem = {
      id: (menuItems.length + 1).toString(),
      ...req.body
  };
  menuItems.push(newItem);
  res.status(201).json(newItem);
});

// Get All Menu Items
app.get('/menu-items', (req, res) => {
  res.json(menuItems);
});

// Get a Single Menu Item
app.get('/menu-items/:id', (req, res) => {
  const item = menuItems.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Update a Menu Item
app.put('/menu-items/:id', (req, res) => {
  const itemIndex = menuItems.findIndex(i => i.id === req.params.id);
  if (itemIndex === -1) return res.status(404).json({ message: "Item not found" });

  menuItems[itemIndex] = { id: req.params.id, ...req.body };
  res.json(menuItems[itemIndex]);
});

// Delete a Menu Item
app.delete('/menu-items/:id', (req, res) => {
  menuItems = menuItems.filter(i => i.id !== req.params.id);
  res.json({ message: "Menu item deleted successfully" });
});

//callback function to our app for feedback
app.listen(PORT, () => {
  console.log("Server running on port 3000 🎉🎉🎉");
});