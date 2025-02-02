import mongoose, { mongo } from "mongoose";

const formInputSchema = new mongoose.Schema({
    medical_name: {type: String},
    gst_numbers: {type: String},
    dl_numbers: {type: String},
    address: {type: String}
})

export const formInput = mongoose.models.formInput || mongoose.model("formInput", formInputSchema)