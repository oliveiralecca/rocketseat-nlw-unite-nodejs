import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '5d661ff3-a4a9-4f00-9fc3-d13848cb785d',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs.',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
