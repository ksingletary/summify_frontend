import React from 'react';
import { linkIcon, loader, tick } from '../assets';
import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

const UserProfile = ({ allArticles }) => {
  const { isDarkMode } = useContext(UserContext);

  // Filter out duplicate articles based on their URLs
  const uniqueArticles = allArticles.filter((article, index, self) =>
    index === self.findIndex((a) => (
      a.url === article.url
    ))
  );

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Display Summarized Articles */}
      <div className='flex flex-col w-full gap-2 ml-96'>
        <h2 className="text-2xl font-bold mb-4">Your Summarized Articles</h2>
        {uniqueArticles.length > 0 ? (
          <ul className="space-y-4">
            {uniqueArticles.map((article, index) => (
              <li key={index} className="border rounded-md p-4">
                <div>
                  <img 
                    src={linkIcon}
                    alt='link_icon'
                    className='w-5 mr-2 inline'
                  />
                  <a href={article.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{article.url}</a>
                </div>
                <div className="border-t pt-2 mt-2">
                  <span className="text-sm">Summary:</span>
                  <p id={`${isDarkMode ? 'white-header_text' : ''}`} className="text-gray-600">{article.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No summarized articles found.</p>
        )}
      </div>
    </section>
  );
}

export default UserProfile;
