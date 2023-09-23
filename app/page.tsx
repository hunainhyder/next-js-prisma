import Image from 'next/image'
import styles from './page.module.css'
import { prisma } from '@/lib/prisma'
import { userAgentFromString } from 'next/server';

export default async function Home() {
  let students = await prisma.student.findMany();
  
  return (
    <>
      <h1>Students</h1>
      {students.map(student => {
        return (<ul>
          <li>{student.fullname}</li>
          <li>{student.age}</li>
          <li>{student.course}</li>
          </ul>
        )})}
    </>
  );
}
