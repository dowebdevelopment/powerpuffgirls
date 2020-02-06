import React from 'react';
import Episode from './Episode';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { render } from '@testing-library/react'

const EpisodeWithRouter = withRouter(Episode);

it('renders episode title and description', () => {
    const { getByText } = render(
        <BrowserRouter>
            <EpisodeWithRouter title="foo" description="bar" imagePath="url" />
        </BrowserRouter>
    );

    expect(getByText('foo')).toBeTruthy();
    expect(getByText('bar')).toBeTruthy();
});
