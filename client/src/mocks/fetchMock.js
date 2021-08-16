export default function setupFetchMock(data) {
  return function fetchMock() {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve(data),
      })
    })
  }
};