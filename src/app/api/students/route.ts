import StudentInList from '@/components/Students/StudentInList/StudentInList';
import { getStudentsDb } from '@/db/studentDb';
import { addStudentDb } from '@/db/studentDb';



export async function GET(): Promise<Response> {
  const students = await getStudentsDb();
  return new Response(JSON.stringify(students), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    delete data['id'];
    const newStudent = await addStudentDb(data); 

    return new Response(JSON.stringify(newStudent), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Ошибка при добавлении студента' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}