import express, { Request, Response } from "express"

const port = process.env.PORT || 5000;

const app = express ()

app.get("/",(req:Request, res:Response)=>{
    res.send("API is runnning...")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})