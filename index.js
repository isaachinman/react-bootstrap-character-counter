// Imports
import React, { Component, PropTypes } from 'react'

// Styles
const styles = {
  counter: {
    height: 11,
    position: 'absolute',
    bottom: -12,
    right: 0,
    fontSize: 11,
    lineHeight: '11px',
    color: '#C0C0C0',
  },
}

export default class CharacterCounter extends Component {

  state = {
    valueLength: null,
  }

  componentDidMount() {
    const input = this.container.firstChild
    const inputRender = () => { this.setState({ valueLength: input.value.length }) }
    input.addEventListener('keyup', inputRender)
    inputRender()
  }

  render() {

    const { valueLength } = this.state
    const { children, style } = this.props
    const maxLength = (['text', 'email', 'password'].includes(children.props.type) || children.props.componentClass === 'textarea') && children.props.maxLength ? children.props.maxLength : false

    return (
      <div ref={div => this.container = div}>
        {children}
        <span className='form-control-character-counter' style={style ? Object.assign({}, styles.counter) : styles.counter}>
          {valueLength !== null && valueLength > 0 && maxLength &&
            <span>{valueLength}/{maxLength}</span>
          }
        </span>
      </div>
    )
  }

}

CharacterCounter.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
}
