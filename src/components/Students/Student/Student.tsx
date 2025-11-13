import type StudentInterface from '@/types/StudentInterface';
import { BreadcrumbItem } from '@/components/layout/BreadcrumbsItem/BreadcrumbsItem';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs/Breadcrumbs';

interface Props {
  student: StudentInterface;
}

export const Student = ({ student }: Props): React.ReactElement => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная</BreadcrumbItem>
        <BreadcrumbItem href="/students">Студенты</BreadcrumbItem>
        <BreadcrumbItem isCurrent={true}>
          {student.lastName} {student.firstName}
        </BreadcrumbItem>
      </Breadcrumbs>

      <div>
        <h1>{student.lastName} {student.firstName} {student.middleName}</h1>
        <p>ID: {student.id}</p>
        {student.contacts && <p>Контакты: {student.contacts}</p>}
        {student.uuid && <p>UUID: {student.uuid}</p>}
        <p>Группа: {student.group?.name}</p>
        {student.contacts && <p>Контактные данные: {student.contacts}</p>}
      </div>
    </div>
  );
};