import { OpinionType } from "./opinionType";



export default interface Opinion {
    id: number,
    type: OpinionType,
    text: string
}