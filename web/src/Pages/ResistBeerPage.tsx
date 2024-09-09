import {FormEventHandler} from "react";

export default function ResistBeerPage() {

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const name = form.get("name") || ""
        alert(
            `name: ${name}`
        )
    }

    return (
        <div>
            <h2>ビールを登録</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <div>
                            <label>
                                写真
                                <input type="text" name="ImageKey"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                コメント
                                <input type="text" name="comment"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            店名
                            <input type="text" name="store"/>
                        </label>
                    </div>

                    <div>
                        <label>
                            ビール名称
                            <input type="text" name="name"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            度数
                            <input type="text" name="abv"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            苦味
                            <input type="text" name="bitter"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            コク
                            <input type="text" name="deeply"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            スタイル
                            <input type="text" name="style"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            生産国
                            <input type="text" name="country"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            値段
                            <input type="text" name="price"/>
                        </label>
                    </div>

                </div>
                <button>登録</button>
            </form>
        </div>
    )
}