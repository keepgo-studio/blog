'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[999]">
      <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold text-red-500 mb-4">404</p>
  
          <Image className="shadow-md rounded-full" src='/memoji/sad.png' alt='memoji sad image' width={150} height={150}/>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <button
              onClick={() => router.back()}
              className="text-sm font-semibold text-primary-gray"
            >
              go back <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
