import {ResistBeerContentType} from "../Pages/ResistBeerPage.tsx";

export interface Http {
    post(formContents: ResistBeerContentType, imageFile: File | null): Promise<string>
}

export default class NetworkHttp implements Http {
    post(formContents: ResistBeerContentType, imageFile: File | null): Promise<string> {
        const formData = new FormData()
        formData.append("form", JSON.stringify(formContents))
        if (imageFile !== null) {
            formData.append("image", imageFile)
        }

        // fetch___then__

        return Promise.resolve("")
    }
}