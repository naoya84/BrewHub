package jp.brewhub.server.app

import jakarta.persistence.Id
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.File
import java.util.*

@RestController
@RequestMapping("/api/beer")
class BeerController {
    @GetMapping
    fun getBeer(): List<BeerResponse> {
        return listOf(
            BeerResponse().apply {
                id
                name
                comment
                store
                abv
                bitter
                deeply
                style
                country
                price
                image
            }
        )
    }

    @PostMapping
    fun postBeer(): String {
        return ""
    }
}

data class BeerResponse(
    @Id
    val id: UUID = UUID.randomUUID(),
    val name: String = "mya-brew1234",
    val comment: String = "some string",
    val store: String =  "some string",
    val abv: Double = 5.5,
    val bitter: Int = 4,
    val deeply: Int = 4,
    val style: String =  "some string",
    val country: String =  "some string",
    val price: String =  "some string",
    val image: File = File.createTempFile("temp", ".png"),
)