const { Client } = require("pg")

const conexionDB = async () => {
  try {
    const cliente = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'crud',
      password: '123',
      port: '5432'
    })

    await cliente.connect()
    console.log('Conexion establecida con exito')
    await cliente.end()
  } catch (error) {
    console.log(error)
  }
}

conexionDB()