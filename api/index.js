import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

/* CONFIGURATIONS */
dotenv.config();
const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
app.use(express.json());
app.use(cookieParser());

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(async () => {
        app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
        console.log('MongoDB Connection Successful')
    })
    .catch((error) => console.log(`${error} did not connect`));

/* ROUTES */
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});