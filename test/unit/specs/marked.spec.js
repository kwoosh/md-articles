import Vue from 'vue'
import { mark } from '@/filters'

describe('markdown filter', () => {
  it('should convert markdown to html', () => {
    const answer = '<p>I am using <strong>markdown</strong>.</p>\n'

    expect(mark('I am using __markdown__.'))
      .to.equal(answer)
  })
})