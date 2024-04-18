import User from "../users/user.model.js";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../helpers/generate-JWT.js";

export const register = async (req, res) => {
    try {
      const { username, password, email } = req.body;
  
      const salt = bcryptjs.genSaltSync();
      const encryptedPassword = bcryptjs.hashSync(password, salt);
  
      const user = await User.create({
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
  
      return res.status(200).json({
        msg: "user has been added to database",
        userDetails: {
          user: user.username,
          email: user.email,
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send("No se pudo registrar el usuario");
    }
  };