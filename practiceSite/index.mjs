import express, { Router } from "express"
import pagesRouter from "./routes/pages.mjs"

const app = express();
const PORT = 5000;

//Tell the app to use EJS
app.set("view engine", "ejs");
 
//Tell express where theejs files are stored
app.set("views", "views");

//Allow the browser to access CSS, JavaScript and images
app.use(express.static("public"))

//Send page requests to the pages router
app.use("/", pagesRouter);

//Handle unknown routes
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});





