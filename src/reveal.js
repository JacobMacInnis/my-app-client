const REVEAL_SELECTOR = '[data-reveal]';
const VISIBLE_CLASS = 'is-visible';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const showAll = root => {
  root.querySelectorAll(REVEAL_SELECTOR).forEach(el => el.classList.add(VISIBLE_CLASS));
};

/**
 * Reveals [data-reveal] elements as they scroll into view.
 *
 * Falls back to showing everything immediately when the user prefers reduced
 * motion or IntersectionObserver is unavailable, so content is never hidden
 * behind an effect that cannot run. Returns a cleanup function.
 */
export default function initReveal(root = document) {
  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    showAll(root);
    return () => {};
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  const observe = scope => {
    scope.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
      if (!el.classList.contains(VISIBLE_CLASS)) observer.observe(el);
    });
  };

  observe(root);

  // Route changes swap the page contents, so pick up nodes added later.
  const mutations = new MutationObserver(records => {
    records.forEach(record => {
      record.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches && node.matches(REVEAL_SELECTOR)) observer.observe(node);
        if (node.querySelectorAll) observe(node);
      });
    });
  });

  const target = root === document ? document.body : root;
  if (target) mutations.observe(target, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}
