// app/editor/page.tsx
import Head from 'next/head';

const Editor = () => {
  return (
    <div>
      <Head>
        <title>Mango Note Editor</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Edit Your Note
        </h1>
      </main>
    </div>
  );
}

export default Editor;
