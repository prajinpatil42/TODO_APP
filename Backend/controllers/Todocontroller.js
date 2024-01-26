const ToDoModel = require("../models/Todomodel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
module.exports.saveToDo = (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("Added Succesfully....");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;
  console.log("id ---> ", _id);
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
