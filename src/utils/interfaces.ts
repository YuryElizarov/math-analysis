import type { VNode } from "vue"

export interface SelectToggleOption {
    id: string,
    name: string
}

export interface FormulaExtra {
    id: string,
    name: string,
    content: VNode
}

export interface Formula {
    id: string,
    name: string,
    latex: string,
    extras: Array<FormulaExtra>
}

export interface FormulasGroup {
    name: string,
    content: Array<Formula>
}