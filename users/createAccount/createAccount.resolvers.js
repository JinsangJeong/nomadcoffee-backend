import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstname, lastname, username, email, password }
    ) => {
      try {
        const existingUser = await client.user.findUnique({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Can't create account",
        };
      }
    },
  },
};
