import { Router } from "express";
import {
  createUserBromo,
  createUserFreemo,
  createUserPremo,
  deleteOneUser,
  signinUser,
  viewOneUser,
  viewUsers,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user-freemo").post(createUserFreemo);
router.route("/create-user-bromo").post(createUserBromo);
router.route("/create-user-premo").post(createUserPremo);
router.route("/login-user").post(signinUser);

router.route("/view-all-user").get(viewUsers);
router.route("/view-one-user/:userID").get(viewOneUser);

router.route("/delete-user/:userID").delete(deleteOneUser);
export default router;
