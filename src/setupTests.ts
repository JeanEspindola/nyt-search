import '@testing-library/jest-dom/extend-expect';

// Mocking the global.fetch included in React Native
global.fetch = jest.fn();

// // Helper to mock a success response (only once)
// fetch.mockResponseSuccess = (body) => {
//   fetch.mockImplementationOnce(() =>
//     Promise.resolve({ json: () => Promise.resolve(body) }));
// };
//
// // Helper to mock a failure response (only once)
// fetch.mockResponseFailure = (error) => {
//   fetch.mockImplementationOnce(() => Promise.reject(error));
// };
