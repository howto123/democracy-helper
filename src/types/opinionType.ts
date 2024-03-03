


export enum OpinionType {
    HugeFan = "I'm a huge fan!",
    SoundsGood = "Sound good to me",
    IDontCare = "I don't have time to think about it",
    AgainstButNoVeto = "I would prefer a differernt solution",
    Veto = "No, we can't do that",
    NeedsDiscussion = "Too complex to handle online",
}

export type OpinionSum = {
    hugeFan: number,
    soundsGood: number,
    iDontCare: number,
    againstButNoVeto: number,
    veto: number,
    needsDiscussion: number
}