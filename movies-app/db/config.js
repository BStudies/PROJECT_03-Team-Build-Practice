const options = {
  query: (e) => {
    console.log(e.query);
  }
}

const pgp = require('pg-promise')(options);

function setDatabase(){
  if(process.env.NODE_ENV === 'developement' || !process.env.NODE_ENV){
    return pgp({
      database: 'movies_p3_dev',
      port: 5432,
      host: 'localhost',
      user: 'postgres',
    })
  }
  else {
    return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;
