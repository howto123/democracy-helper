import Opinion from "./opinion";
import { OpinionSum } from "./opinionType";

export default interface PropositionWithOpinions {
    id: string,
    text: string,
    opinions: Opinion[],
    opinionSum: OpinionSum,
}
