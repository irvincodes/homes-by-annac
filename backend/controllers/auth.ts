import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
const AUTHENTICATE = true;

interface DecodedJwt extends JwtPayload {
  accountType: string;
}

const isAuth = (authorized) => (req, res, next) => {
  if (!AUTHENTICATE) return next();
  console.log("authenticating...");

  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(",")[1];

    const verifiedUser = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedJwt;
    if (authorized.includes(verifiedUser.accountType)) {
      console.log("authenticated...");
      req.headers.authorization = verifiedUser;
      next();
    } else {
      res.status(404).json({ message: "unauthorized" });
    }
  } catch (error) {
    res.status(404).json({ message: "unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (!AUTHENTICATE) return next();
  console.log("authenticating specific user...");

  const user = req.headers.authorization;
  console.log(user);
  const { id } = req.params;

  if (id === user.accountId || !AUTHENTICATE) {
    console.log("authenticated");
    next();
  } else {
    res.status(404).json({ message: "unauthorized" });
  }
};

module.exports = { isAuth, isUser };
