'use strict';
const quotesService = require('./quotes.service');

test('getRandomQuote should return a quote with body and source', () => {
    const quote = quotesService.getRandomQuote();

    expect(quote).toBeDefined();
    expect(typeof quote).toBeObject('object');
    expect(typeof quote.body).toMatch('string');
    expect(typeof quote.source).toMatch('string');
});

test('getRandomQuote should return a quote with body length greater than 9', () => {
    const quote = quotesService.getRandomQuote();

    expect(quote.body.length).toBeGreaterThan(9);
});
