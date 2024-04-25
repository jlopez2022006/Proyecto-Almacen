import User from "../users/user.model.js";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../helpers/generate-JWT.js";

export const register = async (req, res) => {
  try {
    const { name, lastName, username, password, email } = req.body;

    const salt = bcryptjs.genSaltSync();
    const encryptedPassword = bcryptjs.hashSync(password, salt);

    const user = await User.create({
      name,
      lastName,
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    return res.status(200).json({
      msg: "user has been added to database",
      userDetails: {
        name: user.name + " " + user.lastName,
        user: user.username,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("No se pudo registrar el usuario");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcryptjs.compare(password, user.password))) {
      const token = await generarJWT(user.id, user.email)

      res.status(200).json({
        msg: "Bienvenido!",
        userDetails: {
          email: user.email,
          token: token
        },
      });
    }

    if (!user) {
      return res
        .status(400)
        .send(`Credenciales incorrectas, ${email} no existe en la base de datos`);
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Contraseña incorrecta");
    }

  } catch (e) {
    res.status(500).send("Comuniquese con el administrador");
  }
};
