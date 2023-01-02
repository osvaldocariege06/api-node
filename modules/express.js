const express = require("express");

const UserModel = require("../src/models/user.models");
const TaskModel = require('../src/models/task.models');

const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());



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


  // Response all tasks
app.get('/tasks', async (req, res) => {
  try {

    const users = await TaskModel.find({});
    return res.status(200).json(users);

  } catch (error) {

    return res.status(500).send(error.message);

  }
})

  // Response tasks by id
app.get('/tasks/:id', async (req, res) => {

  try {

    const id = req.params.id;
    const user = await TaskModel.findById(id);

    return res.status(200).json(user)

  } catch (error) {

    return res.status(500).send(error.message);

  }

})


  // Request task
app.post('/tasks', async(req, res) => {
  try {

    const user = await TaskModel.create(req.body);
    res.status(201).json(user);

  } catch (error) {

    res.status(500).send(error.message);

  }
})

  

const port = 8080;

app.listen(port, () =>
  console.log("Rodando com express na porta localhost:8080")
);
