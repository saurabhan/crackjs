import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crack JS | your guide to crack Javascript Interviews</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <div>
         <h1 className='font-bold text-2xl'>Crack JS</h1>
       </div>
      </main>

  
    </div>
  )
}

export default Home
