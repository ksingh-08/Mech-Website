import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const ArticleTemplate = ({ 
  title, 
  backgroundImage, 
  mainImage, 
  sections, 
  learnMoreLink 
}) => {
  return (
    <>
      {/* Background Section */}
      <div className="relative bg-gray-200 pt-28 pb-5 px-5 md:px-12 lg:px-28">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={backgroundImage}
            className="w-full h-full object-cover opacity-20 filter grayscale"
            alt="Background"
          />
          <div className="absolute inset-0 bg-red-500 opacity-20"></div> {/* Red Tint */}
        </div>

        <div className="relative text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto mt-36 pb-2">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="relative flex justify-center -mt-20 z-0">
        <img
          src={mainImage}
          className="h-80 border-4 border-gray-700 shadow-xl rounded-lg"
          alt={title}
        />
      </div>

      {/* Accordion Sections */}
      <div className="px-6 md:px-12 lg:px-24 my-10">
        {sections.map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
              <p className="font-semibold text-lg">{section.title}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-gray-700">{section.content}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      {/* Additional Resources */}
      {learnMoreLink && (
        <div className="flex justify-center my-8">
          <Button
            variant="contained"
            color="primary"
            href={learnMoreLink}
            target="_blank"
            size="large"
          >
            Learn More
          </Button>
        </div>
      )}
    </>
  );
};

export default ArticleTemplate;
