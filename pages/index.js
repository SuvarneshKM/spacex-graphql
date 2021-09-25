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
        <div class="bg-gradient-to-b from-gray-200 to-gray-400 bg-fixed h-full">
          <div class="flex-wrap container mx-auto p-4">
            <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
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
          details
          links {
            video_link
            flickr_images
          }
          rocket {
            rocket_name
          }
          ships {
            name
            home_port
            image
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