import "../assets/stylesheet/Resist.scss"
import { FaSearch } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa";
import { useState } from "react"
import InputForm from "../Component/InputForm";


export default function ResistBeerPage() {
    enum ResistMethod {
        barcode,
        inputForm,
    }

    const [selectedMethod, setSelectedMethod] = useState<ResistMethod | null>(null)

    const disPlayComponent = () => {
        switch (selectedMethod) {
            case ResistMethod.barcode:
                return <div>バーコード読み取り</div>;
            case ResistMethod.inputForm:
                return <InputForm />;
            default:
                return (
                <div className="select-method-button">
                    <button onClick={() => setSelectedMethod(ResistMethod.barcode)}>
                        <FaBarcode className="icon"/>バーコードから登録
                    </button>
                    <button onClick={() => setSelectedMethod(ResistMethod.inputForm)}>
                        <IoAddCircle className="icon"/>新規登録
                    </button>
                    <div className="search-container">
                        <FaSearch className="icon"/>
                        <input placeholder="銘柄検索"/>
                    </div>
                    <p>現在、新規登録のみ使用できます。</p>
                </div>
                );
            }
    }

    return <div className="resist-container">{disPlayComponent()}</div>
}