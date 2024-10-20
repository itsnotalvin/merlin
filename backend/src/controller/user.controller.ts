import { Request, Response } from "express";

// register a new user
export const register = async (req: Request, res: Response) => {
    try {
       res.status(200).json({
        message: "User registered successfully",
      });
    } catch (error) {
       res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  
  // login a user
  export const login = async (req: Request, res: Response) => {
    try {
       res.status(200).json({
        message: "User logged in successfully",
      });
    } catch (error) {
       res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };