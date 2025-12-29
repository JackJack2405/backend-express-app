import { Router } from "express";
import {
  createUser2,
  deleteUser2,
  getUsers2,
  updateUser2,
} from "../../modules/users/users.controlloer.js";

export const router = Router();

router.get("/", getUsers2);

router.get("/:id", getUsers2);

router.post("/", createUser2);

//The function inside is called Route Handler / Controller
router.delete("/:id", deleteUser2);


router.patch("/:id", updateUser2);