import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// For a real implementation, you would import these images
// These are placeholders to represent the imports from your original code
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpg'
import car7 from '../../assets/car7.jpg'
import career1 from '../../assets/career1.jpeg'
export default function Career() {
  const { t } = useTranslation();
  const careerData = [
    {
      id: 1,
      title: t('career.welder'),
      description: t('career.welderDesc'),
      image: car1
    },
    {
      id: 2,
      title: t('career.inspector'),
      description: t('career.inspectorDesc'),
      image: car2
    },
    {
      id: 3,
      title: t('career.pipeWelder'),
      description: t('career.pipeWelderDesc'),
      image: car3
    },
    {
      id: 4,
      title: t('career.engineer'),
      description: t('career.engineerDesc'),
      image: car4
    },
    {
      id: 5,
      title: t('career.robotics'),
      description: t('career.roboticsDesc'),
      image: car5
    },
    {
      id: 6,
      title: t('career.instructor'),
      description: t('career.instructorDesc'),
      image: career1
    },
    // {
    //   id: 7,
    //   title: "Welding Sales Representative",
    //   description: "Welding sales representatives work for welding equipment manufacturers or suppliers, selling welding machines, consumables, and related products to industrial customers. They provide product demonstrations, technical support, and assistance with equipment selection.",
    //   image: car7
    // }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-gray-50 py-12 px-4 mt-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Component */}
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold text-[#212EA0] tracking-wide uppercase">{t('career.subtitle')}</h3>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('career.title')}</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            {/* <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div> */}
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerData.map((career) => (
            <div 
              key={career.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(career.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with hover effect */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={career.image} 
                  alt={career.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredCard === career.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{career.title}:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{career.description}</p>
                
                <div className="mt-6">
                  {/* <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}