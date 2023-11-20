import { Router } from "express";
import {
  createStaff,
  deleteStaff,
  viewUserStaff,
} from "../controller/staffController";

const router: Router = Router();

router.route("/create-staff/:userID").post(createStaff);
router.route("/view-user-staff/:userID").get(viewUserStaff);

router.route("/delete-user-staff/:userID/:staffID").delete(deleteStaff);

export default router;
