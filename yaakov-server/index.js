const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: '',
   database: 'yaakov_ltd'
});


const PORT = 4567;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/tenant/search', function (request, response) {
   if (request.query.phone) {
      connection.query('SELECT tenant_id FROM tenants WHERE tenant_mobile = ?', [request.query.phone], function (err, res) {
         if (err) return response.status(400).send();
         if (res.length == 0) return response.status(404).send();

         return response.send(res[0].tenant_id.toString());
      })
   } else {
      return response.status(400).send();
   }
});

app.post('/ticket/:tenantid', function (request, response) {
   const { tenantid } = request.params;

   connection.query('INSERT INTO tickets (ticket_tenant_id, ticket_fields) VALUES (?, ?)', [Number(tenantid), JSON.stringify(request.body)], function (err, res) {
      if (err) return response.status(400).send();
      response.send(res.insertId.toString());
   })
});





app.listen(PORT, () => console.log(`listening at ${PORT}`));