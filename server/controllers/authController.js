import { collection } from "../index.js";
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/generateToken.js';


export async function signUp (req, res) {
    try {
      const { username, email, password, role } = req.body;
      const existingUser = await collection.findOne({ email });
  
      if (existingUser) {
        return res
          .status(400)
          .send("User already exists selecet another email id");
      }
  
      //hash
  
      const saltRounds = parseInt(process.env.SALT);
  
      const hashedPassword = bcrypt.hash(
        password,
        saltRounds,
        async (err, hash) => {
          if (err) throw err;
  
          const result = await collection.insertOne({
            username,
            email,
            password: hash,
            role,
          });
  
          res.status(201).send("Successfully registered");
        }
      );
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

export async function login (req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await collection.findOne({ email });
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const match = await bcrypt.compare(password, user.password);
  
      if (match) {
        
        let token = generateToken(user._id);
  
        res.send({ msg: "Logged in successfully", token });
      } else {
        return res.status(401).send("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }



