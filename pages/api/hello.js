export default (req, res) => {
  const locale = req.headers['accept-language'] || 'pt';

  res.statusCode = 200;

  if(locale === 'pt') {
    res.json({ nome: `João` });
  };

  if(locale === 'es') {
    res.json({ nombre: `Juan` });
  };

  if(locale === 'en') {
    res.json({ name: `John` });
  };
};
