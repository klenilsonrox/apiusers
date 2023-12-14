import Router from "express";
import { createUser, deleteUser, getAllUsers, home, updateUser } from "../controllers/userController.js";

const router = Router()

router.get("/", home)
router.get("/users", getAllUsers)
router.post("/users", createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

export default router