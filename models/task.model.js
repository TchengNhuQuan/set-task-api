const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(    type: "number",
    required: true,
  },
  taskName: {
    type: "string",
    required: true,
    unique: true,
  },
  isDone: {
    type: "string",
    required: false,
  },
  owner: {
    type: "number",
    required: true,
  },
};




const Tasktasktaskconst Product = mTngo;
;
