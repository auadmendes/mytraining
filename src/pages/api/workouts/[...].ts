
import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllTraining } from '../../../lib/db'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const typeTraining = String(req.query.substring).substring(6,7)
  
 // const trainingType = JSON.stringify(typeTraining).substring(6,7)
  

  if (req.method == 'GET') {
   const workout =  await prisma.workout.findMany({
    where: {
      type: typeTraining
    }
   })
   console.log(workout)
   //await getAllTraining();

   return res.status(200).json({ 
      data: workout,
    })
   
  }
  return res.status(404).json({message: 'Not Found'})
}