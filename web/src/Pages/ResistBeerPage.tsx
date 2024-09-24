import {ChangeEventHandler, FormEventHandler, useEffect, useState} from "react";
import countryData from '../utils/country.json';
import {buildResistBeerContent, ResistBeerContentType} from "../models/Beer.ts";
import {BeerRepository, BeerRepositoryImpl} from "../Repositories/BeerRepository.ts";

interface Props {
    beerRepository?: BeerRepository
}

export default function ResistBeerPage(
    {beerRepository = new BeerRepositoryImpl()}: Props
) {
    const [formContents, setFormContents] = useState<ResistBeerContentType>(buildResistBeerContent)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [countries, setCountries] = useState<string[]>([])

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        beerRepository.post(formContents, imageFile)
    }

    const handleFormChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const {name, value} = e.target
        setFormContents((prev) => ({
            ...prev,
            [name]: name === 'abv' ? Number(value)/10 : value
        }))
    }

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0])
        }
    }

    useEffect(() => {
        setCountries(countryData.map((obj) => obj.name))
    }, []);


    return (
        <div>
            <h2>ビールを登録</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <div>
                            <label>
                                写真
                                <input type="file" name="ImageKey" onChange={handleImageChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                コメント
                                <textarea name="comment" id="" cols={30} rows={10}
                                          onChange={handleFormChange}></textarea>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            店名
                            <input type="text" name="store" onChange={handleFormChange}/>
                        </label>
                    </div>

                    <div>
                        <label>
                            ビール名称
                            <input type="text" name="name" onChange={handleFormChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            度数
                            <input
                                type="range"
                                name="abv"
                                min="0"
                                max="1000"
                                step="1"
                                value={formContents.abv*10}
                                onChange={handleFormChange}
                            />
                        </label>
                        <span>{formContents.abv}</span>
                    </div>
                    <div>
                        <label>
                            苦味
                            <input
                                type="range"
                                name="bitter"
                                min="0"
                                max="10"
                                step="1"
                                value={formContents.bitter}
                                onChange={handleFormChange}
                            />
                        </label>
                        <span>{formContents.bitter}</span>
                    </div>
                    <div>
                        <label>
                            コク
                            <input
                                type="range"
                                name="deeply"
                                min="0"
                                max="10"
                                step="1"
                                value={formContents.deeply}
                                onChange={handleFormChange}
                            />
                        </label>
                        <span>{formContents.deeply}</span>
                    </div>
                    <div>
                        <label>
                            スタイル
                            <input type="text" name="style" onChange={handleFormChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            生産国
                            <select name="country" onChange={handleFormChange}>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            値段
                            <input type="text" name="price" onChange={handleFormChange}/>
                        </label>
                    </div>
                </div>
                <button>登録</button>
            </form>
        </div>
    )
}