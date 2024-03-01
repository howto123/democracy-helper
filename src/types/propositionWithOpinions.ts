import Opinion from "./opinion";

export default interface PropositionWithOpinions {
    id: string,
    text: string,
    opinions: Opinion[],
}