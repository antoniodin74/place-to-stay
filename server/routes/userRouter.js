import { Router } from "express";
import { login, register, updateProfile } from '../controllers/user.js';
import auth from "../middleware/auth.js";



const userRooter = Router();
userRooter.post('/register', register)
userRooter.post('/login', login)
userRooter.patch('/updateProfile', auth, updateProfile)


export default userRooter;