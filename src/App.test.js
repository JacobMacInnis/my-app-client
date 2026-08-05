import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// tsparticles spins up canvas/rAF work that jsdom cannot service.
jest.mock('react-tsparticles', () => () => null);
jest.mock('tsparticles', () => ({ loadFull: () => Promise.resolve() }));

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

it('renders the resume page with current experience', () => {
  const { html, unmount } = renderAt('/resume');
  expect(html).toContain('Director of Engineering');
  expect(html).toContain('OneView Commerce');
  // Guards against the 2019 copy creeping back in.
  expect(html).not.toContain('Travis');
  expect(html).not.toContain('Software Developer<');
  unmount();
});
