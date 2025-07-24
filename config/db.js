import { DB_USER, DB_PASSWORD } from './secret.js';
import mongoose from 'mongoose';

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rcbdrcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export async function connectDB() {
    try {
        await mongoose.connect(URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
    } finally {
        // await mongoose.disconnect();
    }
}
