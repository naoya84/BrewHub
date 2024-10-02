import {BeerRepository, BeerRepositoryImpl} from "../Repositories/BeerRepository";
import {useEffect, useState} from "react";
import {GetBeerType} from "../models/Beer";
import {useNavigate} from "react-router-dom";

interface Props {
    beerRepository?: BeerRepository
}

export default function CraftBeerPage(
    {beerRepository = new BeerRepositoryImpl()}: Props
) {
    const navigate = useNavigate()
    const [beers, setBeers] = useState<Array<GetBeerType>>([])

    useEffect(() => {
        beerRepository.get()
            .then((res) => {
                setBeers(res)
            })
    }, []);

    return (
        <div>
            <h2>図鑑を見る</h2>
            <div style={{display: "flex"}}>
                {beers.map((beer) => {
                    return (
                        <div key={window.crypto.randomUUID()} style={{margin: "0 10px", textAlign: "center"}}>
                            <img src="https://placehold.jp/200x200.png" onClick={() => {
                                navigate(`/craftbeers/${beer.id}`)
                            }}/>
                            <p style={{margin: 0}}>{beer.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}