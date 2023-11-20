import { Router } from "express";
import {
  createTask,
  deleteProjectTask,
  viewProjectTask,
} from "../controller/taskController";

const router: Router = Router();

router.route("/create-task/:projectID").post(createTask);
router.route("/view-user-task/:projectID").get(viewProjectTask);

router
  .route("/delete-task-project/:projectID/:taskID")
  .delete(deleteProjectTask);

export default router;
