const express = require('express')
const usersRoutes = require('./src/routes/userRoutes')
const pointsRoutes = require('./src/routes/pointsRoutes')


const app = express();
const port = 3300;

app.use(express.json());

app.get("/", (req, res) => {
    res.send('main server')
})

app.use('/api/users', usersRoutes);
app.use('/api/points', pointsRoutes);


app.listen(port, () => console.log(`working on ${port}`));
