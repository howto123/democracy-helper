import { Identity } from "./identity";

export default interface Proposition {
    id: string,
    text: string,
    opinionIds: Identity[],
}