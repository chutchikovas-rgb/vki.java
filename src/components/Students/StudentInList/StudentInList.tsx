import type StudentInterface from '@/types/StudentInterface';
import styles from './StudentInList.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const StudentInList = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  const modifier = student.isDeleted ? '--isDeleted' : student.isNew ? '--isNew' : '';

  return (
    <a className={`${styles.Student} ${styles[modifier]}`}>
      {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName}`}
      <button onClick={onDeleteHandler}>Удалить</button>
    </a>
  );
};

export default StudentInList;