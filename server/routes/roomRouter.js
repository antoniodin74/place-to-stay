import { Router } from 'express';
import { createRoom } from '../controllers/rooms.js';
import auth from '../middleware/auth.js'


const roomRooter = Router();
roomRooter.post('/', auth,  createRoom);
export default roomRooter;