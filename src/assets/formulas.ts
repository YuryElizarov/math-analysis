import {h} from "vue"

export default [
    {
        id: "table-derivatives",
        name: "Табличные производные",
        content: [
            {
                id: "derivative-const",
                name: "Производная постоянной функции",
                latex: "\\left(Const \\right)' = 0",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", `Теорема о производной постоянной функции`),
                            h('p', `Если функция $y = f(x)$ является постоянной в точке $x_0$ и в некоторой ее окрестности, то $f'(x) = 0$ в точке $x_0$ и в этой же окрестности`)
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-11.jpg?height=457&width=645&top_left_y=1573&top_left_x=314", width: 300}),
                            h("p", "Для всех $\\Delta x \\neq 0$, таких что $\\left(x_{0}+\\Delta x\\right) \\in U\\left(x_{0}\\right)$, будет$\\Delta y= Const - Const =0 \\Rightarrow \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{0}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} 0=0\\Rightarrow y_{x}^{\\prime}=0 \\forall x \\in U\\left(x_{0}\\right)$"
                        )])
                    }
                ]
            },
            {
                id: "derivative-power",
                name: "Производная степенной функции",
                latex: "\\left(x^n \\right)' = nx^{n-1}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Для вывода формулы при $n=2,3,4, \\ldots$ можно использовать формулу бинома Ньютона:"),
                            h("p", `$$\\begin{aligned}
                            & \\Delta y=(x+\\Delta x)^{n}-x^{n}=\\left(x^{n}+n x^{n-1} \\Delta x+\\frac{n(n-1)}{2 !} x^{n-2}(\\Delta x)^{2}+\\ldots+(\\Delta x)^{n}\\right)-x^{n}= \\\\
                            & =n x^{n-1} \\Delta x+\\frac{n(n-1)}{2 !} x^{n-2}(\\Delta x)^{2}+\\ldots+(\\Delta x)^{n} \\Rightarrow \\frac{\\Delta y}{\\Delta x}=n \\cdot x^{n-1}+\\frac{n \\cdot(n-1)}{2 !} \\cdot x^{n-2} \\cdot \\Delta x+\\ldots+(\\Delta x)^{n-1}
                            \\end{aligned}$$`),
                            h("p", "Выполняя предельный переход при условии $\\Delta x \\rightarrow 0$ в последнем равенстве, получаем"),
                            h("p", "$$y_{x}^{\\prime}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=n \\cdot x^{n-1}$$"),
                            h("p", "Для вывода производной степенной функции с любым действительным показателем: $y(x)=x^{n}, n \\in \\mathbb{R}$ нельзя использовать формулу бинома Ньютона, поскольку эта формула верна только при значения $n \\in \\mathbb{N}$. Поэтому в общем случае для раскрытия неопределённости в пределе, которым определяется производная степенной функции, нужно использовать замену эквивалентных бесконечно малых:"),
                            h("p", `$$\\begin{aligned}
                            & \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{(x+\\Delta x)^{n}-x^{n}}{\\Delta x}=\\left[\\frac{0}{0}\\right] \\underset{\\substack{\\{x \\neq 0 \\\\
                            n \\neq 1}}{ } \\lim _{\\Delta x \\rightarrow 0} \\frac{x^{n}\\left(\\left(1+\\frac{\\Delta x}{x}\\right)^{n}-1\\right)}{\\Delta x}= \\\\
                            & =\\left\\{(1+z)^{n}-1 \\sim n z, z \\rightarrow 0 \\Rightarrow\\left(1+\\frac{\\Delta x}{x}\\right)^{n}-1 \\sim n \\cdot \\frac{\\Delta x}{x}, \\Delta x \\rightarrow 0\\right\\}=\\lim _{\\Delta x \\rightarrow 0} \\frac{x^{n} \\cdot n \\cdot \\frac{\\Delta x}{x}}{\\Delta x}=\\left[\\frac{0}{0}\\right]= \\\\
                            & =\\lim _{\\Delta x \\rightarrow 0}\\left(n \\cdot x^{n-1}\\right)=n \\cdot x^{n-1} .
                            \\end{aligned}$$`),
                            h("p", "Таким образом, при $\\forall x \\neq 0$ и $\\forall n \\neq 1 $ получено значение предела $\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=n \\cdot x^{n-1} ;$ это означает, что функция $y(x)=x^{n}, \\forall n \\neq 1$ при $\\forall x \\neq 0$ имеет производную $y^{\\prime}(x)=n \\cdot x^{n-1}$."),
                            h("p", "Дополнительно исследуем ситуацию в точке $x=0$ при условии, что $n \\neq 1$ :"),
                            h("p", "$\\left.\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}\\right|_{x=0}=\\lim _{\\Delta x \\rightarrow 0} \\frac{(0+\\Delta x)^{n}-0^{n}}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{(\\Delta x)^{n}}{\\Delta x}=\\left[\\frac{0}{0}\\right]=\\lim _{\\Delta x \\rightarrow 0}(\\Delta x)^{n-1}=\\left[\\begin{array}{c}0, n>1 \\\\ \\infty, n<1\\end{array} \\Rightarrow\\right.$"),
                            h("p", " $\\Rightarrow\\left[\\begin{array}{cccc}n р и & n>1 & \\text { получено, }  \\text { что }\\left. y^{\\prime}\\right|_{x=0}=0 \\\\ n р и & n<1 & \\left.y^{\\prime}\\right|_{x=0}  \\text { не существует }\\end{array}\\right.$"),
                            h("p", "Эти два результата согласуются с формулой $y^{\\prime}(x)=n \\cdot x^{n-1}$, поскольку в точке $x=0$ по этой формуле получается, что"),
                            h("p", "$$ y'(0) = n \\cdot 0^{n-1} = \\left[\\begin{array} \\text{0 при } n >1 \\\\ \\text{ не существует при } n < 1 \\end{array} \\right. $$"),
                            h("p", "Поэтому можно считать, что формула $y^{\\prime}(x)=n \\cdot x^{n-1}$, где $n \\in \\mathbb{R} \\backslash\\{1\\}$ является верной для всех значений $x$, при которых производная от степенной функции $y(x)=x^{n}$ определена."),
                            h("p", "Случай, когда $n=1$, то есть когда $y(x)=x$ при нахождении производной по её определению даёт очень простой результат:"),
                            h("p", "$y=x \\Rightarrow y^{\\prime}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{x+\\Delta x-x}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} 1=1$."),
                            h("p", "Этот результат тоже вписывается в формулу для производной степенной функции: $\\left.y^{\\prime}(x)\\right|_{n=1}=\\left.\\left(n \\cdot x^{n-1}\\right)\\right|_{n=1}=1 \\cdot x^{0}=1, $ если считать, что $x^{0}=1  \\forall x \\in \\mathbb{R}$, в том числе для значения $x=0$."),
                            h("p", "Проведя подробное исследование производной степенной функции $y=x^{n} \\mathrm{c}$ любым показателем степени $n$ и при любых значениях $x$, можно сделать общий вывод: если $y(x)=x^{n},  n \\in \\mathbb{R}$, то $y_{x}^{\\prime}=n \\cdot x^{n-1}$.")
                        ])
                    }
                ]
            },
            {
                id: "derivative-exponential",
                name: "Производная показательной функции",
                latex: "\\left(a^{x}\\right)_{x}^{\\prime}=a^{x} \\cdot \\ln a",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Вывод формул проводится на основе определения производной с использованием принципа замены эквивалентных бесконечно малых:"),
                            h("p", `$$\\begin{aligned}
                            & \\left(a^{x}\\right)_{x}^{\\prime}=\\lim _{\\Delta x \\rightarrow 0} \\frac{a^{x+\\Delta x}-a^{x}}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{a^{x}\\left(a^{\\Delta x}-1\\right)}{\\Delta x}=a^{x} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{a^{\\Delta x}-1}{\\Delta x}=\\left[\\frac{0}{0}\\right]= \\\\
                            = & \\left\\{a^{z}-1 \\sim z \\cdot \\ln a, z \\rightarrow 0 \\Rightarrow a^{\\Delta x}-1 \\sim \\Delta x \\cdot \\ln a, \\Delta x \\rightarrow 0\\right\\}=a^{x} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta x \\cdot \\ln a}{\\Delta x}=a^{x} \\cdot \\ln a
                            \\end{aligned}$$`)
                        ])
                    }
                ]
            },
            {
                id: "derivative-logarithmic",
                name: "Производная логарифмической функции",
                latex: "\\left(\\log _{a} x\\right)_{x}^{\\prime}=\\frac{1}{x \\cdot \\ln a}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Вывод формул проводится на основе определения производной с использованием принципа замены эквивалентных бесконечно малых:"),
                            h("p", `$$\\begin{aligned}
                            & \\left(\\log _{a} x\\right)_{x}^{\\prime}=\\left(\\frac{\\ln x}{\\ln a}\\right)_{x}^{\\prime}=\\frac{1}{\\ln a} \\cdot(\\ln x)_{x}^{\\prime}=\\frac{1}{\\ln a} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{\\ln (x+\\Delta x)-\\ln x}{\\Delta x}=\\frac{1}{\\ln a} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{\\ln \\left(1+\\frac{\\Delta x}{x}\\right)}{\\Delta x}= \\\\
                            & =\\left\\{\\ln (1+z) \\sim z, z \\rightarrow 0 \\Rightarrow \\ln \\left(1+\\frac{\\Delta x}{x}\\right) \\sim \\frac{\\Delta x}{x}, \\Delta x \\rightarrow 0\\right\\}=\\frac{1}{\\ln a} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{\\frac{\\Delta x}{x}}{\\Delta x}=\\frac{1}{\\ln a} \\cdot \\frac{1}{x}=\\frac{1}{x \\cdot \\ln a}
                            \\end{aligned}$$`)
                        ])
                    }
                ]
            },
            {
                id: "derivative-sin",
                name: "Производная синуса",
                latex: "(\\sin x)^{\\prime}=\\cos x",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", `$$\\begin{aligned}
                        & y=\\sin x, x \\in \\mathbb{R} \\Rightarrow \\Delta y=\\sin (x+\\Delta x)-\\sin x \\text {; } \\\\
                        & \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\sin (x+\\Delta x)-\\sin x}{\\Delta x}=\\left[\\frac{0}{0}\\right]=\\left\\{\\sin \\alpha-\\sin \\beta=2 \\sin \\frac{\\alpha-\\beta}{2} \\cdot \\cos \\frac{\\alpha+\\beta}{2}\\right\\}= \\\\
                        & =\\lim _{\\Delta x \\rightarrow 0} \\frac{2 \\sin \\left(\\frac{\\Delta x}{2}\\right) \\cdot \\cos \\left(\\frac{2 x+\\Delta x}{2}\\right)}{\\Delta x}=\\left[\\frac{0}{0}\\right]=\\left\\{\\begin{array}{c}
                        \\text { замена эквивалентных } \\text { б.м. } \\\\
                        \\sin z \\sim z \\quad n p u \\quad z \\rightarrow 0 \\Rightarrow \\\\
                        \\sin \\frac{\\Delta x}{2} \\sim \\frac{\\Delta x}{2} \\quad \\text { nри } \\quad \\Delta x \\rightarrow 0
                        \\end{array}\\right\\}= \\\\
                        & =\\lim _{\\Delta x \\rightarrow 0} \\frac{2 \\frac{\\Delta x}{2} \\cdot \\cos \\left(\\frac{2 x+\\Delta x}{2}\\right)}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\cos \\left(\\frac{2 x+\\Delta x}{2}\\right)=\\cos x
                        \\end{aligned}$$`)
                    }
                ]
            },
            {
                id: "derivative-cos",
                name: "Производная косинуса",
                latex: "(\\cos x)^{\\prime}=-\\sin x",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", `$$\\begin{aligned}
                        & (\\cos x)^{\\prime}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\cos (x+\\Delta x)-\\cos x}{\\Delta x}=\\left[\\frac{0}{0}\\right]=\\left\\{\\cos \\alpha-\\cos \\beta=-2 \\sin \\frac{\\alpha-\\beta}{2} \\cdot \\sin \\frac{\\alpha+\\beta}{2}\\right\\}= \\\\
                        & =\\lim _{\\Delta x \\rightarrow 0} \\frac{-2 \\sin \\left(\\frac{\\Delta x}{2}\\right) \\cdot \\sin \\left(\\frac{2 x+\\Delta x}{2}\\right)}{\\Delta x}=\\left[\\frac{0}{0}\\right]=\\left\\{\\sin z \\sim z, z \\rightarrow 0 \\Rightarrow \\sin \\frac{\\Delta x}{2} \\sim \\frac{\\Delta x}{2}, \\Delta x \\rightarrow 0\\right\\}= \\\\
                        & =\\lim _{\\Delta x \\rightarrow 0} \\frac{-2 \\cdot \\frac{\\Delta x}{2} \\cdot \\sin \\left(\\frac{2 x+\\Delta x}{2}\\right)}{\\Delta x}=-\\lim _{\\Delta x \\rightarrow 0} \\sin \\left(\\frac{2 x+\\Delta x}{2}\\right)=-\\sin x .
                        \\end{aligned}$$`)
                    }
                ]
            },
            {
                id: "derivative-tg",
                name: "Производная тангенса",
                latex: "(\\operatorname{tg} x)^{\\prime}=\\frac{1}{\\cos^{2} x}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", `$$(\\operatorname{tg} x)^{\\prime}=\\left(\\frac{\\sin x}{\\cos x}\\right)^{\\prime}=\\frac{(\\sin x)^{\\prime} \\cdot \\cos x-(\\cos x)^{\\prime} \\cdot \\sin x}{(\\cos x)^{2}}=\\frac{\\cos x \\cdot \\cos x-(-\\sin x) \\cdot \\sin x}{(\\cos x)^{2}}=\\frac{1}{\\cos ^{2} x}$$`)
                    }
                ]
            },
            {
                id: "derivative-ctg",
                name: "Производная котангенса",
                latex: "(\\operatorname{ctg} x)^{\\prime}=-\\frac{1}{\\sin^{2} x}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", `$$(\\operatorname{ctg} x)^{\\prime}=\\left(\\frac{\\cos x}{\\sin x}\\right)^{\\prime}=\\frac{(\\cos x)^{\\prime} \\cdot \\sin x-(\\sin x)^{\\prime} \\cdot \\cos x}{(\\sin x)^{2}}=\\frac{-\\sin x \\cdot \\sin x-\\cos x \\cdot \\cos x}{(\\sin x)^{2}}=\\frac{-1}{\\sin ^{2} x}$$`)
                    }
                ]
            },
            {
                id: "derivative-arcsin",
                name: "Производная арксинуса",
                latex: "(\\arcsin x)^{\\prime}=\\frac{1}{\\sqrt{1-x^{2}}}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "$y=\\arcsin x \\quad y_x^{\\prime}-?$"),
                            h("p", "Перейдем от данной функции к её обратной функции:"),
                            h("p", "$$y=\\arcsin x, x \\in[-1 ; 1] \\rightarrow y \\in\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right] \\Leftrightarrow x=\\sin y, y \\in\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right] \\rightarrow x \\in[-1 ; 1]$$"),
                            h("p", ["Используем ", h("a", {href:"#derivative-inverse"}, "правило дифференцирования обратной функции:")]),
                            h("p", "$$y_x^{\\prime}=\\frac{1}{x_y^{\\prime}}=\\frac{1}{(\\sin y)_y^{\\prime}}=\\frac{1}{\\cos y} \\underset{\\substack{\\cos y>0 \\\\ \\forall y=\\left(-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right)}}{=} \\frac{1}{\\sqrt{1-\\sin ^2 y}} \\underset{\\sin y=x}{=} \\frac{1}{\\sqrt{1-x^2}} .$$")
                        ])
                    }
                ]
            },
            {
                id: "derivative-arccos",
                name: "Производная арккосинуса",
                latex: "(\\arccos x)^{\\prime}=-\\frac{1}{\\sqrt{1-x^{2}}}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "$y=\\arccos x, x \\in[-1 ; 1] \\Leftrightarrow x=\\cos y, y \\in[0 ; \\pi] \\Rightarrow$"),
                            h("p", "$$y_{x}^{\\prime}=\\frac{1}{x_{y}^{\\prime}}=\\frac{1}{(\\cos y)_{y}^{\\prime}}=\\frac{1}{-\\sin y} \\underset{\\substack{\\sin y=0 \\\\ \\forall y \\in(0 ; \\pi)}}{=}-\\frac{1}{\\sqrt{1-\\cos ^{2} y}} \\underset{\\cos y=x}{=}-\\frac{1}{\\sqrt{1-x^{2}}}$$")
                        ])
                    }
                ]
            },
            {
                id: "derivative-arctg",
                name: "Производная арктангенса",
                latex: "(\\operatorname{arctg} x)^{\\prime}=\\frac{1}{1+x^2}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", `$$
                        \\begin{aligned}
                        & y=\\operatorname{arctg} x, x \\in(-\\infty ;+\\infty) \\rightarrow y \\in\\left(-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right) \\Leftrightarrow x=\\operatorname{tg} y, y \\in\\left(-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right) \\rightarrow x \\in(-\\infty ;+\\infty) \\\\
                        & y_x^{\\prime}=\\frac{1}{x_y^{\\prime}}=\\frac{1}{(\\operatorname{tg} y)_y^{\\prime}}=\\frac{1}{\\frac{1}{\\cos ^2 y}}=\\cos ^2 y \\underset{1+\\operatorname{tg}^2 \\alpha=\\frac{1}{\\cos ^2 \\alpha}}{=} \\frac{1}{1+\\operatorname{tg}^2 y}=\\underset{\\frac{1}{\\operatorname{tg} y=x}}{=} \\frac{1}{1+x^2}
                        \\end{aligned}
                        $$`)
                    }
                ]
            },
            {
                id: "derivative-arcсtg",
                name: "Производная арккотангенса",
                latex: "(\\operatorname{arcctg} x)^{\\prime}=-\\frac{1}{1+x^{2}}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "$y=\\operatorname{arcctg} x, x \\in(-\\infty ;+\\infty) \\Leftrightarrow x=\\operatorname{ctg} y, y \\in(0 ; \\pi) \\Rightarrow$"),
                            h("p", "$$y_{x}^{\\prime}=\\frac{1}{x_{y}^{\\prime}}=\\frac{1}{(\\operatorname{ctg} y)_{y}^{\\prime}}=\\frac{1}{\\frac{-1}{\\sin ^{2} y}}=-\\sin ^{2} y \\underset{1+\\operatorname{ctg}^{2} \\alpha=\\frac{1}{\\sin ^{2} \\alpha}}{=} \\frac{-1}{1+\\operatorname{ctg}^{2} y} \\underset{\\operatorname{ctg} y=x}{=}-\\frac{1}{1+x^{2}}$$")
                        ])
                    }
                ]
            },
            {
                id: "derivative-sh",
                name: "Производная гиперболического синуса",
                latex: "(\\operatorname{sh} x)^{\\prime}=\\operatorname{ch} x",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", "$$y=\\operatorname{sh} x \\stackrel{\\text { def }}{=} \\frac{e^{x}-e^{-x}}{2} \\Rightarrow y^{\\prime}=\\frac{1}{2}\\left(e^{x}-e^{-x}\\right)^{\\prime}=\\frac{1}{2}\\left(e^{x}-e^{-x} \\cdot(-1)\\right)=\\frac{e^{x}+e^{-x}}{2}=\\operatorname{ch} x$$")
                    }
                ]
            },
            {
                id: "derivative-ch",
                name: "Производная гиперболического косинуса",
                latex: "(\\operatorname{ch} x)^{\\prime}=\\operatorname{sh} x",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", "$$y=\\operatorname{ch} x \\stackrel{\\text { def }}{=} \\frac{e^{x}+e^{-x}}{2} \\Rightarrow y^{\\prime}=\\frac{1}{2}\\left(e^{x}+e^{-x}\\right)^{\\prime}=\\frac{1}{2}\\left(e^{x}+e^{-x} \\cdot(-1)\\right)=\\frac{e^{x}-e^{-x}}{2}=\\operatorname{sh} x$$")
                    }
                ]
            },
            {
                id: "derivative-th",
                name: "Производная гиперболического тангенса",
                latex: "(\\operatorname{th} x)^{\\prime}=\\frac{1}{\\operatorname{ch}^2 x}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", "$$y=\\operatorname{th} x \\stackrel{\\text { def }}{=} \\frac{\\operatorname{sh} x}{\\operatorname{ch} x} \\Rightarrow y^{\\prime}=\\left(\\frac{\\operatorname{sh} x}{\\operatorname{ch} x}\\right)^{\\prime}=\\frac{(\\operatorname{sh} x)^{\\prime} \\cdot \\operatorname{ch} x-(\\operatorname{ch} x)^{\\prime} \\cdot \\operatorname{sh} x}{(\\operatorname{ch} x)^2}=\\frac{\\operatorname{ch} x \\cdot \\operatorname{ch} x-\\operatorname{sh} x \\cdot \\operatorname{sh} x}{(\\operatorname{ch} x)^2}=\\frac{1}{\\operatorname{ch}^2 x}$$")
                    }
                ]
            },
            {
                id: "derivative-cth",
                name: "Производная гиперболического котангенса",
                latex: "(\\operatorname{cth} x)^{\\prime}=-\\frac{1}{\\operatorname{sh}^2 x}",
                extras: [
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("p", "$$y=\\operatorname{cth} x \\stackrel{\\operatorname{def}}{=} \\frac{\\operatorname{ch} x}{\\operatorname{sh} x} \\Rightarrow y^{\\prime}=\\left(\\frac{\\operatorname{ch} x}{\\operatorname{sh} x}\\right)^{\\prime}=\\frac{(\\operatorname{ch} x)^{\\prime} \\cdot \\operatorname{sh} x-(\\operatorname{sh} x)^{\\prime} \\cdot \\operatorname{ch} x}{(\\operatorname{sh} x)^2}=\\frac{\\operatorname{sh} x \\cdot \\operatorname{sh} x-\\operatorname{ch} x \\cdot \\operatorname{ch} x}{(\\operatorname{ch} x)^2}=-\\frac{1}{\\operatorname{sh}^2 x}$$")
                    }
                ]
            },
        ]
    },
    {
        id: "differentiation-rules",
        name: "Правила дифференцирования",
        content: [
            {
                id: "derivative-sum",
                name: "Производная суммы и разности функций",
                latex: "(U \\pm V)^{\\prime}=U^{\\prime} \\pm V^{\\prime}",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о дифференцировании арифметических действий над функциями"),
                            h("p", "Если функции $U(x)$ и $V(x)$ являются дифференцируемыми в точке $x_{0}$, то в этой точке являются дифференцируемыми их сумма и разность по формуле выше")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Пусть $U(x)$ и $V(x)$ - дифференцируемые функции в точке $x_{0}$; это означает, что существуют их производные $U^{\\prime}\\left(x_{0}\\right)$ и $V^{\\prime}\\left(x_{0}\\right)$, которые запишем по их определению:"),
                            h('p', `$$\\left\\{\\begin{array}{l}
                            U^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U}{\\Delta x} \\\\
                            V^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta V}{\\Delta x}
                            \\end{array}\\right.$$`),
                            h("p", "при этом приращения функций вычисляются по известным формулам:"),
                            h("p", `$$\\left\\{\\begin{array} { l } 
                            { \\Delta U = U ( x _ { 0 } + \\Delta x ) - U ( x _ { 0 } ) } \\\\
                            { \\Delta V = V ( x _ { 0 } + \\Delta x ) - V ( x _ { 0 } ) }
                            \\end{array} \\Leftrightarrow \\left\\{\\begin{array}{l}
                            U\\left(x_{0}+\\Delta x\\right)=U\\left(x_{0}\\right)+\\Delta U \\\\
                            V\\left(x_{0}+\\Delta x\\right)=V\\left(x_{0}\\right)+\\Delta V
                            \\end{array}\\right.\\right.$$`),
                            h("p", "Рассмотрим функцию $U(x)+V(x)$ в точке $x_{0}$ и в некоторой окрестности этой точки, найдем её приращение и составим предел отношения приращения функции к приращению аргумента при условии, что приращение аргумента стремится к нулю:"),
                            h("p", `$$\\begin{aligned}
                            & \\Delta(U+V)=\\left.(U+V)\\right|_{x_{0}+\\Delta x}-\\left.(U+V)\\right|_{x_{0}}=\\underbrace{U\\left(x_{0}+\\Delta x\\right)}_{U\\left(x_{0}\\right)+\\Delta U}+\\underbrace{V\\left(x_{0}+\\Delta x\\right)}_{V\\left(x_{0}\\right)+\\Delta V}-U\\left(x_{0}\\right)-V\\left(x_{0}\\right)= \\\\
                            & =U\\left(x_{0}\\right)+\\Delta U+V\\left(x_{0}\\right)+\\Delta V-U\\left(x_{0}\\right)-V\\left(x_{0}\\right)=\\Delta U+\\Delta V \\\\
                            & \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta(U+V)}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U+\\Delta V}{\\Delta x} \\underset{\\text { apиф. }}{=} \\lim _{\\Delta x \\rightarrow 0}\\left(\\frac{\\Delta U}{\\Delta x}+\\frac{\\Delta V}{\\Delta x}\\right) \\underset{\\substack{\\text { тeopeмa o } \\\\
                            \\text { lim суммы }}}{=} \\\\
                            & \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U}{\\Delta x} + \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta V}{\\Delta x} \\underset{\\text{определения производных}}{=} \\underbrace{U'(x_0)}_{\\text{число}} + \\underbrace{V'(x_0)}_{\\text{число}} \\Rightarrow
                            \\end{aligned}$$`),
                            h("p", "Предел $\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta(U+V)}{\\Delta x}$ существует и является конечным, следовательно, функция $U(x)+V(x)$ является дифференцируемой в точке $x_{0}$ и ее производная в этой точке вычисляется по формуле $\\left.(U(x)+V(x))^{\\prime}\\right|_{x_{0}}=U^{\\prime}\\left(x_{0}\\right)+V^{\\prime}\\left(x_{0}\\right)$")
                        ])
                    },
                    {
                        id: "remark",
                        name: "Замечание",
                        content: h("div", [
                            h("p", "Формулы о производной суммы легко распространить на любое конечное число функций:"),
                            h("p", `$$(U+V+W)^{\\prime}=((U+V)+W)^{\\prime} \\underset{\\text { доказ. теорема }}{=}(U+V)^{\\prime}+W^{\\prime} \\underset{\\text { доказ. теорема }}{=} U^{\\prime}+V^{\\prime}+W^{\\prime}$$`)
                        ])
                    }
                ]
            },
            {
                id: "derivative-mult",
                name: "Производная произведения функций",
                latex: "(U \\cdot V)^{\\prime}=U^{\\prime} \\cdot V+V^{\\prime} \\cdot U",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о дифференцировании арифметических действий над функциями"),
                            h("p", "Если функции $U(x)$ и $V(x)$ являются дифференцируемыми в точке $x_{0}$, то в этой точке являются дифференцируемыми их произведение по формуле выше")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Пусть $U(x)$ и $V(x)$ - дифференцируемые функции в точке $x_{0}$; это означает, что существуют их производные $U^{\\prime}\\left(x_{0}\\right)$ и $V^{\\prime}\\left(x_{0}\\right)$, которые запишем по их определению:"),
                            h('p', `$$\\left\\{\\begin{array}{l}
                            U^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U}{\\Delta x} \\\\
                            V^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta V}{\\Delta x}
                            \\end{array}\\right.$$`),
                            h("p", "при этом приращения функций вычисляются по известным формулам:"),
                            h("p", `$$\\left\\{\\begin{array} { l } 
                            { \\Delta U = U ( x _ { 0 } + \\Delta x ) - U ( x _ { 0 } ) } \\\\
                            { \\Delta V = V ( x _ { 0 } + \\Delta x ) - V ( x _ { 0 } ) }
                            \\end{array} \\Leftrightarrow \\left\\{\\begin{array}{l}
                            U\\left(x_{0}+\\Delta x\\right)=U\\left(x_{0}\\right)+\\Delta U \\\\
                            V\\left(x_{0}+\\Delta x\\right)=V\\left(x_{0}\\right)+\\Delta V
                            \\end{array}\\right.\\right.$$`),
                            h("p", "Рассмотрим функцию $U(x) \\cdot V(x)$ в точке $x_{0}$ и в некоторой окрестности этой точки, найдем её приращение и составим предел отношения приращения функции к приращению аргумента при условии, что приращение аргумента стремится к нулю:"),
                            h("p", `$$
                            \\begin{aligned}
                            & \\Delta(U \\cdot V)=\\left.(U \\cdot V)\\right|_{x_{0}+\\Delta x}-\\left.(U \\cdot V)\\right|_{x_{0}}=\\underbrace{U\\left(x_{0}+\\Delta x\\right)}_{U\\left(x_{0}\\right)+\\Delta U} \\cdot \\underbrace{V\\left(x_{0}+\\Delta x\\right)}_{V\\left(x_{0}\\right)+\\Delta V}-U\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)= \\\\
                            & =\\left(U\\left(x_{0}\\right)+\\Delta U\\right) \\cdot\\left(V\\left(x_{0}\\right)+\\Delta V\\right)-U\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)=U\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)+\\Delta U \\cdot V\\left(x_{0}\\right)+ \\\\
                            & +\\Delta V \\cdot U\\left(x_{0}\\right)+\\Delta U \\cdot \\Delta V-U\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)=\\Delta U \\cdot V\\left(x_{0}\\right)++\\Delta V \\cdot U\\left(x_{0}\\right)+\\Delta U \\cdot \\Delta V \\\\
                            & \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta(U \\cdot V)}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U \\cdot V\\left(x_{0}\\right)++\\Delta V \\cdot U\\left(x_{0}\\right)+\\Delta U \\cdot \\Delta V}{\\Delta x} \\underset{\\text { арифметика }}{=} \\\\
                            & = \\lim _{\\Delta x \\rightarrow 0} \\cdot \\underset{\\to U'(x_0)}{\\frac{\\Delta U}{\\Delta x}} + U(x_0) \\underset{\\to V'(x_0)}{\\frac{\\Delta V}{\\Delta x}} + \\underset{\\to U'(x_0)}{\\frac{\\Delta U}{\\Delta x}} \\cdot \\underset{\\to 0}{\\Delta V} \\underset{\\substack{\\text{теорема о} \\\\ \\text{пределе суммы}}}{=} U'(x_0) \\cdot V(x_0) + V'(x_0) \\cdot U(x_0);
                            \\end{aligned}
                            $$`),
                            h("p", "при вычислении предела использован факт о связи свойств непрерывности и дифференцируемости функции: если функция $V(x)$ дифференцируемая в точке $x_{0}$, то она является и непрерывной в этой точке, поэтому бесконечно малому приращению $\\Delta x$ её аргумента соответствует бесконечно малое приращение $\\Delta V$ функции."),
                            h("p", "Таким образом, показано, что предел $\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta(U \\cdot V)}{\\Delta x}$ существует и является конечным, следовательно, функция $U(x) \\cdot V(x)$ является дифференцируемой в точке $x_{0}$ и ее производная в этой точке вычисляется по формуле:"),
                            h("p", "$$\\left.(U(x) \\cdot V(x))^{\\prime}\\right|_{x_{0}}=U^{\\prime}\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)+V^{\\prime}\\left(x_{0}\\right) \\cdot U\\left(x_{0}\\right)$$"),
                        ])
                    },
                    {
                        id: "remark",
                        name: "Замечание",
                        content: h("div", [
                            h("p", "Формулы о производной произведения легко распространить на любое конечное число функций:"),
                            h("p", `$$\\begin{aligned}
                            & (U \\cdot V \\cdot W)^{\\prime}=((U \\cdot V) \\cdot W)^{\\prime} \\underset{\\text { доказ. теорема }}{=}(U \\cdot V)^{\\prime} \\cdot W+(U \\cdot V) \\cdot W^{\\prime} \\underset{\\text { доказ. теорема }}{=} \\\\
                            & =\\left(U^{\\prime} \\cdot V+V^{\\prime} \\cdot U\\right) \\cdot W+U \\cdot V \\cdot W^{\\prime} \\\\
                            & \\Rightarrow(U \\cdot V \\cdot W)^{\\prime}=U^{\\prime} \\cdot V \\cdot W+U \\cdot V^{\\prime} \\cdot W+U \\cdot V \\cdot W^{\\prime}
                            \\end{aligned}$$`)
                        ])
                    }
                ]
            },
            {
                id: "derivative-div",
                name: "Производная отношения функций",
                latex: "\\left(\\frac{U}{V}\\right)^{\\prime}=\\frac{U^{\\prime} \\cdot V-V^{\\prime} \\cdot U}{V^{2}}",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о дифференцировании арифметических действий над функциями"),
                            h("p", "Если функции $U(x)$ и $V(x)$ являются дифференцируемыми в точке $x_{0}$, то в этой точке являются дифференцируемыми их отношение (при условии, что $\\left.V\\left(x_{0}\\right) \\neq 0\\right)$ по формуле выше")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Пусть $U(x)$ и $V(x)$ - дифференцируемые функции в точке $x_{0}$; это означает, что существуют их производные $U^{\\prime}\\left(x_{0}\\right)$ и $V^{\\prime}\\left(x_{0}\\right)$, которые запишем по их определению:"),
                            h('p', `$$\\left\\{\\begin{array}{l}
                            U^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta U}{\\Delta x} \\\\
                            V^{\\prime}\\left(x_{0}\\right)=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta V}{\\Delta x}
                            \\end{array}\\right.$$`),
                            h("p", "при этом приращения функций вычисляются по известным формулам:"),
                            h("p", `$$\\left\\{\\begin{array} { l } 
                            { \\Delta U = U ( x _ { 0 } + \\Delta x ) - U ( x _ { 0 } ) } \\\\
                            { \\Delta V = V ( x _ { 0 } + \\Delta x ) - V ( x _ { 0 } ) }
                            \\end{array} \\Leftrightarrow \\left\\{\\begin{array}{l}
                            U\\left(x_{0}+\\Delta x\\right)=U\\left(x_{0}\\right)+\\Delta U \\\\
                            V\\left(x_{0}+\\Delta x\\right)=V\\left(x_{0}\\right)+\\Delta V
                            \\end{array}\\right.\\right.$$`),
                            h("p", "Рассмотрим функцию $\\frac{U(x)}{V(x)}, V(x) \\neq 0$ с целью найти ее производную в точке $x_{0}$ :"),
                            h("p", `$$\\begin{aligned}
                            & \\Delta\\left(\\frac{U(x)}{V(x)}\\right)=\\left.\\frac{U(x)}{V(x)}\\right|_{x_{0}+\\Delta x}-\\left.\\frac{U(x)}{V(x)}\\right|_{x_{0}}=\\frac{U\\left(x_{0}+\\Delta x\\right)}{V\\left(x_{0}+\\Delta x\\right)}-\\frac{U\\left(x_{0}\\right)}{V\\left(x_{0}\\right)} \\underset{\\left(^{*}\\right)}{=} \\frac{U\\left(x_{0}\\right)+\\Delta U}{V\\left(x_{0}\\right)+\\Delta V}-\\frac{U\\left(x_{0}\\right)}{V\\left(x_{0}\\right)} \\underset{\\text { арифметика }}{=} \\\\
                            & =\\frac{V\\left(x_{0}\\right) \\cdot\\left(U\\left(x_{0}\\right)+\\Delta U\\right)-U\\left(x_{0}\\right) \\cdot\\left(V\\left(x_{0}\\right)+\\Delta V\\right)}{V\\left(x_{0}\\right) \\cdot\\left(V\\left(x_{0}\\right)+\\Delta V\\right)}=\\frac{V\\left(x_{0}\\right) \\cdot U\\left(x_{0}\\right)+V\\left(x_{0}\\right) \\cdot \\Delta U-U\\left(x_{0}\\right) \\cdot V\\left(x_{0}\\right)-U\\left(x_{0}\\right) \\cdot \\Delta V}{V^{2}\\left(x_{0}\\right)+V\\left(x_{0}\\right) \\cdot \\Delta V} \\\\
                            & \\Rightarrow \\Delta\\left(\\frac{U}{V}\\right)=\\frac{V\\left(x_{0}\\right) \\cdot \\Delta U-U\\left(x_{0}\\right) \\cdot \\Delta V}{V^{2}\\left(x_{0}\\right)+V\\left(x_{0}\\right) \\cdot \\Delta V}
                            \\end{aligned}$$`),
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-14.jpg?height=297&width=1589&top_left_y=594&top_left_x=288", width: 600}),
                            h("p", "Таким образом, показано, что предел $\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta\\left(\\frac{U}{V}\\right)}{\\Delta x}$ существует и является конечным, следовательно, функция $\\frac{U(x)}{V(x)}$ является дифференцируемой в произвольно зафиксированной точке $x_{0}$, и ее производная вычисляется по формуле"),
                            h("p", "$$\\left(\\frac{U}{V}\\right)^{\\prime}=\\frac{U^{\\prime} \\cdot V-V^{\\prime} \\cdot U}{V^{2}}$$")
                        ])
                    }
                ]
            },
            {
                id: "derivative-superposition",
                name: "Производная суперпозиции функции",
                latex: "y_{x}^{\\prime}=f_{z}^{\\prime} \\cdot z_{x}^{\\prime}",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о производной сложной функции"),
                            h("p", "Если функция $y(x)$ получена как суперпозиция двух функций $f(z)$ и $z(x)$, то есть $y=f(z(x))$, и функции, участвующие в суперпозиции, являются дифференцируемыми: $z(x)$ - дифференцируемая в точке $x_{0}, f(z)-$ дифференцируемая в точке $z_{0}=z\\left(x_{0}\\right)$, то сложная функция $y=f(z(x))$ является дифференцируемой в точке $x_{0}$ и ее производная вычисляется по формуле выше")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Рассмотрим графики непрерывных функций, участвующих в суперпозиции:"),
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-15.jpg?height=491&width=897&top_left_y=1311&top_left_x=317", width: 500}),
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-15.jpg?height=451&width=779&top_left_y=1939&top_left_x=433", width: 500}),
                            h("p", "Составим определение производной зависимой переменной $y$ по независимой переменной $x$ :"),
                            h("p", `$$\\begin{aligned}
                            & \\left\\{\\begin{array}{l}
                            \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{y\\left(x_{0}+\\Delta x\\right)-y\\left(x_{0}\\right)}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\overbrace{f\\left(z\\left(x_{0}+\\Delta x\\right)\\right)}^{f\\left(z_{0}+\\Delta z\\right)}-\\overbrace{f\\left(z\\left(x_{0}\\right)\\right)}^{f\\left(z_{0}\\right)}}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{f\\left(z_{0}+\\Delta z\\right)-f\\left(z_{0}\\right)}{\\Delta x}= \\\\
                            y(x)=f(z(x))
                            \\end{array}\\right. \\\\
                            & =\\lim _{\\Delta x \\rightarrow 0} \\frac{f\\left(z_{0}\\right)+\\Delta f-f\\left(z_{0}\\right)}{\\Delta x} \\Rightarrow \\\\
                            & \\Rightarrow \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}=\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta f}{\\Delta x}=\\lim _{\\text {ариф. }}^{\\Delta x \\rightarrow 0}\\left(\\frac{\\Delta f}{\\Delta z} \\cdot \\frac{\\Delta z}{\\Delta x}\\right)=\\left\\{\\begin{array}{l}
                            \\Delta z \\rightarrow 0 \\\\
                            \\text { так как } z(x)-\\text { непрерывная, } \\\\
                            m o \\Delta z \\rightarrow 0 n p u \\Delta x \\rightarrow 0
                            \\end{array}\\right\\}= \\\\
                            & \\underset{\\substack{\\text { Теорема о lim } \\\\ \\text { произведения }}}{=} \\lim _{\\Delta z \\rightarrow 0} \\frac{\\Delta f}{\\Delta z} \\cdot \\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta z}{\\Delta x}=f_z^{\\prime}\\left(z_0\\right) \\cdot z_x^{\\prime}\\left(x_0\\right) .
                            \\end{aligned}$$`),
                            h("p", "Таким образом, доказано, что предел $\\left.\\lim _{\\Delta x \\rightarrow 0} \\frac{\\Delta y}{\\Delta x}\\right|_{x_{0}}$ существует, является конечным и равен значению $f_{z}^{\\prime}\\left(z_{0}\\right) \\cdot z_{x}^{\\prime}\\left(x_{0}\\right),$ следовательно, функция  $y=f(z(x))$ является дифференцируемой в точке $x_{0}$ и ее производная вычисляется по формуле $y_{x}^{\\prime}=f_{z}^{\\prime} \\cdot z_{x}^{\\prime}$")
                        ])
                    }
                ]
            },
            {
                id: "derivative-inverse",
                name: "Производная обратной функции",
                latex: "\\left. x_{y}^{\\prime}\\right|_{y_{0}}=\\frac{1}{\\left.y_{x}^{\\prime}\\right|_{x_{0}}}",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о производной обратной функции"),
                            h("p", "Если функция $y=f(x)$ является дифференцируемой в точке $x_{0}$ и строго монотонной в некоторой окрестности этой точки, то обратная ей функция $x=f^{-1}(y)$ является дифференцируемой в точке $y_{0}=f\\left(x_{0}\\right)$ и ее производная вычисляется по формуле выше  (при условии, что $\\left.y_{x}^{\\prime}\\right|_{x_{0}} \\neq 0$ ).")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Рассмотрим для определённости монотонно возрастающую функцию в окрестности точки $x_{0}$. Обратная функция $x=f^{-1}(y)$ существует вследствие биективности отображения, задаваемого монотонной прямой функцией. При этом обратная функция является непрерывной в точке $y_{0}$ и имеет тот же график, что и прямая функция."),
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-17.jpg?height=537&width=1150&top_left_y=1896&top_left_x=333", width: 500}),
                            h("p", "Составим определение производной обратной функции: "),
                            h("p", "$\\left.x_{y}^{\\prime}\\right|_{y_{0}}=\\lim _{\\Delta y \\rightarrow 0} \\frac{\\Delta x}{\\Delta y}=\\lim _{\\Delta y \\rightarrow 0} \\frac{x\\left(y_{0}+\\Delta y\\right)-x\\left(y_{0}\\right)}{\\Delta y}=\\lim _{\\Delta y \\rightarrow 0} \\frac{\\Delta x}{\\Delta y}=\\{\\Delta x \\neq 0$, так как функция $x(y) \\uparrow \\downarrow\\}=$ $\\underset{\\text { ариф. }}{=} \\lim _{\\Delta y \\rightarrow 0} \\frac{1}{\\frac{\\Delta y}{\\Delta x}}=\\left\\{\\begin{array}{l}\\Delta x \\rightarrow 0 \\text { по непрерывности } \\\\ \\text { функции } x=f^{-1}(y)\\end{array}\\right\\}=\\lim _{\\Delta x \\rightarrow 0} \\frac{1}{\\frac{\\Delta y}{\\Delta x}} \\underset{\\substack{\\text { теорема o } \\\\ \\text { nреееле дробии }}}{=} \\frac{1}{y_{x}^{\\prime}\\left(x_{0}\\right)}$"),
                        ])
                    }
                ]
            },
            {
                id: "derivative-parametric",
                name: "Производная функции, имеющей параметрическое задание",
                latex: "\\left. y'_{x} \\right|_{x_{x_{0}}=x\\left(t_{0}\\right)}=\\left.\\frac{y_{t}^{\\prime}}{x_{t}^{\\prime}}\\right|_{t_{0}}",
                extras: [
                    {
                        id: "theorem",
                        name: "Теорема",
                        content: h("div", [
                            h("h6", "Теорема о дифференцировании функции, заданной параметрически"),
                            h("p", "Если функция $y=f(x)$ задана в параметрической форме $y=f(x):\\left\\{\\begin{array}{l}x=x(t) \\\\ y=y(t)\\end{array}\\right.$ и функции $x(t)$ и $y(t)$ являются дифференцируемыми в точке $t_{0}$, при этом функция $x(t)$ остается монотонной в некоторой окрестности точки $t_{0}$, то функция $y=f(x)$ является дифференцируемой в точке $x_{0}=x\\left(t_{0}\\right)$ и ее производная вычисляется по формуле выше (при условии, что $\\left.x_{t}^{\\prime}\\right|_{t_{0}} \\neq 0$)")
                        ])
                    },
                    {
                        id: "proof",
                        name: "Доказательство",
                        content: h("div", [
                            h("p", "Напомним механическую трактовку функции, имеющей параметрическое задание: если материальная точка с координатами $(x, y)$ движется по траектории $y=f(x)$, то функции $x=x(t)$ и $y=y(t)$ описывают зависимость от времени $t$ абсциссы и ординаты этой движущейся точки"),
                            h("img", {src: "https://cdn.mathpix.com/cropped/2023_06_20_2006046de1c07e6fe2bdg-20.jpg?height=462&width=759&top_left_y=597&top_left_x=363", width: 500}),
                            h("p", "Так как функция $x=x(t)$ является монотонной в окрестности точки $t_{0}$, то существует обратная функция $t=\\psi(x)$. Если эту обратную функцию подставить вместо $t$ во второе равенство системы $\\left\\{\\begin{array}{l}x=x(t) \\\\ y=y(t)\\end{array}\\right.$ то получим $y=y(\\psi(x))$, то есть в условиях сформулированной теоремы параметр $t$ из системы задания функции можно исключить, хотя бы принципиально."),
                            h("p", "Так как функция $x(t)$ дифференцируема в точке $t_{0}$, монотонная и $\\left.x_{t}^{\\prime}\\right|_{t_{0}} \\neq 0$, то дифференцируемой является и обратная функция $t=\\psi(x)$ в точке $x_{0}=x\\left(t_{0}\\right)$ и ее производная тогда равна $t_{x}^{\\prime}=\\frac{1}{x_{t}^{\\prime}}$ (по теореме о производной обратной функции)."),
                            h("p", "Следовательно, сложная функция $y=y(\\psi(x))$ является дифференцируемой в точке $x_{0}$, так как дифференцируемы обе функции $\\psi(x)$ и $y(t)$ (по теореме о дифференцировании сложной функции). Находим производную этой сложной функции:"),
                            h("p", "$$y_{x}^{\\prime}=\\left.(y(\\psi(x)))_{x}^{\\prime} \\underset{\\text { по правилу цепочки }}{=} y_{t}^{\\prime} \\cdot t_{x}^{\\prime} \\underset{\\text { подставим } t_{x}^{\\prime}=\\frac{1}{x_{t}^{\\prime}}}{\\Rightarrow}  y_{x}^{\\prime}\\right|_{x_{0}=x\\left(t_{0}\\right)}=\\left.\\frac{y_{t}^{\\prime}}{x_{t}^{\\prime}}\\right|_{t_{0}}$$")
                        ])
                    }
                ]
            }
        ]
    }
]