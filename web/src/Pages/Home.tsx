import { useNavigate } from "react-router-dom"
import "../assets/stylesheet/Home.scss"
import { useEffect, useState } from "react"
import { BeerRepository, BeerRepositoryImpl } from "../Repositories/BeerRepository"
import { GetBeerContentType } from "../models/Beer"


interface Props {
    beerRepository?: BeerRepository
}

export default function Home(
    {beerRepository = new BeerRepositoryImpl()}: Props
) {
    const navigate = useNavigate()
    const [beers, setBeers] = useState<GetBeerContentType[]>([])

    useEffect(() => {
        beerRepository.get()
        .then((res) => {
            setBeers(res)
        })
    }, [])

    return(
        <div className="home-container">
            <ul>
                {beers.map((beer) => 
                    (
                        <li key={window.crypto.randomUUID()}>
                            <div className="beer-header">
                                <p>登録日：2024/10/27</p>
                                <p>{beer.review}点</p>
                            </div>
                            <div className="beer-content">
                                <img src="https://placehold.jp/150x150.png" />
                                <div className="beer-info">
                                    <p className="title">{beer.name}</p>
                                    <p className="meta">{beer.manufacturer}</p>
                                    <p className="meta">度数：{beer.abv}% / IBU：{beer.ibu}</p>
                                </div>
                            </div>
                        </li>        
                    )
                )}
            </ul>

            <div className="button-circle">
                <button onClick={() => {navigate("/resist")}}>＋</button>
            </div>
        </div>
    )
}