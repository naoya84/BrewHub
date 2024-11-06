import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {buildResistBeerContent, ResistBeerContentType} from "../models/Beer.ts";
import {BeerRepository, BeerRepositoryImpl} from "../Repositories/BeerRepository.ts";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Props {
    beerRepository?: BeerRepository
}

export default function InputForm(
    {beerRepository = new BeerRepositoryImpl()}: Props
) {
    const navigate = useNavigate()
    const [formContents, setFormContents] = useState<ResistBeerContentType>(buildResistBeerContent)
    const [imageFile, setImageFile] = useState<File | null>(null)

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (imageFile) {
            beerRepository.post(formContents, imageFile)
            .then((res) => {
                alert(res)
                navigate("/")
            })
        } else {
            alert("画像を選択してください")
        }
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

    return (
        <div>
            <h1>New Beer!</h1>
            <form onSubmit={submitHandler}>
                <div className="meta-container">
                    <div className="beer-image">
                        {imageFile
                            ? <img className="image" src={URL.createObjectURL(imageFile)} />
                            : <div className="image"></div>
                        }

                        <div className="image-upload-container">
                            <label className="image-upload-label">
                            <IoMdAddCircle className="add-icon" />
                            <input type="file" name="ImageKey" onChange={handleImageChange} className="file-input" />
                            </label>
                        </div>
                    </div>
                    <div className="beer-info">
                        <div className="row">
                            <label>
                                銘柄名：
                                <input type="text" name="name" onChange={handleFormChange}/>
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                製造元：
                                <input type="text" name="manufacturer" onChange={handleFormChange}/>
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                度数：
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
                            <span>{formContents.abv}%</span>
                        </div>
                        <div className="row">
                            <label>
                                IBU ：
                                <input
                                    type="range"
                                    name="ibu"
                                    min="0"
                                    max="10"
                                    step="1"
                                    value={formContents.ibu}
                                    onChange={handleFormChange}
                                />
                            </label>
                            <span>{formContents.ibu}</span>
                        </div>
                    </div>
                </div>
                <div className="other-container">
                    <label>
                        評価：<span>{formContents.review}点</span>
                        <input
                            type="range"
                            name="review"
                            min="0"
                            max="100"
                            step="1"
                            value={formContents.review}
                            onChange={handleFormChange}
                        />
                    </label>
                    

                    <label>
                        感想&メモ
                        <textarea
                            name="comment"
                            id=""
                            cols={30}
                            rows={10}
                            onChange={handleFormChange}>

                        </textarea>
                    </label>
                    <button>登録</button>
                </div>                    
            </form>
        </div>
    )
}