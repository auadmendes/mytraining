
import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllTraining } from '../../../lib/db'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let workout

  if (req.method == 'GET') {

   const workout =  await prisma.workout.findMany()
   //console.log(workout)
   //await getAllTraining();

   return res.status(200).json({ 
      data: workout,
    })
   
  }
  return res.status(404).json({message: 'Not Found'})
}
