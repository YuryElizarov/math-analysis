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
  link: string
}} = {
  [EStep.Const]: {
    title: 'Производная константы',
    formula: `(Const)^{\\prime}=0`,
    link: 'derivative-const',
  },
  [EStep.ConstantX]: {
    title: 'Производная',
    formula: `(C\\cdot f(x))_{x}^{\\prime} = C\\cdot f^{\\prime}(x)_{x}`,
    link: '',
  },
  [EStep.AddOrSub]: {
    title: 'Производная суммы и разности функций',
    formula: "(U \\pm V)^{\\prime}=U^{\\prime} \\pm V^{\\prime}",
    link: 'derivative-sum',
  },
  [EStep.Mul]: {
    title: 'Производная произведения функций',
    formula: "(U \\cdot V)^{\\prime}=U^{\\prime} \\cdot V+V^{\\prime} \\cdot U",
    link: 'derivative-mult',
  },
  [EStep.Div]: {
    title: 'Производная отношения функций',
    formula: "\\left(\\frac{U}{V}\\right)^{\\prime}=\\frac{U^{\\prime} \\cdot V-V^{\\prime} \\cdot U}{V^{2}}",
    link: 'derivative-div',
  },
  [EStep.Difficult]: {
    title: 'Производная суперпозиции функции',
    formula: "y_{x}^{\\prime}=f_{z}^{\\prime} \\cdot z_{x}^{\\prime}",
    link: 'derivative-superposition',
  },
  [EStep.Table]: {
    title: 'Табличные производные',
    formula: '',
    link: '',
  },
}

export const tableDerivations: {[key: string]: { latex: string, link: string }} = {
  pow: {latex: `\\left({x^n}\\right)_{x}^{\\prime}=n\\cdot x^{(n-1)}`, link: 'derivative-power'},
  sin: {latex: `\\left({sin(x})\\right)_{x}^{\\prime} = \\cos{x}`, link: 'derivative-sin'},
  tg: {latex: `\\left(tg{x}\\right)_{x}^{\\prime} = \\frac{1}{{\\cos^2{(x)}}}`, link: 'derivative-tg'},
  ctg: {latex: `\\left(ctg{x}\\right)_{x}^{\\prime} = -\\frac{1}{{\\sin^2{(x)}}}`, link: 'derivative-ctg'},
  cos: {latex: `\\left({cos(x})\\right)_{x}^{\\prime} = -\\sin{x}`, link: 'derivative-cos'},
  ch: {latex: `\\left({sh(x})\\right)_{x}^{\\prime} = -\\sh{x}`, link: 'derivative-ch'},
  sh: {latex: `\\left({sh(x})\\right)_{x}^{\\prime} = \\ch{x}`, link: 'derivative-sh'},
  th: {latex: `\\left(th{x}\\right)_{x}^{\\prime} = \\frac{1}{{\\ch^2{(x)}}}`, link: 'derivative-th'},
  cth: {latex: `\\left(cth{x}\\right)_{x}^{\\prime} = -\\frac{1}{{\\sh^2{(x)}}}`, link: 'derivative-cth'},
  arcsin: {latex: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{\\sqrt{1-{\\left(x\\right)}^2}}`, link: 'derivative-arcsin'},
  arccos: {latex: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{\\sqrt{1-{\\left(x\\right)}^2}}`, link: 'derivative-arccos'},
  arctg: {latex: `\\left({arcsin(x})\\right)_{x}^{\\prime} = \\frac{1}{(1+{\\left(x\\right)}^2}`, link: 'derivative-arctg'},
  arcctg: {latex: `\\left({arcsin(x})\\right)_{x}^{\\prime} = -\\frac{1}{(1+{\\left(x\\right)}^2}`, link: 'derivative-arcctg'},
  x: {latex: `(x)'_x = 1`, link: ''},
  exp: {latex: `\\left(a^{ x}\\right)_{x}^{\\prime}=a^{x}\\cdot\\ln{ x}`, link: 'derivative-exponential'},
  expE: {latex: `\\left(e^{ x}\\right)_{x}^{\\prime}=e^{x}`, link: 'derivative-exponential'},
  sqrt: {latex: `\\left({\\sqrt{ x}}\\right)_{x}^{\\prime}=\\frac{1}{\\left(2\\cdot\\sqrt{ x}\\right)}`, link: ''},
  log: {latex: `\\left({\\log_{a}{x}}\\right)_{x}^{\\prime}= \\frac{1}{x\\cdot \\ln{a}}`, link: 'derivative-logarithmic'},
  ln: {latex: `\\left({\\ln{x}}\\right)_{x}^{\\prime}= \\frac{1}{x}`, link: 'derivative-logarithmic'},
}

export interface StepProp {step: EStep, formula: string, tableDerivative?: { latex: string, link: string }}
