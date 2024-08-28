package com.example.todolist.controller

import com.example.todolist.model.Item
import com.example.todolist.repository.ItemRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/items")
class ItemController(private val itemRepository: ItemRepository) {

    @GetMapping
    fun getAllItems(): List<Item> = itemRepository.findAll()

    @PostMapping("/add")
    fun addItem(@RequestBody newItem: Map<String, String>): ResponseEntity<Item> {
        val itemTitle = newItem["newItem"]
        return if (itemTitle != null) {
            val item = itemRepository.save(Item(title = itemTitle))
            ResponseEntity(item, HttpStatus.CREATED)
        } else {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @DeleteMapping("/{id}")
    fun deleteItem(@PathVariable id: String): ResponseEntity<Map<String, String>> {
        return if (itemRepository.existsById(id)) {
            itemRepository.deleteById(id)
            ResponseEntity(mapOf("message" to "Item deleted successfully"), HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }
}
