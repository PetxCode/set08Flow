import { Request, Response } from "express";
import userModel from "../model/userModel";
import staffModel from "../model/staffModel";
import { Types } from "mongoose";
import projectModel from "../model/projectModel";
import taskModel from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const { taskTitle, budget, deadline, email } = req.body;

    const staff = await staffModel.findOne({ email });
    const project: any = await projectModel.findById(projectID);

    if (project?.budgetLeft < budget) {
      return res.status(404).json({ msg: "Budget left is not enough" });
    } else {
      if (project && staff) {
        const task: any = await taskModel.create({
          taskTitle,
          budget,
          deadline,
          assignee: staff,
        });

        project.task.push(new Types.ObjectId(task._id));
        project.save();

        await projectModel.findByIdAndUpdate(
          projectID,
          {
            budgetGivenOut: project.budgetGivenOut + budget,
            budgetLeft: project.budgetLeft - budget,
          },
          { new: true }
        );

        return res.status(201).json({
          message: "creating project",
          data: task,
        });
      } else {
        return res.status(404).json({
          message: "Error matching project",
        });
      }
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating user",
      data: error.message,
    });
  }
};

export const deleteProjectTask = async (req: Request, res: Response) => {
  try {
    const { taskID, projectID } = req.params;

    const project: any = await projectModel.findById(projectID);

    if (project) {
      const task = await taskModel.findByIdAndDelete(projectID);

      project.project.pull(new Types.ObjectId(taskID));
      project.save();

      return res.status(201).json({
        message: "creating project",
        data: project,
      });
    } else {
      return res.status(404).json({
        message: "Error matching user",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error creating user",
    });
  }
};

export const viewProjectTask = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const project = await projectModel.findById(projectID).populate({
      path: "task",
    });

    return res.status(200).json({
      message: "viewing project",
      data: project,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing project",
    });
  }
};
