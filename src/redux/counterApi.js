/* eslint-disable import/prefer-default-export */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}
