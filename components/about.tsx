"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! I'm a{" "}
        <span className="font-bold">
          Computer Science and Engineering graduate
        </span>{" "}
        with a bit of an adventurous streak. While I've got a solid foundation
        in web development with{" "}
        <span className="italic">NextJS, React, Python, and MySQL</span>, I'm
        not one to be confined to just one stack. In my free time, I love diving
        into different technologies and building side projects – it's like a
        developer playground!
      </p>
      <p className="mb-3">
        Speaking of playgrounds, I'm actually looking to expand mine further.
        I've dabbled in <span className="font-bold">Web Development</span>,{" "}
        <span className="font-bold">Infrastructure</span>,{" "}
        <span className="font-bold">ETL</span>, and even some{" "}
        <span className="font-bold">DevOps</span> , and I'm fascinated by the
        way it all connects. My ideal role would be one where I can grow into a
        well-rounded developer, comfortable building both the front-end and the
        behind-the-scenes magic that makes things tick.
      </p>
      <p className="mb-8">
        So, if you're looking for someone who's eager to learn and passionate
        about building cool stuff, let's chat! I'm always up for a good
        challenge.
      </p>
    </motion.section>
  );
}
