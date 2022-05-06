import createServer from "./utils/server";



const app = createServer();

app.listen(3000, () => {console.log("Server listing at http://localhost:3000")});