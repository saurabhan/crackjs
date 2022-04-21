import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Crack JS | your guide to crack Javascript Interviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <div>
         <h1 className='font-bold text-2xl'>Crack JS</h1>
       </div>
      </main>

  
    </div>
  )
}

export default Home
