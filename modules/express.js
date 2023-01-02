const express = require("express");
const UserModel = require("../src/models/user.models");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

// app.get("/users", (req, res) => {
//   const users = [
//     {
//       name: "Osvaldo Cariege",
//       email: "osvaldocariege06@gmail.com",
//     },
//     {
//       name: "Cristiano Ronaldo",
//       email: "cr7@gmail.com",
//     },
//   ];

//   res.status(200).json(users);
// });

// Response all users
app.get("/users", async (req, res) => {
  try {

    const users = await UserModel.find({});
    return res.status(200).json(users);

  } catch (error) {

    return res.status(500).send(error.message);

  }
});

// Response user by id
app.get("/users/:id", async (req, res) => {
  try {

    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);

  } catch (error) {

    return res.status(500).send(error.message);

  }
});

// Request user
app.post("/users", async (req, res) => {
  try {

    const user = await UserModel.create(req.body);
    res.status(201).json(user);

  } catch (error) {

    res.status(500).send(error.message);

  }
});

  // Update user by id
  app.path('/users/:id', async (req, res) => {

    try {

      const id = req.params.id;
      const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(user);

    } catch (error) {

      res.status(500).send(error.massage)

    }

  })

const port = 8080;

app.listen(port, () =>
  console.log("Rodando com express na porta localhost:8080")
);
