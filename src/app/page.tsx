import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-between bg-gradient-to-br from-dark-cyan via-dark-blue to-dark-purple px-24 py-28">
      <div className="h-full w-full rounded-2xl p-0.5 bg-gradient-to-br from-light-purple to-light-cyan">
        <div className="h-full w-full flex flex-row bg-black rounded-2xl">
          <div className="h-full w-4/6"></div>
          <div className="h-full w-3/6 border-l border-l-light-gray"></div>
        </div>
      </div>
    </main>
  );
}
