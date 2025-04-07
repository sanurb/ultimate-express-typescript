import { Router } from "ultimate-express";
import { getHealth } from "../controllers/health_controller";

const router = Router();

router.get("/", getHealth);

export default router;
