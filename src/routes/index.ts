import { Router } from 'express';
import { postsController }  from '../controllers/posts.controller';

const router = Router()

/**
 * todo routes
 */

//get all todod
router.get("/get_all_todos", postsController.allTodo)

//add new todod
router.post("/add_new_todo", postsController.addTodo)

//get a single todo
router.get("/get_single_todo/:id", postsController.getSingleTodo)

//update a single todo
router.put("/update_single_todo/:id", postsController.updateSingleTodo)

//delete a single todo
router.delete("/delete_single_todo/:id", postsController.deleteSingleTodo)

export default router;