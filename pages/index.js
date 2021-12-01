import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/sidebar'
import Player from '../components/Player'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar/>
        <Center/>
      {/* center */}
      </main>
      <div className="sticky bottom-0">
        <Player/>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session  = await getSession(context);
  return {
    props: {
      session,
    },
  };
}