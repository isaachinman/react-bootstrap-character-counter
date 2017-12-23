import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import CharacterCounter from '../index'

describe('CharacterCounter', () => {

  it('should render children when passed in', () => {
    const wrapper = mount(
      <CharacterCounter>
        <input type='text' className='unique' />
      </CharacterCounter>,
    )
    expect(wrapper.contains(<input type='text' className='unique' />)).to.equal(true)
  })

  it('displays character count on keyUp events', () => {
    const wrapper = mount(
      <CharacterCounter>
        <input type='text' className='unique' maxLength={10} defaultValue='a' />
      </CharacterCounter>,
    )
    const input = wrapper.find('input').first()
    input.simulate('keyup', { which: 'a' })

    const countSpan = wrapper.find('.character-count')
    expect(countSpan.text()).to.equal('1/10')
  })

  it('style prop overrides default style', () => {
    const wrapper = mount(
      <CharacterCounter style={{ color: 'red' }}>
        <input type='text' />
      </CharacterCounter>,
    )

    const styledDiv = wrapper.find('.form-control-character-counter')
    expect(styledDiv).to.have.style('color', 'red')
  })
})

