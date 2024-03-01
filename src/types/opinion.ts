import { Identity } from "./identity";
import { OpinionType } from "./opinionType";



export default interface Opinion {
    id: Identity,
    type: OpinionType,
    text: string
}