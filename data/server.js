const express = require('express')
const usersRoutes = require('./src/routes/routes')


const app = express();
const port = 3300;

app.use(express.json());

app.get("/", (req, res) => {
    res.send('main server')
})

app.use('/api/users', usersRoutes);


app.listen(port, () => console.log(`working on ${port}`));
