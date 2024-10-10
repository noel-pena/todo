package com.todolist.service

import com.todolist.model.Item
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.stereotype.Service

@Service
class ItemService(@Autowired private val mongoTemplate: MongoTemplate) {
    private fun getCollectionName(type: String): String {
        return when (type.lowercase()) {
            "today" -> "items_todays"
            "week" -> "items_weeks"
            "month" -> "items_months"
            else -> throw IllegalArgumentException("Invalid item type: $type")
        }
    }

    fun getAllItems(type: String): List<Item> {
        val collectionName = getCollectionName(type)
        return mongoTemplate.findAll(Item::class.java, collectionName)
    }

    fun addItem(item: Item, type: String): Item {
        val collectionName = getCollectionName(type)
        return mongoTemplate.save(item, collectionName)
    }

    fun deleteItem(id: String, type: String): Boolean {
        val collectionName = getCollectionName(type)
        val query = Query().addCriteria(Criteria.where("id").`is`(id))
        return mongoTemplate.remove(query, Item::class.java, collectionName).wasAcknowledged()
    }
}