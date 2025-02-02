import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer" //we will create the image storage system

//create express router
const foodRouter = express.Router();

//Image storage engine



const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) //our filename will become unique
    }
})

const upload = multer({storage:storage});


//post-To send the data on the server
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);






export default foodRouter;

