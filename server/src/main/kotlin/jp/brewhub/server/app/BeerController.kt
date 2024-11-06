package jp.brewhub.server.app

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/beer")
class BeerController(private val beerService: BeerService) {
    @GetMapping
    fun getBeer(): List<GetBeerResponse> {
        return beerService.get().map {
            GetBeerResponse(
                id = it.id,
                name = it.name,
                manufacturer = it.manufacturer,
                abv = it.abv,
                ibu = it.ibu,
                review = it.review,
                comment = it.comment,
            )
        }
    }

    @PostMapping
    fun postBeer(body: PostBeerRequest): String {
        return beerService.post(
            BeerModel(
                name = body.name,
                manufacturer = body.manufacturer,
                abv = body.abv,
                ibu = body.ibu,
                review = body.review,
                comment = body.comment,
            )
        )
    }
}

data class GetBeerResponse(
    val id: Long,
    val name: String,
    val manufacturer: String,
    val abv: Double,
    val ibu: Int,
    val review: Int,
    val comment: String,
//    val image: File = File.createTempFile("temp", ".png"),
)

data class PostBeerRequest(
    val name: String,
    val manufacturer: String,
    val abv: Double,
    val ibu: Int,
    val review: Int,
    val comment: String,
)