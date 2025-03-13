import React from "react";

const achievements = [
  {
    title: "Google Summer of Code 2023",
    description: "4 students were selected for GSOC and awarded Rs 2.7 Lac each.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC-icon.svg",
  },
  {
    title: "ICPC Asia-West Regional 2023",
    description: "A student secured AIR - 42 in ICPC Kanpur.",
    image: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
  },
  {
    title: "ETHGlobal Bangkok",
    description:
      "Prathmesh Ranjan, Mani Bajpai, Suryansh Chauhan and Kausthubh Agrawal, has won four different prizes at ETHGlobal Bangkok, totalling $5.6k (~ 4.7 lakhs INR)",
    image: "https://cdn.dribbble.com/userupload/9964326/file/still-963bb3814dd11f45ad91d707e91bc8c4.png",
  },
  {
    title: "CODS-COMAD-2024",
    description:
      "Two LNMIIT students clinched the top prize in Data Challenge and won a reward of INR 50,000.",
    image: "https://www.acm.org/binaries/content/gallery/images-mail/india/cods21-logo.png",
  },
  {
    title: "LFX Mentorship Program",
    description:
      "Two students earned spots in LFX Mentorship Program. One contributed to Kyverno's VPA Recommendation Research, while the other was elected as one of 27 worldwide, worked on the Karmada-Dashboard.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wX81Kh7r3YxwG3xuoauMq0U0ALgR6VYBpg&s",
  },
  {
    title: "ISRO-RACS Funding",
    description:
      "A student achieved the funding for a short-term project on Hyperspectral Image Classification.",
    image: "https://mnit.ac.in/rac_s/images/ISRO_logo.png",
  },
  {
    title: "Photonics Research Fellowship",
    description:
      "LNMIIT Students received fellowship from the ministry of education,Taiwan to carry out research in the field of 'Photonics'",
    image: "https://mnit.ac.in/rac_s/images/ISRO_logo.png",
  },
  {
    title: "Summer of Bitcoin",
    description:
      "Vatsal Mehta and Sunidhi Sharma got selected for the Summer of Bitcoin",
    image: "https://pbs.twimg.com/profile_images/1450717705632301057/BWfeOPU__400x400.jpg",
  },
  {
    title: "e-Yantra Robotics Competition",
    description:
      "LNMIIT students secured 2nd position out of 375 teams in E-Yantra Robotics Competition Organized by IIT Bombay and Ministry of Education.",
    image: "https://portal.e-yantra.org/img/footer_iitb_eyantra.png",
  },
  {
    title: "Bajaj Finserv Health HackRx 5.0 Ha",
    description:
      "Our institute's team, HackHounds consisting of Yash Khandelwal,Chetali Goyal,Eshita Rastogi and Vedant Gholap won THE PITCHER PERFECT award and finished top 7 out of 700 teams",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lF2CacgF4RZYW8iGr-Km6izYMWNoqQTPcg&s",
  },
  {
    title: "Rajasthan Police Hackthon 1.0",
    description:
      "Team MapSnap from LNMIIT stood 1st Runner winning 35,000 up under the problem statement 'Geo-Tagging of Private Cameras .",
    image: "https://police.rajasthan.gov.in/old/hackathon/assetsNew/Hero_Logo%20.webp",
  },
  {
    title: "Tata Crucible Quiz",
    description:
      "Kumar Mangesh (Y19), claimed the Cluster Finals victory, while Ayush Bajaj (Y21) finished a close second at Tata Crucible Campus Quiz. 6 out of 8 finalist were from LNMIIT",
    image: "https://i0.wp.com/avenuemail.in/wp-content/uploads/2023/06/quiz.jpg?fit=1600%2C1051&ssl=1",
  },
  {
    title: "V-Guard Big idea contest",
    description:
      "The Team consisted of Divyansh Bansal ,Archit Khurana and Abhi Sanghi got a special jury award at contest. This is the second consecutive win for LNMIIT. Last year two teams got awards in two different categories.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_M6fD4SMObc-ibYfi8fQ4ISSG539nPM1BPy2mpSPmMN-KV-9YA8Qut9G_OfhmDvHNAF2pb5DEkmbNFNLuslXrn3_4VwEVgd29zk5OuxmlutN-XrDvTXWyyWjtbPxPRrQi1YoaYBHInkn80Ir2IrrqLUD9Fm9m-xJM9klPLiYlurLfSSce-RK6O3Sieg/s600/big%20idea.jpg",
  },
  {
    title: "Code Red 3.0 Hackathon",
    description:
      "Team BharatTech wins, securing 1,00,000 INR and 50,000 INR from Incubation Cell VGU.",
    image: "https://i0.wp.com/avenuemail.in/wp-content/uploads/2023/06/quiz.jpg?fit=1600%2C1051&ssl=1",
  },
  {
    title: "Google Gen AI Hackathon",
    description:
      "Team Smart Stay consisting Himanshu Sharma,Priyansh Gupta and Vanshika Thadani,has secured the Runner-Up position under the Rate Gain Problem Statement—an exceptional feat among 15,000+ submissions nationwide!",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/812/484/datas/original.png",
  },
  
];

const AchievementCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105 ">
      <img src={image} alt={title} className="h-24 mx-auto mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

const Achievements = () => {
    return (
      <div className="bg-gray-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-red-900 mb-6">Achievements</h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 px-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    );
  };
  
  
export default Achievements;
