package jp.brewhub.server.app

import jakarta.persistence.*
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface BeerRepository: CrudRepository<BeerEntity, Long>

@Entity(name = "beers")
data class BeerEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String,
    val manufacturer: String,
    val abv: Double,
    val ibu: Int,
    val review: Int,
    val comment: String,
)