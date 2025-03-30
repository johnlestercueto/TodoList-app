const mongoose = require("mongoose")
const Todo = require("../models/model.todo")

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;

        // code to prevent bugs
        // {   }

        const newTodo = new Todo({
            title,
            description,
        })

        await newTodo.save();

        res.status(201).json(newTodo)
        console.log(req.body);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({message: "Todo deleted successfully"})
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateTodo = async (req, res) => {
    try {
            const { id } = req.params;
            const { title, description } = req.body;
    
            await Todo.findByIdAndUpdate(
                id, 
                { title, description }, 
                { new: true }
            );

            res.json({message: "Todo updated successfully"})
    
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {getTodos, createTodo, updateTodo, deleteTodo}
