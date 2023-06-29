import type { VNode } from "vue"

export interface SelectToggleOption {
    id: string,
    name: string
}

export interface TheoryExtra {
    id: string,
    name: string,
    content: VNode
}

export interface Term {
    id: string,
    name: string,
    content: VNode,
    extras: Array<TheoryExtra>
}

export interface Formula {
    id: string,
    name: string,
    latex: string,
    extras: Array<TheoryExtra>
}

export interface TheoryGroup<T> {
    id: string,
    name: string,
    content: Array<T>
}