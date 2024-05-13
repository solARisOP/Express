import {contactsDB} from "../models/modelContacts.js"
import expressAsyncHandler from "express-async-handler";

const asyncHandeler = expressAsyncHandler;

const allContact = asyncHandeler(async (req, res)=>{
    let data = await contactsDB.find({user_id : req.user.id});  
    console.log("here");
    res.status(200).json(data);
})

const getContact = asyncHandeler(async(req, res)=>{
    const contact = await contactsDB.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("User don't have permission to fetch other user contacts");
    }
    res.status(200).json(contact);
});

const createContact = asyncHandeler(async (req, res)=>{
    const {name, email, phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400)
        throw new Error("All fields are manadatory")
    }    
    const record = await contactsDB.create({user_id: req.user.id, name, email, phone});
    res.status(201).json(record);
})

const updateContact = asyncHandeler(async(req, res)=>{
    const contact = await contactsDB.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found")
    }
    console.log(contact)
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    const data = await contactsDB.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.status(200).json(data);
})

const deleteContact = asyncHandeler(async(req, res)=>{
    const contact = await contactsDB.findById(req.params.id);
    if(!contact)
    {
        res.status(403);
        throw new Error("User don't have permission to delete other user contacts");
    }
    console.log(contact.user_id.toString())
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");
    }
    await contactsDB.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(contact);
})

export {allContact, createContact, getContact, updateContact, deleteContact}