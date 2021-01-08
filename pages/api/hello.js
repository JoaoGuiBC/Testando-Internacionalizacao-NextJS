export default (req, res) => {
  const locale = req.headers['accept-language'] || 'pt';

  res.statusCode = 200;

  if(locale === 'pt') {
    res.json({ Nome: `João` });
  };

  if(locale === 'es') {
    res.json({ Nombre: `Juan` });
  };

  if(locale === 'en') {
    res.json({ Name: `John` });
  };
};
