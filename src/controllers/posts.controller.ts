import { Request, Response } from 'express';
import { pool } from '../config/database'

export const postsController = {
    //get all todos 
    allTodo: async(req:Request, res:Response) => {
        try{
            const getAllTodo = await pool.query("SELECT * FROM todo")
            res.status(200).json({status:"success", data:getAllTodo.rows})
        }catch(err){
            res.json({status:"failed", error:"failed to retrieve all todos"})
        }
    },

    //add new todo
    addTodo: async(req:Request, res:Response) => {
        
        try{
            const { description } = req.body
            const newTodo = await pool.query("INSERT INTO todo (desc_todo) VALUES($1) RETURNING *", [description])
            res.status(201).json({status:"success", data:newTodo.rows[0]})
        }catch(err){
            res.status(400).json({status:"failed", error:"Server failure, please try again!!"})
        }
    },

    //get specific todo
    getSingleTodo: async(req:Request, res:Response) => {
        try{
            const { id } = req.params 
            const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
            res.status(200).json({status:"success", data:getTodo.rows[0]})
        }catch(err){
            res.status(500).json({status:"success", data:err.message})
        }
    },

    //get specific todo
    updateSingleTodo: async(req:Request, res:Response) => {
        try{
            const { id } = req.params
            const { description } = req.body 
            console.log(description)
            const updatedTodo = await pool.query("UPDATE todo SET desc_todo = $1 WHERE todo_id = $2 RETURNING *", [description, id])
            res.status(200).json({status:"success", data:updatedTodo.rows[0]})
        }catch(err){
            res.status(500).json({status:"success", data:err.message})
        }
    },


    //get specific todo
    deleteSingleTodo: async(req:Request, res:Response) => {
        try{
            const { id } = req.params 
            const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id])
            res.status(200).json({status:"success", data:deletedTodo.rows[0]})
        }catch(err){
            res.status(500).json({status:"success", data:err.message})
        }
    },
}