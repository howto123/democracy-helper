import Opinion from "@/types/opinion"
import { OpinionSum, OpinionType } from "@/types/opinionType"
import Proposition from "@/types/proposition"
import PropositionWithOpinions from "@/types/propositionWithOpinions"


export default function getPropositionsWithOpinions(
    propositions: Proposition[],
    opinions: Opinion[]
): PropositionWithOpinions[] {
    return propositions.map(p => {

        const matchingOpinions = opinions.filter(
            o => p.id === o.propositionId
        )

        const opinionSum = getOpinionSum(matchingOpinions)

        return {
            id: p.id,
            text: p.text,
            opinions: matchingOpinions,
            opinionSum: opinionSum,
        }
    })
}

function getOpinionSum(opinions: Opinion[]): OpinionSum {
    let toBeReturned = {
        hugeFan: 0,
        soundsGood: 0,
        iDontCare: 0,
        againstButNoVeto: 0,
        veto: 0,
        needsDiscussion: 0,
    }


    opinions.forEach( o => {
        switch(o.type) {
            case OpinionType.HugeFan: {
                toBeReturned.hugeFan++;
                break;
            }
            case OpinionType.SoundsGood: {
                toBeReturned.soundsGood++;
                break;
            }
            case OpinionType.IDontCare: {
                toBeReturned.iDontCare++;
                break;
            }
            case OpinionType.AgainstButNoVeto: {
                toBeReturned.againstButNoVeto++;
                break;
            }
            case OpinionType.Veto: {
                toBeReturned.veto++;
                break;
            }
            case OpinionType.NeedsDiscussion: {
                toBeReturned.needsDiscussion++;
                break;
            }
        }
    })
    return toBeReturned;
}