import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen min-w-full flex flex-row place-items-center justify-center bg-gray-100">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center align-middle p-10 rounded-lg border-2 border-gray-200 shadow-sm bg-white">
        <Image 
          src="/images/profile.jpeg"
          height="250"
          width="250"
        />
        <div className="p-5 max-w-lg">
          <p className="text-5xl text-gray-600">Saravanan Ramupillai</p>
          <p className="text-2xl text-gray-400 mt-3">
            Lead Engineer <a href="https://kissflow.com" rel="noref" className="text-blue-500">@Kissflow</a>
          </p>
          <p className="text-xl text-gray-400 mt-3">I have a 7 years of solid working knowledge on building products using various JS technologies.
          Currently building <a href="https://kissflow.com/project" rel="norel" className="text-blue-500">Kissflow Projects.</a>
          </p>
          <p className="flex flex-wrap mt-3">
            <img 
              alt="LinkedIn"
              src="/images/linkedin.svg"
              height="30"
              width="30"
            />
            <img 
              alt="medium"
              src="/images/medium.svg"
              height="30"
              width="30"
            />
            <img 
              alt="instagram"
              src="/images/instagram.svg"
              height="30"
              width="30"
            />
            <img 
              alt="github"
              src="/images/github.svg"
              height="30"
              width="30"
            />
          </p>
        </div>
      </div>
    </div>
  )
}