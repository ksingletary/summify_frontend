import React, { useContext } from 'react';
import { linkIcon } from '../assets';
import UserContext from "../context/UserContext";

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
      <div className='flex flex-col w-full gap-2 ml-96'>
        <h2 className="text-2xl font-bold mb-4">Your Summarized Articles</h2>
        <p className='text-red-700'>*if you refresh then go back home, your articles will reappear</p>
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
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>{article.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>No summarized articles found.</p>
        )}
      </div>
    </section>
  );
}

export default UserProfile;
