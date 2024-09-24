import {BeerRepository, BeerRepositoryImpl} from "../Repositories/BeerRepository.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetBeerType} from "../models/Beer.ts";

interface Props {
    beerRepository?: BeerRepository
}

export default function CraftBeerDetailPage(
    {
        beerRepository = new BeerRepositoryImpl(),
    }: Props
) {
    const {id} = useParams()
    const [beer, setBeer] = useState<GetBeerType | null>(null)

    useEffect(() => {
        beerRepository.getById(`http://localhost:8080/${id}`)
            .then((res) => {
                setBeer(res[0])
            })
    }, []);

    return (
        <>
            <h1>{beer?.name}</h1>
            <div style={{display: "flex"}}>
                <div>
                    <img src="https://placehold.jp/200x200.png"/>
                    <p>度数： {beer?.abv}度</p>
                    <p>スタイル： {beer?.style}</p>
                    <p>生産国： {beer?.country}</p>
                    <p>値段： {beer?.price}円</p>
                    <p>店名： {beer?.store}</p>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <p>コメント： {beer?.comment}</p>
                    <div style={{backgroundColor: "rosybrown", color: "white", width: "400px", height: "300px"}}>MAP</div>
                    <p>味わいマップ：</p>
                    <div style={{backgroundColor: "ActiveCaption", color: "white", width: "400px", height: "300px"}}>苦味×コク={beer?.bitter}×{beer?.deeply}</div>
                </div>
            </div>
        </>
    )
}