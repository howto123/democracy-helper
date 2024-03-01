import Opinion from "./opinion";



export default interface Proposition {
    id: string,
    text: string,
    opinions: Opinion[],
}