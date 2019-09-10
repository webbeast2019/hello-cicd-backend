const quotes = require('./quotes.service');

test('getRandomQuote returns a legal quote object', () => {
  const quote = quotes.getRandomQuote();
  expect(typeof quote.body).toBe('string');
  expect(typeof quote.source).toBe('string');
  expect(quote.body.length).toBeGreaterThan(10);
  expect(quote.body.length).toBeGreaterThan(2);
});
