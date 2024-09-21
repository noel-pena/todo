package com.todolist.controller

import com.todolist.model.Item
import com.todolist.repository.ItemRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:5173"])
@RestController
@RequestMapping("/api/items")
class ItemController(private val itemRepository: ItemRepository) {

    @GetMapping
    fun getAllItems(): List<Item> = itemRepository.findAll()

    @PostMapping("/api/add")
    fun addItem(@RequestBody newItem: Map<String, String>): ResponseEntity<Item> {
        val itemTitle = newItem["newItem"]
        return if (itemTitle != null) {
            val item = itemRepository.save(Item(title = itemTitle))
            ResponseEntity(item, HttpStatus.CREATED)
        } else {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @DeleteMapping("/api/items/{id}")
    fun deleteItem(@PathVariable id: String): ResponseEntity<Map<String, String>> {
        return if (itemRepository.existsById(id)) {
            itemRepository.deleteById(id)
            ResponseEntity(mapOf("message" to "Item deleted successfully"), HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }
}
