import Opinion from "@/types/opinion";
import Proposition from "@/types/proposition";


export async function createProposition(thing: Proposition): Promise<Proposition> {
    return await fetch("/api/proposition/create", {
        method: "POST",
        body: JSON.stringify(thing),
      })
      .then(response => response.json())
      .catch(err => console.log(err))
}

export async function createOpinion(thing: Opinion): Promise<Opinion> {
    return await fetch("/api/opinion/create", {
        method: "POST",
        body: JSON.stringify(thing),
      })
      .then(response => response.json())
      .catch(err => console.log(err))
}