const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// app.get('/api/hello', (req,res) => {
//     res.send({message: 'Hello Express!'});
// })
app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id':'1',
            'image':'https://placeimg.com/64/64/1',
            'name' : '배창현',
            'birthday':'830426',
            'gender':'남자',
            'job':'개발자'
          },
          {
            'id':'2',
            'image':'https://placeimg.com/64/64/2',
            'name' : '홍길동',
            'birthday':'960426',
            'gender':'남자',
            'job':'활빈당'
          },
          {
            'id':'3',
            'image':'https://placeimg.com/64/64/3',
            'name' : '이순신',
            'birthday':'200426',
            'gender':'남자',
            'job':'장군'
          }

    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
