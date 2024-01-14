import Blank from "@/components/Blank";
import Container from "@/components/Container";
import Background from "@/components/pages/index/Background";
import ContentList from "@/components/pages/index/ContentList";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative p-4 max-w-5xl m-auto">
      <Background />

      {/* hero */}

      <Blank height={"1rem"}/>

      <Container>
        <div className="py-6 flex justify-between items-center">
          <h1 className="text-4xl">
            Hello, <br />
            I&#39;m <span className="text-personal">keepgo</span>, <br/>
            software engineer
          </h1>

          <div>
            <Image
              className="rounded-full shadow-2xl hover:scale-[1.05] duration-200"
              src="/memoji/laptop.png"
              alt="hero image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </Container>

      <Blank height={"4rem"}/>

      <Container theme="blank">
        <h2 className="font-extrabold text-xl">
          <span className="text-gray-400">In this Blog,</span> <br/>
          You can enjoy
        </h2>

        <ContentList />
      </Container>

      <Blank height={"4rem"}/>

      <Container>
        {/*  */}
      </Container>

    </div>
  );
};

export default page;
