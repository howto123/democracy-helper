"use client"

import * as React from "react";
import { Box } from "@mui/material";
import Opinion from "@/types/opinion";
import Proposition from "@/types/proposition";
import PropositionLabel from "./propositionLabel";
import PropositionItem from "./propositionItem";
import { OpinionSum, OpinionType } from "@/types/opinionType";
import getPropositionsWithOpinions from "@/helperFunctions/getPropositionsWithOpinions";
import { useEffect, useState } from "react";
import PropositionWithOpinions from "@/types/propositionWithOpinions";




export default function PropositionOverview(
    {
        propositionsWithOpinions,
        showDetails }: {
            propositionsWithOpinions: PropositionWithOpinions[],
            showDetails: boolean
        }
) {
    return (
        <Box
            sx={{
                width: "100%",
                minWidth: 650,
            }}
            aria-label="proposition-list"
        >
            <PropositionLabel showDetails={showDetails} />
            {propositionsWithOpinions.map(p => (
                <PropositionItem key={p.id} proposition={p} showDetails={showDetails} />
            ))}
        </Box>
    );
}
