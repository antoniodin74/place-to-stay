import { Router } from 'express';
import { createRoom } from '../controllers/room.js';
import auth from '../middleware/auth.js'


const roomRooter = Router();
roomRooter.post('/', auth,  createRoom);
export default roomRooter;