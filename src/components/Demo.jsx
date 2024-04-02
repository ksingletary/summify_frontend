import React, { useState, useEffect, useContext } from 'react';
import { linkIcon } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';
import UserContext from "../context/UserContext";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);
  const { currentUser, isDarkMode } = useContext(UserContext);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      if (currentUser) {
        // If user is logged in, add article to their profile
        const updatedAllArticles = [newArticle, ...allArticles];
        setAllArticles(updatedAllArticles);
        localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
      }
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2 ml-96'>
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
          <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input'
            id={`${isDarkMode ? 'div-form-dark' : ''}`}
          />
          <button
            type='submit'
            className='submit_btn bg-orange-300 peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
            ↵
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
