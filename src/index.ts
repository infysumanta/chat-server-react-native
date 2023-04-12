import dotenv from 'dotenv';
import app from './app';
import db from './config/db';

dotenv.config();
db.connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
