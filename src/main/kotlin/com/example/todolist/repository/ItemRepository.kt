package com.example.todolist.repository

import com.example.todolist.model.Item
import org.springframework.data.mongodb.repository.MongoRepository

interface ItemRepository : MongoRepository<Item, String>
