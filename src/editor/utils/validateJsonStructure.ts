import { Node } from "slate"


export const parseSlateJSON = (value: string) => {
  try {
    const parsed = JSON.parse(value)
    if (!Array.isArray(parsed) || parsed.some(node => !Node.isNode(node))) {
      throw ''
    }
    return parsed
  } catch (_) {
    throw new SyntaxError('Invalid JSON file or it doesn\'t have correct structure. Please pick other file or create a new one!')
  }
}