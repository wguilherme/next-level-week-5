import Settings from "../../models/settings"

const settingsControllers = {
   async create(req, res) {
      try {

         const settings = new Settings(req.body)

         await settings.save()


         res.status(200).json(settings)
         
      } catch (error) {
         res.status(400).json(error.message)
      }
   }
}

export default settingsControllers