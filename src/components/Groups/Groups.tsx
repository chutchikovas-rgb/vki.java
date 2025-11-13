'use client';

import useGroups from '@/hooks/useGroups';
import type GroupInterface from '@/types/GroupInterface';
import styles from './Groups.module.scss';
import { DriverUtils } from 'typeorm/driver/DriverUtils.js';
import StudentInterface from '@/types/StudentInterface';

const Groups = (): React.ReactElement => {
  const { groups } = useGroups();

  return (
    <div className={styles.Groups}>
      {groups.map((group: GroupInterface) => (
        <div key={group.id}>
          <h2>
            {group.name}
          </h2>

          <div className={styles.StudentInGroup}>
            {group.students?.map((student: StudentInterface) => (
              <a href={'/students/' + student.id} key={student.id}>{student.id}. {student.lastName} {student.firstName} {student.middleName}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Groups;