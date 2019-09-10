const quotes = [
    {body: 'There is nothing permanent except change', source: 'Heraclitus'},
    {body: 'Learning never exhausts the mind', source: 'Leonardo da Vinci'},
    {body: 'It is better to travel well than to arrive', source: 'Gautama Buddha'}
];

module.exports.getRandomQuote =  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    // return quotes[index];
};

