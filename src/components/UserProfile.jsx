import React from 'react';
import { linkIcon, loader, tick } from '../assets';

const UserProfile = ({ allArticles }) => {
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Display Summarized Articles */}
      <div className='flex flex-col w-full gap-2 ml-96'>
        <h2 className="text-2xl font-bold mb-4">Your Summarized Articles</h2>
        {allArticles.length > 0 ? (
          <ul className="space-y-4">
            {allArticles.map((article, index) => (
              <li key={index} className="border rounded-md p-4 flex items-center justify-between">
                <div>
                  <img 
                    src={linkIcon}
                    alt='link_icon'
                    className='w-5 mr-2 inline'
                  />
                  <a href={article.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{article.url}</a>
                </div>
                <div>
                  <span className="text-sm">Summary:</span>
                  <p className="text-gray-600">{article.summary}</p>
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
