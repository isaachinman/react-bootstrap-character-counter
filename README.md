# react-bootstrap-character-counter

## Demo

![](http://i.imgur.com/omP41Tg.gif)

## What is this?

This component extends (well wraps, really) react-bootstrap form functionality to include a character counter on `input[type=text]` and textareas. The counter will only display on inputs that have a maxlength set, and displays the length of the current value
over the maxlength value.

Absolutely no dependencies besides react itself (and obviously react-bootstrap in actual use cases).

Works with SSR.

Out of the box, it _must_ be inside a FormGroup for positioning reasons. If you don't want to use it in a FormGroup,
you'll have to do some custom positioning via CSS.

## Basic example (uncontrolled input):

```javascript
import CharacterCounter from 'react-bootstrap-character-counter'
import { FormControl, FormGroup } from 'react-bootstrap'

<FormGroup>
  <CharacterCounter>
    <FormControl
      type='text'
      placeholder='Hello world'
      maxLength={50}
    />
  </CharacterCounter>
  <FormControl.Feedback />
</FormGroup>
```

You can pass styles via an object into props, as such:

```javascript
<CharacterCounter style={{ color: 'blue' }}>
```

Or you can obviously hack around with the CSS snippet provided, which must be included for CSS transitions.
