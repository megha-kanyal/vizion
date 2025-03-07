
import React from "react";

const Trending = () => {
  const trendingTopics = [
    { icon: "🚗", title: "Tariffs delayed for automakers", views: "6,542 readers" },
    { icon: "👔", title: "Britannia CEO resigns", views: "3,871 readers" },
    { icon: "🏭", title: "Manufacturing activity slows", views: "2,150 readers" },
    { icon: "📹", title: "Top videos of the week", views: "1,984 readers" },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-lg text-[#1e293b]">Trending Now</h2>
      </div>
      
      <div>
        {trendingTopics.map((topic, index) => (
          <div 
            key={index} 
            className="p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-start">
              <span className="text-xl mr-2">{topic.icon}</span>
              <div>
                <h3 className="font-medium text-sm text-[#1e293b]">{topic.title}</h3>
                <p className="text-xs text-gray-500">{topic.views}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <button className="text-[#42b6b5] font-medium text-sm hover:underline flex items-center">
          Show more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Trending;