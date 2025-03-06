
import React from "react";

const Trending = () => {
  const trendingTopics = [
    { icon: "🚗", title: "Tariffs delayed for automakers", views: "6,542 readers" },
    { icon: "👔", title: "Britannia CEO resigns", views: "3,871 readers" },
    { icon: "🏭", title: "Manufacturing activity slows", views: "2,150 readers" },
    { icon: "📹", title: "Top videos of the week", views: "1,984 readers" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-4 border-b border-gray-200 bg-[#42b6b5]">
        <h2 className="text-lg font-bold text-white">Trending Now</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {trendingTopics.map((topic, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="flex">
              <span className="text-2xl mr-3">{topic.icon}</span>
              <div>
                <h3 className="font-medium text-[#1e293b]">{topic.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{topic.views}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 text-center">
        <button className="text-sm text-[#42b6b5] hover:text-[#328a89] font-medium">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Trending;