import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FiAlertCircle, FiSearch, FiPhone, FiX } from 'react-icons/fi';
import Title from '../Title/Title';

const WeldingDefects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('defects');
  const [selectedDefect, setSelectedDefect] = useState(null);

  const defects = [
    {
      id: 1,
      name: "Weld Crack",
      description: "Cracks are one of the most serious welding defects, leading to major weld failures. They occur due to localized ruptures caused by contraction, cooling stresses, and grain development in the heat-affected zone (HAZ). Cracks may be longitudinal, transverse, crater, radiating, or branching.",
      types: [
        {
          name: "Hot Cracks",
          desc: "Form during solidification when the temperature exceeds 10,000°C, caused by impurities, carbon content, or heat flow disruption."
        },
        {
          name: "Cold Cracks",
          desc: "Appear after solidification, often days later, caused by high hydrogen content, low preheat, or residual stress."
        }
      ],
      causes: [
        "Poor ductility or contamination of base metals",
        "High welding speed with low current",
        "High sulfur or carbon content",
        "Lack of preheating",
        "Excessive joint restraint",
        "Use of hydrogen shielding gas on ferrous metals"
      ],
      prevention: [
        "Preheat base metal and control cooling rate",
        "Use compatible filler and clean materials",
        "Avoid hydrogen shielding gases",
        "Maintain proper depth-to-width ratio of weld bead"
      ]
    },
    {
      id: 2,
      name: "Crater",
      description: "Craters form at the end of weld beads when the crater isn't properly filled before the arc is broken, resulting in cracks due to uneven cooling.",
      causes: [
        "Incomplete crater filling",
        "Improper torch or electrode angle",
        "Abrupt arc termination",
        "Inadequate reinforcement"
      ],
      prevention: [
        "Properly fill the crater before breaking the arc",
        "Use gradual current reduction",
        "Maintain correct torch angle (10–15° for wire welding, 20–30° for stick welding)",
        "Use smaller electrodes and correct technique"
      ]
    },
    {
      id: 3,
      name: "Undercut",
      description: "An undercut is a groove melted into the base metal along the weld toe, reducing thickness and causing fatigue failure.",
      causes: [
        "High voltage or fast welding speed",
        "Incorrect electrode angle or size",
        "Wrong filler metal or shielding gas"
      ],
      prevention: [
        "Lower arc voltage (15–30 V) and reduce travel speed",
        "Maintain electrode angle between 30–45°",
        "Use proper filler and shielding gas",
        "Weld in flat positions"
      ]
    },
    {
      id: 4,
      name: "Porosity",
      description: "Porosity occurs when gas bubbles (air, hydrogen, CO₂, or steam) become trapped in the weld metal, forming cavities that reduce strength.",
      types: [
        { name: "Gas Porosity", desc: "Small spherical cavities" },
        { name: "Wormholes", desc: "Elongated or tubular cavities" },
        { name: "Surface Porosity", desc: "Cavities breaking the weld surface" }
      ],
      causes: [
        "Contaminated or corroded electrodes",
        "Grease, oil, or rust on metal surface",
        "Improper shielding gas or excessive voltage"
      ],
      prevention: [
        "Clean work surfaces thoroughly",
        "Use pure shielding gas (22–30 CFH flow)",
        "Adjust travel speed (MIG: 14–19 IPM; TIG: 4–6 IPM)",
        "Preheat metals and use proper welding current"
      ]
    },
    {
      id: 5,
      name: "Spatter",
      description: "Spatter consists of molten metal droplets expelled from the weld pool that adhere to nearby surfaces, causing rough appearance or damage.",
      causes: [
        "Low voltage and high amperage",
        "Incorrect gas mixture or arc length",
        "Contaminated surface"
      ],
      prevention: [
        "Correct polarity and parameters",
        "Shorten arc length",
        "Use clean metal surfaces and suitable gas"
      ]
    },
    {
      id: 6,
      name: "Over-roll / Overlap",
      description: "Occurs when molten filler flows over the base metal without fusion, forming a lip at the weld toe.",
      causes: [
        "Incorrect technique or torch angle",
        "Oversized electrode",
        "High current or slow travel speed"
      ],
      prevention: [
        "Maintain proper electrode and torch angle",
        "Use smaller electrodes",
        "Reduce current and increase travel speed",
        "Weld in flat position"
      ]
    },
    {
      id: 7,
      name: "Lamellar Tearing",
      description: "Appears as terraced cracks parallel to the weld fusion line, common in rolled steel plates.",
      causes: [
        "Poor material selection",
        "High through-thickness stress"
      ],
      prevention: [
        "Select high-quality materials",
        "Adjust weld orientation and joint design"
      ]
    },
    {
      id: 8,
      name: "Slag Inclusion",
      description: "Occurs when flux residues become trapped in the weld, leading to reduced toughness and strength.",
      causes: [
        "Improper electrode angle or low current",
        "Poor cleaning of previous weld layers",
        "Fast welding speed"
      ],
      prevention: [
        "Clean previous layers thoroughly",
        "Increase current density",
        "Adjust angle and travel rate",
        "Maintain adequate joint spacing"
      ]
    },
    {
      id: 9,
      name: "Incomplete Fusion",
      description: "Occurs when weld metal fails to fuse with the base metal or adjacent weld layers.",
      causes: [
        "Low heat input",
        "Contamination",
        "Incorrect electrode diameter or angle",
        "Fast travel speed"
      ],
      prevention: [
        "Increase heat input",
        "Clean metal before welding",
        "Use correct electrode size",
        "Optimize speed and joint geometry"
      ]
    },
    {
      id: 10,
      name: "Incomplete Penetration",
      description: "Occurs when the weld metal does not extend through the joint thickness, weakening the weld.",
      causes: [
        "Improper joint alignment",
        "Low amperage",
        "Narrow grooves or excessive spacing"
      ],
      prevention: [
        "Proper joint geometry and alignment",
        "Use correct current and travel speed",
        "Ensure accurate electrode positioning"
      ]
    },
    {
      id: 11,
      name: "Distortion",
      description: "Distortion or warpage occurs due to uneven heating and cooling, especially in thin plates.",
      causes: [
        "Improper temperature gradients",
        "High residual stresses",
        "Excess weld passes"
      ],
      prevention: [
        "Control heat input and gradient",
        "Use balanced weld sequencing",
        "Maintain optimal travel speed"
      ]
    },
    {
      id: 12,
      name: "Burn Through",
      description: "Occurs when excessive heat causes holes in thin metals during welding.",
      causes: [
        "High current or slow movement",
        "Large gaps between pieces",
        "Incorrect wire size"
      ],
      prevention: [
        "Lower current",
        "Maintain tight joint gaps",
        "Use correct wire and travel speed"
      ]
    },
    {
      id: 13,
      name: "Mechanical Damage",
      description: "Dents or surface defects resulting from poor tool handling.",
      causes: [
        "Mishandling of electrode holder",
        "Excessive chipping or grinding",
        "Arc engagement issues"
      ],
      prevention: [
        "Handle tools carefully",
        "Avoid over-hammering",
        "Ensure proper arc initiation"
      ]
    },
    {
      id: 14,
      name: "Excess Reinforcement",
      description: "Excess filler deposition creates uneven welds and stress points.",
      causes: [
        "Irregular travel speed or voltage",
        "Excess flux or filler",
        "Poor joint alignment"
      ],
      prevention: [
        "Maintain consistent speed",
        "Optimize amperage and voltage",
        "Align workpieces properly"
      ]
    },
    {
      id: 15,
      name: "Whiskers",
      description: "Small wire protrusions on the weld root side, common in MIG welding.",
      causes: [
        "Excess feed speed",
        "High travel speed",
        "Electrode position ahead of weld pool"
      ],
      prevention: [
        "Reduce electrode feed rate",
        "Maintain optimal travel speed"
      ]
    },
    {
      id: 16,
      name: "Misalignment",
      description: "Occurs when the filler or base metal surfaces do not align correctly, reducing weld strength.",
      causes: [
        "Rapid or uneven welding",
        "Improper wire placement",
        "Incorrect technique"
      ],
      prevention: [
        "Maintain steady, controlled welding",
        "Check alignment before welding",
        "Keep welding wire correctly positioned"
      ]
    }
  ];

  const ndtMethods = [
    {
      name: "Magnetic Particle Inspection",
      description: "This is one of the best methods of detecting surface cracks and weld defects that are too small to be detected by visual inspection. It is also an excellent choice for subsurface discontinuities in a weld. The process of electromagnetic particle inspection involves magnetizing the workpiece. It then uses a fluorescent solution to highlight the defects for proper documentation."
    },
    {
      name: "Ultrasonic Inspection",
      description: "This inspection method uses high-frequency sound waves to check the interior and exterior of welded metals. It not only discovers defects and discontinuities in the weld but also measures the exact position of the defects. The instrument transmits high-frequency beams into the metal. Once it detects a weld defect, it bounces back to the ultrasonic welding machine to give a clear picture of a potential defect and its location. This allows for quick and easy fixing of the fault."
    },
    {
      name: "Radiographic Inspection",
      description: "This technique is adaptable to various situations. It uses gamma rays or x-rays to inspect the interior of welds. The setup is simple and fast, presenting a vivid picture of defects on the screen of the X-ray machine."
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
            Understanding Welding Defects: Causes, Types, and Prevention
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welding is one of the most efficient methods for joining multiple metal parts into a single, strong structure. However, even minor inconsistencies in technique or parameters can lead to welding defects that weaken the joint, compromise safety, or lead to complete product failure.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Welding Defects?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welding defects are irregularities or imperfections in a weld that affect its strength, integrity, or appearance. According to ISO 6520, any irregularity that compromises the performance or reliability of the weld is classified as a defect, whereas minor imperfections that do not affect function are known as discontinuities (refer to ISO 5817 and 10042 for acceptable limits).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            These defects can occur both on the surface (external defects) and within the metal (internal defects), often due to improper welding parameters, contaminated materials, or incorrect techniques. Understanding their origins is key to prevention and quality assurance.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex gap-2">
            <button
              onClick={() => { setSelectedCategory('defects'); setSelectedDefect(null); }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === 'defects'
                  ? 'bg-red-800 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Types of Defects
            </button>
            <button
              onClick={() => { setSelectedCategory('ndt'); setSelectedDefect(null); }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === 'ndt'
                  ? 'bg-red-800 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Detection Methods
            </button>
          </div>
        </div>

        {/* Defects Section */}
        {selectedCategory === 'defects' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Common Defects" title="Types of Welding Defects" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {defects.map((defect) => (
                <motion.div
                  key={defect.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedDefect(defect)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer border-l-4 border-red-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <FiAlertCircle className="w-5 h-5 text-red-800" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        #{defect.id}. {defect.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                    {defect.description}
                  </p>
                  <button className="text-red-800 font-semibold hover:underline">
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* NDT Methods Section */}
        {selectedCategory === 'ndt' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title subTitle="Non-Destructive Testing" title="How to Detect Invisible Welding Defects" />
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Since welding involves the fusion of two or more metals, it may be difficult to detect internal welding defects using visual inspection. In this case, non-destructive testing (NDT) is a valuable option as it will show you the integrity of your weld. This process will keep the operations running smoothly without damaging any tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {ndtMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-red-800"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <FiSearch className="w-6 h-6 text-red-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {method.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Defect Detail Modal */}
        {selectedDefect && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDefect(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-red-800 text-white p-6 flex justify-between items-center rounded-t-2xl">
                <h2 className="text-2xl font-bold">#{selectedDefect.id}. {selectedDefect.name}</h2>
                <button
                  onClick={() => setSelectedDefect(null)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedDefect.description}
                </p>

                {selectedDefect.types && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Types:</h3>
                    <div className="space-y-3">
                      {selectedDefect.types.map((type, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-800">
                          <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                          <p className="text-gray-700">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Causes:</h3>
                    <ul className="space-y-2">
                      {selectedDefect.causes.map((cause, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-800 mt-1">•</span>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Prevention:</h3>
                    <ul className="space-y-2">
                      {selectedDefect.prevention.map((prev, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{prev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learn More About Welding Quality
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in learning more about welding defects and quality control? Contact our research team for expert consultation and training programs.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FiPhone className="w-5 h-5" />
            Contact Us
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default WeldingDefects;
