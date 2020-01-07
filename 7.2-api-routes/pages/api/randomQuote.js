import allQuotes from '../../quotes.json';

export default (req, res) => {
  const { author } = req.query;
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown')
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);

}


// import quotes from '../../quotes.json';
// no api
// export default (req, res) => {
//   const quote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.status(200).json(quote);
// };

//below we create an api route
// export default (req, res) => {
//   res.status(200).json({
//     quote: 'Write tests, not too many, mostly integration2',
//     author: 'Guillermo Rauch'
//   });
// };