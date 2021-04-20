import {Router} from "express"
import Settings from "../../controllers/setting"

const route = Router()
route.post("/settings", Settings.create)

export default route