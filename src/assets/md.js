import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
  highlight(code) {
    return highlight.highlightAuto(code).value
  }
})

export default (text) => {
  return marked(text)
}