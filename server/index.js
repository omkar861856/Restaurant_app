import express from "express";
import "dotenv/config";
import authRouter from "./routes/authRoutes.js";
import ConnectDB from "./db/ConnectDb.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;

const client = await ConnectDB();

// Database Name and collection setup
const dbName = "Users";
const db = client.db(dbName);
export const collection = db.collection("users");

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
  try {
    const newItem = {
        id: (menuItems.length + 1).toString(),
        ...req.body
    };
    menuItems.push(newItem);
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error)    
  }
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

// Authentication Routes
app.use('/auth', authRouter);

//callback function to our app for feedback
app.listen(PORT, () => {
  console.log("Server running on port 3000 🎉🎉🎉");
});
