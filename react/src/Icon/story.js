import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Icon from './index';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelná', () => (
	<Icon
		symbol={text('Symbol', 'alert')}
	/>
), {
	notes: { markdown: readme },
});