import sqlite3 from 'sqlite3';

import StudentInterface from '@/types/StudentInterface';

sqlite3.verbose();

export const deleteStudentDb = async (id: number): Promise<void> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  return new Promise<void>((resolve, reject) => {
    const sql = 'DELETE FROM student WHERE id = ?';
    db.run(sql, [id], function (err) {
      if (err) {
        reject(new Error('Database error'));
        return;
      }

      if (this.changes === 0) {
        reject(new Error('Student not found'));
        return;
      }
      resolve();
    });
  });
};

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

export const addStudentDb = async (student: Omit<StudentInterface, 'id'>): Promise<number> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  return new Promise((resolve, reject) => {
    const { last_name, first_name, middle_name, groupid } = student;
    const query = `
      INSERT INTO student (last_name, first_name, middle_name, groupid)
      VALUES (?, ?, ?, ?)
    `;
    db.run(query, [last_name, first_name, middle_name, groupid], function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
};
