import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Mango</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Welcome to Mango
        </h1>
      </main>
    </div>
  );
}

export default Home;
