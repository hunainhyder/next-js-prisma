import { prisma } from '@/lib/prisma'
import '@/app/page.module.css'

export default async function Home() {
  const data = await prisma.student.findMany();
  
  return (
    <div>
      <h1>Hello Next.js</h1>

      <ul>
        {data.map(curr => <li>{curr.fullname} ({curr.email})</li>)}
      </ul>
    </div>
  )
}
