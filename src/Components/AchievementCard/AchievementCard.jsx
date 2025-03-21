import React from "react";

const achievements = [
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC-icon.svg",
  },
  {
    title: "Consectetur Adipiscing",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
  },
  {
    title: "Sed Do Eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://cdn.dribbble.com/userupload/9964326/file/still-963bb3814dd11f45ad91d707e91bc8c4.png",
  },
  {
    title: "Tempor Incididunt",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/GSoC-icon.svg",
  },
  {
    title: "Reprehenderit Voluptate",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
  },
  {
    title: "Cillum Dolore Eu Fugiat",
    description:
      "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "https://cdn.dribbble.com/userupload/9964326/file/still-963bb3814dd11f45ad91d707e91bc8c4.png",
  },
];

const AchievementCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105">
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
