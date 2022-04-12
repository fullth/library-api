import mysql from 'mysql2';
/**
 * @Question
    * .env 파일을 못읽어옴.
 * @Answer
    * 모듈 import부분이 빠져있음. 
 */
import { development } from './mysql.database.config';

export const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'fullth',
  password : 'fullthAdmin22',
  database : 'my_db'
});
 
/**
 * @Question
 *  1. connection 관리
 *  2. node에서의 커넥션 풀 관리
 */
connection.connect();