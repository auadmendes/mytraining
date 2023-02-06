import { type } from "os";
import { prisma } from "./prisma";

export interface Iworkout {
  id: string;
  title: string;
  description: string;
  times: string;
  amount: string;
  type: string;
}

export async function getAllTraining(){
  //console.log('getAll')
  const data = await prisma.workout.findMany({
    orderBy: {
      type: 'asc'
    }
  });
  return data;
}

export async function getTrainingBtType(typeT: string){
  //console.log(typeT + '------')
  const data = await prisma.workout.findMany({
    where: {
      type: typeT
    }
  });
  return data;
}

export async function createTraining({description, title, times, amount, type}: Iworkout) {
  await prisma.workout.create({
    data:  {
      title,
       description,
       times,
       amount,
       type
    }
  })
}