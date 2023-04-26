import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
const AUTHENTICATE = true;

interface DecodedJwt extends JwtPayload {
  accountType: string;
}

const isAuth =
  (authorized: string[]) => (req: Request, res: Response, next: () => void) => {
    console.log("isAuth fired!");
    if (!AUTHENTICATE) return next();
    console.log("authenticating...");

    try {
      const authorization = req.headers.authorization;
      if (!authorization) {
        throw new Error("Authorization header missing");
      }
      console.log("authorization: ", authorization);
      const token = authorization.split(" ")[1];
      console.log("token: ", token);

      const verifiedUser = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedJwt;
      console.log("VerifiedUser: ", verifiedUser);
      if (authorized.includes(verifiedUser.accountType)) {
        console.log("authenticated...");
        req.headers.authorization = JSON.stringify(verifiedUser);
        next();
      } else {
        res.status(404).json({ message: "unauthorized" });
      }
    } catch (error) {
      res.status(404).json({ message: "unauthorized" });
    }
  };

// const isUser = (req: Request, res: Response, next: () => void) => {
//   if (!AUTHENTICATE) return next();
//   console.log("authenticating specific user...");

//   const user = req.headers.authorization;
//   console.log(user);
//   const { id } = req.params;

//   if (user && id === user.accountId || !AUTHENTICATE) {
//     console.log("authenticated");
//     next();
//   } else {
//     res.status(404).json({ message: "unauthorized" });
//   }
// };

export default { isAuth };
