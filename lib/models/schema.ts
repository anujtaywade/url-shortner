import mongoose, { Schema, model, models } from "mongoose";
import { nanoid } from "nanoid";

const UrlSchema = new mongoose.Schema({
  
  shortUrl: {
    type: String,
    required: true,
    default: () => nanoid,
  },

  originalUrl: {
    type: String,
    required: true,
  },

  clicks: {
    type: Number,
    default: 0,
  },
},
{timestamps : true});

export default models.schema || model("schema",UrlSchema)
