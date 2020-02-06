import React from 'react';
import Show from './Show';
import { render } from '@testing-library/react'

it('renders show title, description and episodes', () => {
    const { getByText } = render(
        <Show
            title="foo"
            description="bar"
            imagePath="url"
            episodes={[]}
        />
    );
    
    expect(getByText('foo')).toBeTruthy();
    expect(getByText('bar')).toBeTruthy();
    expect(getByText('First 0 episodes')).toBeTruthy();
});
