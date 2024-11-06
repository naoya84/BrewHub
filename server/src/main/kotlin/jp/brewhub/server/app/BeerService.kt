package jp.brewhub.server.app
import org.springframework.stereotype.Service
import kotlin.collections.List

interface BeerService {
    fun get(): List<BeerModel>
    fun post(beer: BeerModel): String
}

@Service
class BeerServiceImpl(
    private val beerRepository: BeerRepository
): BeerService {
    override fun get(): List<BeerModel> {
        return beerRepository.findAll().map {
            BeerModel(
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

    override fun post(beer: BeerModel): String {
        beerRepository.save(
            BeerEntity(
                name = beer.name,
                manufacturer = beer.manufacturer,
                abv = beer.abv,
                ibu = beer.ibu,
                review = beer.review,
                comment = beer.comment,
            )
        )

        return "登録が完了しました"
    }
}

data class BeerModel(
    val id: Long = 0,
    val name: String,
    val manufacturer: String,
    val abv: Double,
    val ibu: Int,
    val review: Int,
    val comment: String,
)