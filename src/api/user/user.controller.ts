import { Request, Response } from "express";
import userService from "./user.service";

const controller = {

    getAll: (req: Request, res: Response, next) => {
        return userService.getAll((err, users) => {
            // if(err) { return handleError(res, err); }
            res.status(200).json(users);
        });
        // res.json([{name: "aaa"}]);
    }

};

export default controller;
