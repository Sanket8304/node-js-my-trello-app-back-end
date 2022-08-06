import { Router } from 'express';
import { getAllLists, createList, deleteList } from '../controllers/listController.js';
import { createCard, deleteCard } from '../controllers/cardController.js';

const router = Router();

// List Routes
router.get("/dashboard_lists", getAllLists);
router.post("/create_list", createList);
router.post("/delete_list", deleteList);

// Card Routes
router.post("/create_card", createCard);
router.post("/delete_card", deleteCard);

// export
export { router };
