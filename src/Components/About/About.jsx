import React from "react";
import aboutimg from "../../assets/gal2.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 md:p-4 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full"
      >
        {/* Image */}
        <img
          src={aboutimg}
          alt="About Welding"
          className="w-full md:w-[400px] h-[400px] rounded-2xl object-cover shadow-md"
        />

        {/* Text Content */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            About Welding Research at LNMIIT
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Welcome to Welding Research at LNMIIT! We're a passionate team of
            researchers and educators dedicated to advancing welding technology
            through innovation and hands-on exploration.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our mission is to push beyond traditional welding practices by
            experimenting with cutting-edge techniques, materials, and
            processes. We collaborate with industries and academics to solve
            real-world challenges and pioneer next-gen solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through our curriculum and workshops, we empower students with
            practical skills and critical insights. Join us in shaping the
            future of welding technology—one spark at a time.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
