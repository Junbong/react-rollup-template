import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import Button, { COLORS } from '../src/components/Button'
import ButtonREADME from '../src/components/Button/README.md.storybook'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo(ButtonREADME))
  .add('Button', () => (
    <Button
      disabled={boolean('Disabled', false)}
      color={select('Color', Object.values(COLORS), COLORS[0])}
      isLoading={boolean('Is loading', false)}
      fillWidth={boolean('Fill width', false)}
      roundish={boolean('Roundish', false)}
      noFill={boolean('No fill', false)}
      noOutline={boolean('No outline', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Button')}
    </Button>
  ))
