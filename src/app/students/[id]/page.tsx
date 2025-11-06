"use client";

import { Student } from '@/components/Students/Student/Student';
import useStudents from '@/hooks/useStudents';
import { useParams } from 'next/navigation';

export default function StudentPage() {
  const params = useParams();
  const studentId = params.id ? Number(params.id) : undefined;
  const { student } = useStudents(studentId);

  if (!student) {
    return <div>Студент не найден</div>;
  }

  return <Student student={student} />;
}