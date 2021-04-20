import express from 'express';
import settingsRoute from "./routes/settings"
import cors from "cors"

import "./db/mongo"

const app = express()

app.use(cors());
app.use(express.json())

app.use(settingsRoute)

app.get("/", (req, res)=>{
   return res.send('Olá NLW 05')
})
app.post("/users", (req, res)=>{
return res.json({message: "User saved successfully"})
})

app.listen(3005, ()=> console.log('Server  is running on port 3005'))