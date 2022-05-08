import express from "express";
import { config } from "dotenv";
import connectDB from './config/db.js'
import product from './routes/productRoutes.js'
import user from './routes/userRoutes.js'
import { notFound, errorHandler} from './middleware/error.js'

config();

connectDB()

const app = express();

app.use(express.json())

app.use((res,creq, next) => {
  next()
})
app.get("/", (req, res) => {
  res.send("OK");
});

app.use('/api/products', product)
app.use('/api/users', user)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server running on port ${PORT}`)
);
