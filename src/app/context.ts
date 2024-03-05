import ActiveElement from '@/types/activeElement';
import { Identity } from '@/types/identity';
import React from 'react';

type ContextType = {
    activeElementId: Identity|undefined,
    activeElementType: ActiveElement,
    setPropositionToActiveElement: (id: Identity) => void
    setOpinionToActiveElement: (id: Identity) => void
}

const Context = React.createContext<ContextType>({
    activeElementId: undefined,
    activeElementType: undefined,
    setPropositionToActiveElement: function (id: string): void {
        throw new Error('Function not defined in Context');
    },
    setOpinionToActiveElement: function (id: string): void {
        throw new Error('Function not defined in Context');
    }
})

export default Context;