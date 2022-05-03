import mongoose from "mongoose"

const settingsSchema = new mongoose.Schema
   ({
      username: {
         type: String,
         unique: true
      },
      chat: Boolean,
   },
      {
         timestamps: true
      })

const Settings = mongoose.model("Item", settingsSchema)

export default Settings