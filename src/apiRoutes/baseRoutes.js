import { Router } from 'express';
import { getAllLists, createList } from '../controllers/listController.js';
import { createCard } from '../controllers/cardController.js';

const router = Router();

// List Routes
router.get("/dashboard_lists", getAllLists);
router.post("/create_list", createList);

// Card Routes
router.post("/create_card", createCard);

// export
export { router };
