export enum EStep {
  Const,
  ConstantX,
  AddOrSub,
  Mul,
  Div,
  Difficult,
  Table
}

export const steps: {[step in EStep]: {
  title: string,
  formula: string,
}} = {
  [EStep.Const]: {
    title: 'Производная константы',
    formula: `(Const)'=0`
  },
  [EStep.ConstantX]: {
    title: 'Производная',
    formula: `(C*f(x))'_x = C*f'(x)_x`
  },
  [EStep.AddOrSub]: {
    title: 'Производная суммы и разности функций',
    formula: "(U \\pm V)^{\\prime}=U^{\\prime} \\pm V^{\\prime}",
  },
  [EStep.Mul]: {
    title: 'Производная произведения функций',
    formula: "(U \\cdot V)^{\\prime}=U^{\\prime} \\cdot V+V^{\\prime} \\cdot U",
  },
  [EStep.Div]: {
    title: 'Производная отношения функций',
    formula: "\\left(\\frac{U}{V}\\right)^{\\prime}=\\frac{U^{\\prime} \\cdot V-V^{\\prime} \\cdot U}{V^{2}}",
  },
  [EStep.Difficult]: {
    title: 'Производная сложной функции',
    formula: "y_{x}^{\\prime}=f_{z}^{\\prime} \\cdot z_{x}^{\\prime}",
  },
  [EStep.Table]: {
    title: 'Табличные производные',
    formula: ''
  },
}

export const tableDerivations: {[key: string]: string} = {
  pow: `\\left({x^n}\\right)_{x}^{\\prime}=n\\cdot x^{(n-1)}`,
  sin: `\\left({sin(x})\\right)_{x}^{\\prime} = \\cos{x}`,
  tg: `\\left(tg{x}\\right)_{x}^{\\prime} = \\frac{1}{{\\cos^2{(x)}}}`,
  ctg: `\\left(ctg{x}\\right)_{x}^{\\prime} = -\\frac{1}{{\\sin^2{(x)}}}`,
  cos: `\\left({cos(x})\\right)_{x}^{\\prime} = -\\sin{x}`,
  ch: `\\left({sh(x})\\right)_{x}^{\\prime} = -\\sh{x}`,
  sh: `\\left({sh(x})\\right)_{x}^{\\prime} = \\ch{x}`,
  th: `\\left(th{x}\\right)_{x}^{\\prime} = \\frac{1}{{\\ch^2{(x)}}}`,
  cth: `\\left(cth{x}\\right)_{x}^{\\prime} = -\\frac{1}{{\\sh^2{(x)}}}`,
  arcsin: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{\\sqrt{1-{\\left(x\\right)}^2}}`,
  arccos: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{\\sqrt{1-{\\left(x\\right)}^2}}`,
  arctg: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{(1+{\\left(x\\right)}^2}`,
  arcctg: `\\left({arcsin(x})\\right)_{x}^{\\prime} = -\\frac{1}{(1+{\\left(x\\right)}^2}`,
  x: `(x)'_x = 1`,
  exp: `\\left(a^{ x}\\right)_{x}^{\\prime}=a^{x}\\cdot\\ln{ x}`,
  sqrt: `\\left({\\sqrt{ x}}\\right)_{x}^{\\prime}=\\frac{1}{\\left(2\\cdot\\sqrt{ x}\\right)}`,
  log: `\\left({\\log_{a}{x}}\\right)_{x}^{\\prime}= \\frac{1}{x\\cdot \\ln{a}}`,
  ln: `\\left({\\ln{x}}\\right)_{x}^{\\prime}= \\frac{1}{x}`,
}

export interface StepProp {step: EStep, formula: string, tableDerivative?: string}
