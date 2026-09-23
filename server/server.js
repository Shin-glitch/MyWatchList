const app = require('./app')
const pool = require('./db/config')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`)
})


const test_db_con = async () => {
    try {
        const result = await pool.query('SELECT NOW()')
        console.log(`database connected: ${result.rows[0].now}`)
    } catch (error) {
        console.log('database connection failed: ', error)
    }
}

test_db_con()
