import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = path => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
  });
  return {
    html: container.innerHTML,
    unmount: () => act(() => root.unmount())
  };
};

it('renders the landing page', () => {
  const { html, unmount } = renderAt('/');
  expect(html).toContain('Jacob MacInnis');
  expect(html).toContain('Tech Stack');
  unmount();
});

it('renders a not-found panel for an unmatched path', () => {
  // Netlify hands every unmatched path to the router, so this is what a typo'd
  // URL renders. Without the fallback route it was the nav over empty space.
  const { html, unmount } = renderAt('/resumee');
  expect(html).toContain('This page doesn');
  expect(html).toContain('Back to home');
  // The nav is deliberately still here, so assert on body content only: no
  // landing hero and no resume detail should leak into the fallback.
  expect(html).not.toContain('processed annually');
  expect(html).not.toContain('OneView Commerce');
  unmount();
});

it('renders the resume page with current experience', () => {
  const { html, unmount } = renderAt('/resume');
  expect(html).toContain('Director of Engineering');
  expect(html).toContain('OneView Commerce');
  // Guards against the 2019 copy creeping back in.
  expect(html).not.toContain('Travis');
  expect(html).not.toContain('Software Developer<');
  unmount();
});
