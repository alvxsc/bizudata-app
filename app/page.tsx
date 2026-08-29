import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-8 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-row items-center justify-center gap-6 py-6 px-40 bg-white rounded-xl shadow-md p-8">
            <a
              href="/blog"
              className="text-blue-500 hover:underline dark:text-green-400"
            >
              Blog
            </a>
            <a
              href="/datasets"
              className="text-blue-500 hover:underline dark:text-green-400"
            >
              Datasets
            </a>
            <a
              href="/sobre"
              className="text-blue-500 hover:underline dark:text-green-400"
            >
              Sobre
            </a>
        </div>
      </main>
    </div>
  );
}
