import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(() => {
  console.log(`server is listening on port ${PORT}`);
});
