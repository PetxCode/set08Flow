import { Router } from "express";
import {
  createUser,
  deleteOneUser,
  viewOneUser,
  viewUsers,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);

router.route("/view-all-user").get(viewUsers);
router.route("/view-one-user/:userID").get(viewOneUser);

router.route("/delete-user/:userID").delete(deleteOneUser);
export default router;
