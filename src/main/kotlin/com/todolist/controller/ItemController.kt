package com.todolist.controller

import com.todolist.model.Item
import com.todolist.service.ItemService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:5173"])
@RestController
@RequestMapping("/api")
class ItemController(@Autowired val itemService: ItemService) {

    @GetMapping("/{type}/items")
    fun getAllItems(@PathVariable type: String): ResponseEntity<List<Item>> {
        val items = itemService.getAllItems(type)
        return ResponseEntity(items, HttpStatus.OK)
    }

    @PostMapping("/{type}/items")
    fun addItem(@RequestBody newItem: Map<String, String>, @PathVariable type: String): ResponseEntity<Item> {
        val itemTitle = newItem["newItem"]
        return if (itemTitle != null) {
            val item = itemService.addItem(Item(title = itemTitle), type)
            ResponseEntity(item, HttpStatus.CREATED)
        } else {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @DeleteMapping("/{type}/items/{id}")
    fun deleteItem(@PathVariable id: String, @PathVariable type: String): ResponseEntity<Map<String, String>> {
        return if (itemService.deleteItem(id, type)) {
            ResponseEntity(mapOf("message" to "Item deleted successfully"), HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }
}