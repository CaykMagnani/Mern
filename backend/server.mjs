import { Express } from "express";
import { cors } from "cors";

const PORT = process.env.PORT || 5050;
const app = Express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
