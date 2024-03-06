"use client"

import { Identity } from "@/types/identity";
import Opinion from "@/types/opinion";
import Password from "@/types/password";
import Proposition from "@/types/proposition";

export async function getPropositions(): Promise<Proposition[]> {
    return await fetch("/api/proposition/getall", { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            return data.propositions;
        })
        .catch(err => console.log(err))
}

export async function createProposition(proposition: Proposition, password: Password): Promise<Proposition> {
    return await fetch("/api/proposition/create", {
        method: "POST",
        body: JSON.stringify({ proposition: proposition, password: password }),
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export async function deleteProposition(id: Identity, password: Password): Promise<Proposition> {
    return await fetch("/api/proposition/delete", {
        method: "POST",
        body: JSON.stringify({ id: id, password: password }),
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export async function getOpinions(): Promise<Opinion[]> {
    return await fetch("/api/opinion/getall", { next: { revalidate: 3600 } })
        .then(response => response.json())
        .then(data => {
            return data.opinions;
        })
        .catch(err => console.log(err))
}

export async function createOpinion(opinion: Opinion, password: Password): Promise<Opinion> {
    return await fetch("/api/opinion/create", {
        method: "POST",
        body: JSON.stringify({ opinion: opinion, password: password }),
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export async function deleteOpinion(id: Identity, password: Password): Promise<Opinion> {
    return await fetch("/api/opinion/delete", {
        method: "POST",
        body: JSON.stringify({ id: id, password: password }),
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}