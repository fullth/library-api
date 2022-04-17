import mysql from 'mysql2';

import { development as dev} from './mysql-config.db'

export const connection = mysql.createConnection({
  host     : dev.host,
  user     : dev.user,
  password : dev.password,
  database : dev.database
});
 
connection.connect();
