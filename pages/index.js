import Head from 'next/head'
import Launches from '../components/Launches'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ launches }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SpaceX Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col space-y-4 items-center w-full flex-1 px-20 text-center">
        <div className="text-6xl font-bold inline-flex space-x-2 cursor-default">
          <h1>SpaceX{' '}</h1>
          <h1 className="text-red-600 hover:underline">
            Launches
          </h1>
        </div>
        <div class="flex items-center bg-indigo-100 w-screen min-h-screen" style={{ "fontFamily": "Muli sans-serif " }}>
          <div class="container ml-auto mr-auto flex flex-wrap items-start">
            <div class="flex flex-wrap space-x-4 space-y-4">
              {launches.map(launch => {
                return (
                  <Launches launch={launch} />
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          links {
            video_link
          }
          rocket {
            rocket_name
          }
        }
      }
      
      `
  })
  return {
    props: {
      launches: data.launchesPast
    },
  }
}