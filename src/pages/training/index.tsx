import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getAllTraining, getTrainingBtType, Iworkout } from '../../lib/db'
import { Router, useRouter } from 'next/router'

import Avvvatars from 'avvvatars-react'
import { useState } from 'react';

interface PostProps {
  workout: Iworkout[];
}

export default function Home({ workout }: PostProps) {
  const [isActive, setIsActive] = useState(false)
  const [typeTraining, setTypeTraining] = useState('')
  const router = useRouter()

  function handleGetTraining(data: string) {
    //setTypeTraining('/api/workouts/C')
    router.push(`/training?workout=${data}`)
  }

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-4 flex p-2 gap-2'>
        <h1 className=''>Choose a Training Type</h1>
        <select
          value={typeTraining}
          onChange={e => handleGetTraining(e.target.value)}
          className='text-gray-400 bg-black'

        >
          <option value="X">Training</option>
          <option value="A">Training A</option>
          <option value="B">Training B</option>
          <option value="C">Training C</option>
        </select>
      </div>
      <div className='w-auto min-w-40 h-[80%] p-4 m-4'>
        {workout.map(item => (
          <div key={item.id}
            className="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-gray-50 relative overflow-hidden mt-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <a href="#" className="w-full h-full block">
              <div className="flex items-center border-b-2 mb-2 py-2">
                <Avvvatars value={item.type} size={48} />
                <div className="pl-3">
                  <div className="font-medium text-gray-500">
                    Luciano Mendes
                  </div>
                  <div className="text-gray-600 text-sm">
                    Personal. Jair
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-gray-800 text-lg font-medium mb-2">
                  Working On: <span className='text-blue-500'>{item.title}</span>
                </p>
                <p className="text-gray-300 text-sm font-medium mb-2">
                  {item.description}
                </p>
                {/* <p className="text-blue-600 text-xs font-medium mb-2">
                  Every Monday
                </p> */}
                {/* <p className="text-gray-400 text-sm mb-4">
                  You’ve been coding for a while now and know your way around...
                </p> */}
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="text-gray-300 text-sm">
                  {item.times} times
                </p>
                <p className="text-gray-300 text-sm">
                  {item.amount} repetitions
                </p>
              </div>
              <div className="w-full h-2 bg-blue-200 rounded-full">
                <div className="w-2/4 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>



    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const slug = query.workout
  console.log(slug)
  const workout = await getTrainingBtType(String(slug));

  return {
    props: {
      workout,
    }
  }
}