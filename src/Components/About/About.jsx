import React from "react";
import aboutimg from "../../assets/gal2.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 md:p-auto pt-32 md:pl-0 md:pr-0 pl-4 pr-4 pb-10">
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
          className="w-full md:w-[400px] h-[600px] rounded-2xl object-cover shadow-md"
        />

        {/* Text Content */}
        <div className="text-gray-800 text-[18px]">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About Welding Research at <span className="text-[#212ea0]">LNMIIT</span>
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {/* Welcome to Welding Research at LNMIIT! We're a passionate team of
            researchers and educators dedicated to advancing welding technology
            through innovation and hands-on exploration. */}
            Welding technology is the silent force behind a nation’s growth and
            global stature. It powers infrastructure, fortifies defence systems,
            and fuels industrial advancement—making it indispensable for any
            country aspiring to rise as a world power. At LNMIIT, we recognize
            this strategic importance and are committed to advancing the
            frontiers of welding science and engineering.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {/* Our mission is to push beyond traditional welding practices by
            experimenting with cutting-edge techniques, materials, and
            processes. We collaborate with industries and academics to solve
            real-world challenges and pioneer next-gen solutions. */}
            Our Welding Research and Facilities are designed to meet world-class
            standards, guided by internationally renowned experts in the field.
            From high-precision military applications to the construction of
            nuclear power plants, bridges, and cutting-edge manufacturing
            systems, our work empowers sectors that define national strength and
            economic vitality.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {/* Through our curriculum and workshops, we empower students with
            practical skills and critical insights. Join us in shaping the
            future of welding technology—one spark at a time. */}
            As industries increasingly demand automated, high-performance, and
            sustainable welding solutions, LNMIIT stands at the forefront,
            bridging the gap between academia and industry. We offer a robust
            ecosystem that nurtures skilled welding engineers, promotes
            innovative research, and delivers industrial-grade solutions.
            Whether it's robotic welding, laser-based techniques, or advanced
            material joining, our contributions are shaping the next generation
            of technological capabilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This website is a gateway for industry leaders, researchers, and
            policy makers to engage with LNMIIT’s expertise in welding
            technology. It showcases our commitment to solving national
            challenges and supporting economic progress through excellence in
            welding research. LNMIIT is not just developing welders; we are
            forging the future of India’s industrial and strategic strength.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
