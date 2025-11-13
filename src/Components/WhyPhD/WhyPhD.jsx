import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FiAward, FiUsers, FiLayers, FiBriefcase, FiTarget, FiPhone } from 'react-icons/fi';
import Title from '../Title/Title';

const WhyPhD = () => {
  const { t } = useTranslation();

  const focusAreas = [
    "Advanced welding process modeling and optimization",
    "Dissimilar metal joining and metallurgical compatibility",
    "Welding consumable design and flux innovation",
    "Hybrid and plasma-enhanced processes",
    "Additive and robotic welding systems",
    "Sustainable manufacturing and automation"
  ];

  const facilities = [
    "3-Axis Welding Manipulator for automated precision welding and 3D metal printing",
    "Advanced GMAW and SAW torch systems (patented) for process optimization",
    "Robotic Welding Stations and Plasma Cutting Units",
    "Consumable Development Unit for alloy and flux innovation"
  ];

  const mentors = [
    "Dr. Sunil Pandey",
    "Dr. Manoj Kumar",
    "Dr. Deepak Unune"
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-36 pb-16 md:pl-0 md:pr-0 pl-4 pr-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Why Pursue a Ph.D. at LNMIIT?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a research-driven ecosystem where innovation meets real-world impact
          </p>
        </motion.div>

        {/* A Research-Driven Ecosystem Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiAward className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">A Research-Driven Ecosystem</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At LNMIIT, research is not just an academic pursuit—it's a mission to create real-world impact. Our doctoral programs emphasize interdisciplinary exploration, experimental validation, and innovation-driven problem solving. From fundamental investigations in welding processes to applied research in automation and material development, Ph.D. scholars at LNMIIT are empowered to push boundaries and build technologies that matter.
            </p>
          </motion.div>
        </section>

        {/* World-Class Mentorship Section */}
        <section className="mb-20">
          <Title subTitle="Mentorship" title="World-Class Mentorship" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Expert Faculty Guidance</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our faculty members are not only experienced researchers but active contributors to global engineering advancements. Under the guidance of distinguished mentors such as <strong>{mentors.join(', ')}</strong>, scholars gain access to expertise spanning welding metallurgy, hybrid machining, additive manufacturing, consumable design, and process optimization. Each Ph.D. candidate benefits from close mentorship, ensuring a balance of academic rigor and research independence.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-800">
              <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>• Welding Metallurgy</li>
                <li>• Hybrid Machining</li>
                <li>• Additive Manufacturing</li>
                <li>• Consumable Design</li>
                <li>• Process Optimization</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Advanced Research Infrastructure Section */}
        <section className="mb-20">
          <Title subTitle="Infrastructure" title="Advanced Research Infrastructure" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiLayers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">State-of-the-Art Facilities</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              LNMIIT offers state-of-the-art facilities that support high-precision experimentation and industrial-scale testing. Our Welding Research Laboratory houses advanced equipment that enables scholars to conduct cutting-edge research—from microstructural studies to prototype fabrication—within a single integrated environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-200"
                >
                  <p className="text-gray-700">{facility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Collaboration and Industry Integration Section */}
        <section className="mb-20">
          <Title subTitle="Industry" title="Collaboration and Industry Integration" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl shadow-lg p-8 md:p-12 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <FiBriefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Bridging Academia and Industry</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-95">
              LNMIIT actively bridges academia and industry through joint research projects, consultancy programs, and innovation partnerships. Ph.D. scholars often engage in live industrial problem-solving, developing solutions for real manufacturing challenges in collaboration with leading sectors such as <strong>automotive, defense, aerospace, energy, and construction</strong>.
            </p>
            <p className="text-lg leading-relaxed opacity-95">
              These collaborations not only enhance research relevance but also open pathways to patents, publications, and product development.
            </p>
          </motion.div>
        </section>

        {/* Focus Areas Section */}
        <section className="mb-20">
          <Title subTitle="Research" title="Focus Areas for Ph.D. Research" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our current and emerging research domains include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-5 border-l-4 border-red-800 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-800 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Through these focus areas, LNMIIT scholars are contributing to the national and global drive toward smarter, safer, and more efficient manufacturing systems.
            </p>
          </motion.div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Outcomes-Oriented Approach</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our outcomes-oriented approach ensures that your Ph.D. journey at LNMIIT prepares you not just for academia—but for leadership roles in research, innovation, and advanced manufacturing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Welding and manufacturing are at the heart of industrial progress, and LNMIIT is shaping the next generation of experts who will redefine their future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By pursuing your Ph.D. with us, you become part of a community driven by curiosity, collaboration, and commitment to engineering excellence.
            </p>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl shadow-xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Forge Your Research. Build Your Legacy.</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Create the future—at LNMIIT.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FiPhone className="w-5 h-5" />
            Contact Us
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyPhD;
