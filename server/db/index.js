const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://tanel:TANEL2412@cluster0.nktltrc.mongodb.net/")
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
