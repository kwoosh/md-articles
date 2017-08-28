import marked from 'marked'

export const mark = value => {
  return marked(value)
}