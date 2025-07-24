// Старий стиль імпортування "Command to run style"
// const express = require('express');
// const bodyParser = require('body-parser');

// Сучасний стиль імпортування "Module imports style" ES6
import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';

// Importing routes
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use('/api', authRoutes);

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(
        `Server is running on port ${PORT} and started at http://localhost:${PORT}`
    );
});
