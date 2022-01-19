const express = require('express')
const pointsRoutes = require('./src/routes/pointsRoutes')
const poleRoutes = require('./src/routes/poleRoutes')


const app = express();
const port = 3300;

app.use(express.json());

app.get("/", (req, res) => {
    res.send('main server')
})

app.use('/points', pointsRoutes);
app.use('/poles', poleRoutes);

app.listen(port, () => console.log(`working on ${port}`));
