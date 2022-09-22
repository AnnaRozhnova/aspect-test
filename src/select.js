const pg = require('pg');


// Параметры БД
const config = {
    user: 'rozhnovaav',           
    database: 'rozhnovaav',       
    password: '1234Anna',       
    host: 'pg2.sweb.ru',        
    port: '5432'                
};


// Функция поиска записей в БД
async function select(tableName, query) {
    
    // Создание строки запроса
    let sqlQuery = `SELECT * FROM ${tableName} WHERE name LIKE '%${query}%' OR description LIKE'%${query}%' ORDER BY name`;

    const pool = new pg.Pool(config);
    // Выполнение запроса
    const res = await pool.query(sqlQuery)
    await pool.end()

    return {
      data: res.rows.slice(0, 20), 
      count: res.rows.slice(0, 20).length
    };
    
}

module.exports = select;

