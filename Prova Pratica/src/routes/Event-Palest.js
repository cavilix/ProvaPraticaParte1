import { Router } from "express";
import { register, getPalestrante } from "../controllers/usuarioController";

const router = Router()

router.post("register", register)
router.get("/palestrantes", getPalestrante)

export default router;