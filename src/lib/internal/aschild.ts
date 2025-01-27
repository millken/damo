import { getContext, onMount, setContext, type Snippet } from "svelte";
export const setChild = (props:any, asChild:boolean) => {
    if (asChild) {
            setContext("asChild", props);
    }
}

export const getChild = () => {
    getContext("asChild");
}