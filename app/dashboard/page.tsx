// app/dashboard/page.tsx
import Head from 'next/head';

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Mango Dashboard</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Your Notes Dashboard
        </h1>
      </main>
    </div>
  );
}

export default Dashboard;
