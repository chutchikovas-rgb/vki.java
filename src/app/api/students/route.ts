import { getStudentsDb, addStudentDb } from '@/db/studentsDb';
import { NextRequest } from 'next/server';

export async function GET(): Promise<Response> {
    const students = await getStudentsDb();

    return new Response(JSON.stringify(students), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export async function POST(request: NextRequest): Promise<Response> {
  const body = await request.json();

  const id = await addStudentDb({
    last_name: body.last_name,
    first_name: body.first_name,
    middle_name: body.middle_name,
    groupid: body.groupid,
  });

  return new Response(
    JSON.stringify({
      id,
      last_name: body.last_name,
      first_name: body.first_name,
      middle_name: body.middle_name,
      groupid: body.groupid,
    }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}