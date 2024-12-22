"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  return (
    <div className="text-center h-screen">
      <div className="h-screen">
        <motion.h1
          animate={{ scale: 1 }}
          initial={false}
          className="text-4xl font-light"
        >
          {" "}
          Hello world
        </motion.h1>
        <motion.button
          onClick={() => setShow((prev) => !prev)}
          whileDrag={{ scale: 2 }}
          onHoverStart={() => console.log("Hoverd")}
          onHoverEnd={() => console.log("Out")}
          className="rounded-full px-4 py-2 border-2 border-white text-xl mt-5"
        >
          Create your pizza
        </motion.button>
        <div className="flex justify-center my-20">
          {show ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white text-black p-2 shadow rounded-md w-64"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              officiis rerum porro quae reiciendis illo laboriosam modi
              praesentium, quam cum neque magni vel! Omnis amet officia nisi
              accusamus, deserunt hic!
            </motion.div>
          ) : null}
        </div>
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
        className="py-10"
      >
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et,
          quae vero facilis ratione quas voluptatem consequatur eius, harum at
          cum impedit quis enim sint accusantium voluptate veritatis esse
          delectus!
        </div>
      </motion.div>

      <div className="h-96 py-10 bg-blue-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        debitis quasi magni maxime corrupti dolorem ipsa inventore dolor,
        accusamus sint facilis esse at sequi reiciendis autem qui cum. Sunt,
        assumenda. Delectus necessitatibus cumque earum aperiam nostrum nesciunt
        sequi qui? Quod ea, blanditiis dolores numquam veritatis illum assumenda
        quae delectus sequi?
      </div>
    </div>
  );
}
