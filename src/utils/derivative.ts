import {MathNode, parse} from "mathjs";

const isSymbolNode = (node: any): boolean => 'name' in node;
const isOperatorNode = (node: any): boolean => 'fn' in node;
const isConstantNode = (node: any): boolean => {
  return 'value' in node || (node.args && (isConstantNode(node.args[0]) && isConstantNode(node.args[1])))
};
const isParenthesisNode = (node: any): boolean => 'content' in node;
const isParam = (arg: any, param: string): boolean => isSymbolNode(arg) && arg.name === param;


function derivativePow(degree: number, param: string): string {
  return `${degree}*${param}^${degree - 1}`
}

function derivativeSqrt(param: string): string {
  return `1 / (2*sqrt(${param}))`
}

function derivativeDivide(div: number, param: string): string {
  return `-(${div}/${param}^2)`
}

function getConstant(node: any) {
  let val = 0
  if (isParenthesisNode(node)) {
    const content = node.content
    if ('args' in content) {
      switch (content.op) {
        case '/':
          val = content.args[0].value / content.args[1].value
          break
        case '*':
          val = content.args[0].value * content.args[1].value
          break
      }
    }
  } else {
    val = node.value
  }
  return val
}

export function derivative(func: string, param: string): string {
  let res = ''
  const arr = ['left', 'right']
  const regex = new RegExp("\\b"+arr.join('|')+"\\b","gi")
  const regexSlash = /\\/ig;
  let f = func.replace(regex, '').replace(regexSlash, '',)
  f = f.replace('cdot', ' *')
  f = f.replace('ln', 'log')
  console.log(f.indexOf('frac'), f.indexOf('frac') !== -1)
  if (f.indexOf('frac') !== -1) {
    console.log('here')
    const regex = /frac/ig;
    f = f.replace(regex, '')
  }
  console.log(func, '|',f)
  const tree: MathNode = parse(f)
  console.log(tree)

  if (isOperatorNode(tree)) {
    const [arg1, arg2] = tree.args
    const func = tree.fn.name || tree.fn
    switch (func) {
      case 'pow':
        if (isParam(arg1, param)) {
          if (isConstantNode(arg2)) {
            res += derivativePow(arg2.value, param)
          } else if (isParenthesisNode(arg2) && isConstantNode(arg2.content)) {
            const val = getConstant(arg2)
            res += `${derivativePow(val, arg1.toString())}`
          }
        } else if (isParenthesisNode(arg1)) {
          res += `${derivativePow(arg2.value, arg1.toString())} * ${derivative(arg1.content.toString(), param)}`
        } else if (isConstantNode(arg1)) {
          res += `${arg1.value}^${arg2.toString()} * ln(${arg1.value})`
          if (isParenthesisNode(arg2)) {
            res += `* ${derivative(arg2.toString(), param)}`
          }
        }
        break
      case 'sqrt':
        if (isParam(arg1, param)) {
          res += derivativeSqrt(param)
        }
        break
      case "multiply":
        if (isParam(arg1, param)) {
          if (isConstantNode(arg2)) {
            res += `${arg2.value}`
          } else if (isOperatorNode(arg2)) {
            res += `1 * ${derivative(arg2.toString(), param)}`
          }
        } else if (isConstantNode(arg1)) {
          const val = 'args' in arg1 ? `${arg1.args[0]}${arg1.op}${arg1.args[1]}` : arg1.value
          if (isParam(arg2, param)) {
            res += `${val}`
          } else if (isOperatorNode(arg2)) {
            res += `${val} * ${derivative(arg2.toString(), param)}`
          }
        } else if (isOperatorNode(arg1) && isOperatorNode(arg2)) {
          const u = arg1.toString()
          const v = arg2.toString()
          res += `${derivative(u, param)}*${v} + ${u}*${derivative(v, param)}`
        }
        break
      case "divide":
        console.log(arg1.value, arg2.value)
        if (isParam(arg1, param) && isConstantNode(arg2)) {
          res += `1/${arg2.value}`
        } else if (isConstantNode(arg1) && isParam(arg2, param)) {
          res += derivativeDivide(arg1.value, param)
        } else if (isOperatorNode(arg1) && isOperatorNode(arg2)) {
          const u = arg1.toString()
          const v = arg2.toString()
          res += `(${derivative(u, param)}*${v} - ${u}*${derivative(v, param)})/(${v})^2`
        } else if (isConstantNode(arg1) && isConstantNode(arg2)) {
          console.log(arg1.value, arg2.value)
          res += `${arg1.value} / ${arg2.value}`
        }
        break
      case "add":
        res += `${derivative(arg1.toString(), param)} + ${derivative(arg2.toString(), param)}`
        break
      case "subtract":
        res += `${derivative(arg1.toString(), param)} - ${derivative(arg2.toString(), param)}`
        break
      case "log":
        if (arg2) {
          if (isConstantNode(arg2)) {
            res += `1/(${isParam(arg1, param) ? param : arg1.toString()}*ln(${arg2.value})) ${isParam(arg1, param) ? '' : `* ${derivative(arg1.toString(), param)}`}`
          } else if (isSymbolNode(arg2)) {
            if (arg2.name === 'e') {
              res += `1/${isParam(arg1, param) ? param : arg1.toString()} ${isParam(arg1, param) ? '' : `* ${derivative(arg1.toString(), param)}`}`
            } else {
              res += `1/(${isParam(arg1, param) ? param : arg1.toString()}*ln(${arg2.name})) ${isParam(arg1, param) ? '' : `* ${derivative(arg1.toString(), param)}`}`
            }
          }
        } else {
          res += `1/(${isParam(arg1, param) ? param : arg1.toString()}) ${isParam(arg1, param) ? '' : `* ${derivative(arg1.toString(), param)}`}`
        }
        break
      case "sin":
        if (isParam(arg1, param)) {
          res += `cos(${arg1.toString()})`
        } else if (isOperatorNode(arg1)) {
          res += `cos(${arg1.toString()}) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "cos":
        if (isParam(arg1, param)) {
          res += `-sin(${arg1.toString()})`
        } else if (isOperatorNode(arg1)) {
          res += `-sin(${arg1.toString()}) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "tg":
        if (isParam(arg1, param)) {
          res += `1/(cos(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `1/(cos(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "ctg":
        if (isParam(arg1, param)) {
          res += `-1/(sin(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `-1/(sin(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "arcsin":
        if (isParam(arg1, param)) {
          res += `1/sqrt(1-(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `1/sqrt(1-(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "arccos":
        if (isParam(arg1, param)) {
          res += `-1/sqrt(1-(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `-1/sqrt(1-(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "arctg":
        if (isParam(arg1, param)) {
          res += `1/(1+(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `1/(1+(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "arcctg":
        if (isParam(arg1, param)) {
          res += `-1/(1+(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `-1/(1+(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "sh":
        if (isParam(arg1, param)) {
          res += `ch(${arg1.toString()})`
        } else if (isOperatorNode(arg1)) {
          res += `ch(${arg1.toString()}) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "ch":
        if (isParam(arg1, param)) {
          res += `-sh(${arg1.toString()})`
        } else if (isOperatorNode(arg1)) {
          res += `-sh(${arg1.toString()}) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "th":
        if (isParam(arg1, param)) {
          res += `1/(ch(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `1/(ch(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
      case "cth":
        if (isParam(arg1, param)) {
          res += `-1/(sh(${arg1.toString()})^2)`
        } else if (isOperatorNode(arg1)) {
          res += `-1/(sh(${arg1.toString()})^2) * ${derivative(arg1.toString(), param)}`
        }
        break
    }
  } else if (isParenthesisNode(tree)) {
    res += `(${derivative(tree.content.toString(), param)})`
  } else if (isSymbolNode(tree)) {
    res = '1'
  } else if (isConstantNode(tree)) {
    res = '0';
  }
  return res
}
