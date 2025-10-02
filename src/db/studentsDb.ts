import sqlite3 from 'sqlite3';

import StudentInterface from '@/types/StudentInterface';

sqlite3.verbose();

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  const student = await new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM student';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        db.close();
       return;
      }
      resolve(rows);
     db.close();
   });
 });

  // test data
  // const students: StudentInterface[] = [
  //    {
  //     id: 1,
  //     first_name: 'lo',
  //     last_name: 'Раесае',
  //     middle_name: 'Вайперрович',
  //     groupid: 2,
  //    },
  //  ];

  return student as StudentInterface[];
};
