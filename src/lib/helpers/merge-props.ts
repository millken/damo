import clsx from "clsx"

export const callAll =
  <T extends (...a: any[]) => void>(...fns: (T | undefined)[]) =>
  (...a: Parameters<T>) => {
    fns.forEach(function (fn) {
      fn?.(...a)
    })
  }
export const isString = (v: any): v is string => typeof v === "string"
interface Props {
  [key: string]: any
}

const CSS_REGEX = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g

const serialize = (style: string): Record<string, string> => {
  const res: Record<string, string> = {}
  let match: RegExpExecArray | null
  while ((match = CSS_REGEX.exec(style))) {
    res[match[1]!] = match[2]!
  }
  return res
}

const css = (
  a: Record<string, string> | string | undefined,
  b: Record<string, string> | string | undefined,
): Record<string, string> | string => {
  if (isString(a)) {
    if (isString(b)) return `${a};${b}`
    a = serialize(a)
  } else if (isString(b)) {
    b = serialize(b)
  }
  return Object.assign({}, a ?? {}, b ?? {})
}

type TupleTypes<T extends any[]> = T[number]

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export function mergeProps<T extends Props>(...args: T[]): UnionToIntersection<TupleTypes<T[]>> {
  let result: Props = {}

  for (let props of args) {
    for (let key in result) {
      if (key.startsWith("on") && typeof result[key] === "function" && typeof props[key] === "function") {
        result[key] = callAll(props[key], result[key])
        continue
      }

   if (key === "className" || key === "class") {
        result[key] = clsx(result[key], props[key])
        continue
      }

      if (key === "style") {
        result[key] = css(result[key], props[key])
        continue
      }

      result[key] = props[key] !== undefined ? props[key] : result[key]
    }

    // Add props from b that are not in a
    for (let key in props) {
           console.log(key)
      if (result[key] === undefined) {
        result[key] = props[key]
      }
    }
  }
  /* style */
  if (result.style) {
    let style = '';

    for (const key in result.style) {
      const val = result.style[key];
      style += `${key}:${val};`;
    }

    result.style = style;
  }
  return result as any
}