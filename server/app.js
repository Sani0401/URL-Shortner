import express, { urlencoded } from "express";
import user_router from "./user_routes.js";
const app = express();
app.use(urlencoded({ extended: true }));
app.use("/", user_router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
