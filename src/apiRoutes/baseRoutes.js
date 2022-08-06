import { Router } from 'express';
import { getAllLists, createList } from '../controllers/listController';
import { createCard } from '../controllers/cardController';

const router = Router();


// List Routes
router.get("dashboard_lists", getAllLists);
router.post("create_list", createList);


// Card Routes
router.get("/create_card", createCard);




// export
export {router};
