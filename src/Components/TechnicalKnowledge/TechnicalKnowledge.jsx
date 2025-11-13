import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiBook, FiZap, FiLayers, FiTarget, FiPhone } from 'react-icons/fi';
import Title from '../Title/Title';

const TechnicalKnowledge = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const jointConfigurations = [
    {
      name: "Butt Joint",
      description: "A connection between the ends or edges of two parts making an angle to one another of 135-180° inclusive in the region of the joint."
    },
    {
      name: "T Joint",
      description: "A connection between the end or edge of one part and the face of the other part, the parts making an angle to one another of more than 5 up to and including 90° in the region of the joint."
    },
    {
      name: "Corner Joint",
      description: "A connection between the ends or edges of two parts making an angle to one another of more than 30 but less than 135° in the region of the joint."
    },
    {
      name: "Edge Joint",
      description: "A connection between the edges of two parts making an angle to one another of 0 to 30° inclusive in the region of the joint."
    },
    {
      name: "Cruciform Joint",
      description: "A connection in which two flat plates or two bars are welded to another flat plate at right angles and on the same axis."
    },
    {
      name: "Lap Joint",
      description: "A connection between two overlapping parts making an angle to one another of 0-5° inclusive in the region of the weld or welds."
    }
  ];

  const weldTypes = [
    {
      name: "Slot Weld",
      description: "Joint between two overlapping components made by depositing a fillet weld around the periphery of a hole in one component so as to join it to the surface of the other component exposed through the hole."
    },
    {
      name: "Plug Weld",
      description: "Weld made by filling a hole in one component of a workpiece with filler metal so as to join it to the surface of an overlapping component exposed through the hole (the hole can be circular or oval)."
    },
    {
      name: "Full Penetration Weld",
      description: "Welded joint where the weld metal fully penetrates the joint with complete root fusion. In US the preferred term is complete joint penetration weld (CJP, see AWS D1.1)."
    },
    {
      name: "Partial Penetration Weld",
      description: "Weld in which the fusion penetration is intentionally less than full penetration. In the US the preferred term is partial joint penetration weld (PJP)."
    }
  ];

  const weldFeatures = [
    { term: "Parent Metal", definition: "Metal to be joined or surfaced by welding, braze welding or brazing." },
    { term: "Filler Metal", definition: "Metal added during welding, braze welding, brazing or surfacing." },
    { term: "Weld Metal", definition: "All metal melted during the making of a weld and retained in the weld." },
    { term: "Heat Affected Zone (HAZ)", definition: "The part of the parent metal metallurgically affected by the weld or thermal cutting heat, but not melted." },
    { term: "Fusion Line", definition: "Boundary between the weld metal and the HAZ in a fusion weld. This is a non-standard term for weld junction." },
    { term: "Weld Zone", definition: "Zone containing the weld metal and the HAZ." },
    { term: "Weld Face", definition: "The surface of a fusion weld exposed on the side from which the weld has been made." },
    { term: "Weld Root", definition: "Zone on the side of the first run furthest from the welder." },
    { term: "Weld Toe", definition: "Boundary between a weld face and the parent metal or between runs. This is a very important feature of a weld since toes are points of high stress concentration and often they are initiation points for different types of cracks (eg fatigue cracks, cold cracks)." },
    { term: "Excess Weld Metal", definition: "Weld metal lying outside the plane joining the toes. Other non-standard terms for this feature: reinforcement, overfill." },
    { term: "Run (pass)", definition: "The metal melted or deposited during one passage of an electrode, torch or blowpipe." },
    { term: "Layer", definition: "Stratum of weld metal consisting of one or more runs." }
  ];

  const weldingProcesses = [
    {
      category: "Arc",
      processes: [
        "Metal Inert Gas (MIG) Welding",
        "Stick Welding",
        "Tungsten Inert Gas (TIG) Welding / Gas Tungsten Arc Welding (GTAW)",
        "Gas Welding",
        "Metal Active Gas (MAG) Welding",
        "Flux Cored Arc Welding (FCAW)",
        "Gas Metal Arc Welding (GMAW)",
        "Submerged Arc Welding (SAW)",
        "Shielded Metal Arc Welding (SMAW)",
        "Plasma Arc Welding"
      ],
      description: "This category includes a number of common manual, semi-automatic and automatic processes. These techniques usually use a filler material and are primarily used for joining metals including stainless steel, aluminium, nickel and copper alloys, cobalt and titanium. Arc welding processes are widely used across industries such as oil and gas, power, aerospace, automotive, and more.",
      icon: "⚡"
    },
    {
      category: "Friction",
      processes: [
        "Friction Stir Welding (FSW)",
        "Friction Stir Spot Welding (FSSW)",
        "Linear Friction Welding (LFW)",
        "Rotary Friction Welding (RFW)"
      ],
      description: "Friction welding techniques join materials using mechanical friction. The mechanical friction generates heat which softens the materials which mix to create a bond as they cool. Friction welding doesn't require the use of filler metals, flux or shielding gas. Friction is frequently used in aerospace applications as it is ideal for joining otherwise 'non-weldable' light-weight aluminium alloys.",
      icon: "🔄"
    },
    {
      category: "Electron Beam",
      processes: ["Electron Beam Welding (EBW)"],
      description: "This fusion joining process uses a beam of high velocity electrons to join materials. The kinetic energy of the electrons transforms into heat upon impact with the workpieces causing the materials to melt together. Electron beam welding (EBW) is performed in a vacuum (with the use of a vacuum chamber) to prevent the beam from dissipating. There are many common applications for EBW, as can be used to join thick sections. This means it can be applied across a number of industries from aerospace to nuclear power and automotive to rail.",
      icon: "🔬"
    },
    {
      category: "Laser",
      processes: ["Laser Beam Welding"],
      description: "Used to join thermoplastics or pieces of metal, this process uses a laser to provide a concentrated heat ideal for barrow, deep welds and high joining rates. Being easily automated, the high welding speed at which this process can be performed makes it perfect for high volume applications, such as within the automotive industry. Laser beam welding can be performed in air rather than in a vacuum such as with electron beam joining.",
      icon: "💡"
    },
    {
      category: "Resistance",
      processes: [
        "Resistance Spot Welding",
        "Resistance Seam Welding"
      ],
      description: "This is a fast process which is commonly used in the automotive industry. Spot welding uses heat delivered between two electrodes which is applied to a small area as the workpieces are clamped together. Seam welding is similar to spot welding except it replaces the electrodes with rotating wheels to deliver a continuous leak-free weld.",
      icon: "⚙️"
    }
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
            Technical Knowledge: Welding Fundamentals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to understanding welding processes, joint configurations, and techniques
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['overview', 'how-it-works', 'joints', 'processes', 'features'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 capitalize ${
                activeSection === section
                  ? 'bg-red-800 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {section.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                  <FiBook className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What is Welding?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welding is a fabrication process whereby two or more parts are fused together by means of heat, pressure or both forming a join as the parts cool. Welding is usually used on metals and thermoplastics but can also be used on wood. The completed welded joint may be referred to as a weldment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Some materials require the use of specific processes and techniques. A number are considered 'unweldable,' a term not usually found in dictionaries but useful and descriptive in engineering.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Terms:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Parent Material:</strong> The parts that are joined are known as a parent material.</li>
                  <li><strong>Filler/Consumable:</strong> The material added to help form the join is called filler or consumable.</li>
                  <li><strong>Homogeneous Weld:</strong> Consumables are usually chosen to be similar in composition to the parent material, thus forming a homogenous weld.</li>
                  <li><strong>Heterogeneous Weld:</strong> There are occasions, such as when welding brittle cast irons, when a filler with a very different composition and, therefore, properties is used. These welds are called heterogeneous.</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* How It Works Section */}
        {activeSection === 'how-it-works' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Process" title="How Does Welding Work?" />
            
            <div className="space-y-8">
              {/* Joining Metals */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center">
                    <FiZap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Joining Metals</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  As opposed to brazing and soldering, which do not melt the base metal, welding is a high heat process which melts the base material. Typically with the addition of a filler material.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Heat at a high temperature causes a weld pool of molten material which cools to form the join, which can be stronger than the parent metal. Pressure can also be used to produce a weld, either alongside the heat or by itself.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  It can also use a shielding gas to protect the melted and filler metals from becoming contaminated or oxidised.
                </p>
              </div>

              {/* Joining Plastics */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Joining Plastics</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Plastics welding also uses heat to join the materials (although not in the case of solvent welding) and is achieved in three stages.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Firstly, the surfaces are prepared before heat and pressure is applied</li>
                  <li>Finally, the materials are allowed to cool to create fusion</li>
                </ol>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Joining methods for plastics can be separated into external or internal heating methods, depending on the exact process used.
                </p>
              </div>

              {/* Joining Wood */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Joining Wood</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wood welding uses heat generated from friction to join the materials. The materials to be joined are subjected to a great deal of pressure before a linear friction movement creates heat to bond the workpieces together. This is a fast process which allows wood to be joined without adhesives or nails in a matter of seconds.
                </p>
              </div>

              {/* Energy Sources */}
              <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Energy Sources</h3>
                <p className="text-lg leading-relaxed mb-4 opacity-95">
                  Different processes are determined by the energy source used, with a variety of different techniques available. Until the end of the 19th century, forge welding was the only method used, but later processes, such as arc welding, have since been developed.
                </p>
                <p className="text-lg leading-relaxed opacity-95">
                  Modern methods use gas flame, electric arc, lasers, electron beam, friction and even ultrasound to join materials. Care needs to be taken with these processes as they can lead to burns, electric shock, damaged vision, exposure to radiation or inhaling of poisonous welding fumes and gases.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Joints Section */}
        {activeSection === 'joints' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Configurations" title="Common Joint Configurations" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
              {jointConfigurations.map((joint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{joint.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{joint.description}</p>
                </motion.div>
              ))}
            </div>

            <Title subTitle="Types" title="Types of Welding Joints" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {weldTypes.map((weld, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-800"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{weld.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{weld.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Processes Section */}
        {activeSection === 'processes' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Methods" title="What are the Different Types of Welding and What are They Used for?" />
            
            <div className="space-y-8 mt-12">
              {weldingProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{process.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{process.category} Welding</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {process.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Processes in this category:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {process.processes.map((proc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-800 mt-1">•</span>
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Terminology" title="Features of Completed Welds" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {weldFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.term}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.definition}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Note on Excess Weld Metal:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The term reinforcement, although commonly used, is inappropriate because any excess weld metal over and above the surface of the parent metal does not make the joint stronger. In fact, the thickness considered when designing a welded component is the design throat thickness, which does not include the excess weld metal.
              </p>
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-800 to-red-900 rounded-2xl shadow-xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Explore our research programs, facilities, and training opportunities to deepen your understanding of welding technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/why-phd"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
            >
              <FiTarget className="w-5 h-5" />
              PhD Programs
            </NavLink>
            <NavLink
              to="/facility"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
            >
              <FiLayers className="w-5 h-5" />
              Facilities
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
            >
              <FiPhone className="w-5 h-5" />
              Contact Us
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalKnowledge;

