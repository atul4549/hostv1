import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// import connectDB from './config/db.js';
// import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
// connectDB(MONGO_URI);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.get("*", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
