// React 18 requires this flag so act(...) recognises the test environment.
global.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom ships no matchMedia. Without a stub, every media-query branch in the
// app short-circuits and the tests never exercise the real path.
if (!window.matchMedia) {
  window.matchMedia = query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  });
}
