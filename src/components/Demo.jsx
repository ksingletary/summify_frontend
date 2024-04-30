import React, { useState, useEffect, useContext } from 'react';
import { linkIcon, loader } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';
import UserContext from "../context/UserContext";
import copy from '../assets/copy.svg';

const Demo = ({ allArticles, setAllArticles }) => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const { currentUser, isDarkMode } = useContext(UserContext);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const fetchArticlesFromLocalStorage = () => {
      if (currentUser && currentUser.username) {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem(currentUser.username));
        if (articlesFromLocalStorage) {
          setAllArticles(articlesFromLocalStorage);
        }
      }
    };
  
    fetchArticlesFromLocalStorage();
  }, []); // Empty dependency array to ensure useEffect runs only once on mount
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      if (currentUser && currentUser.username) {
        // If user is logged in, add article to their profile
        const updatedAllArticles = [newArticle, ...allArticles];
        setAllArticles(updatedAllArticles);
        localStorage.setItem(currentUser.username, JSON.stringify(updatedAllArticles));
      }
    }
  };

  const handleClearArticles = () => {
    setAllArticles([]);
    localStorage.removeItem(currentUser.username);
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2 ml-96'>
        <header className='w-full flex justify-center items-center flex-col'>
          <h1 id={`${isDarkMode ? 'white-header_text' : ''}`} className='head_text'>
            Summify <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
          </h1>
          <h2 className='desc'>
            Streamline your reading experience with Summify, an article summarizer 
            designed to condense lengthy articles into clear and concise summaries.
          </h2>
        </header>
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
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {Array.from(new Set(allArticles.map(item => item.url))) // Get unique article URLs using Set
            .map((url, index) => {
              const item = allArticles.find(article => article.url === url);
              return (
                <div
                  key={`link-${index}`}
                  onClick={() => setArticle(item)}
                  className='link_Card'
                >
                  <div className='copy_btn'>
                    <img
                      src={copy}
                      alt="copy_icon"
                      className='w-[40%] h-[40%] object-contain'
                    /> 
                  </div>
                  <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                    {url}
                  </p>
                </div>
              );
            })}
        </div>

        {/* Summary section */}
        <div className='my-10 max-w-full flex justify-center items-center'>
          {isFetching ? (
            <img src={loader} alt="loader" className='w-20 h-20 object-contain'/>
          ) : error ? (
            <p id={`${isDarkMode ? 'white-header_text' : ''}`} className='font-inter font-bold text-black text-center'>
              Well, that wasn't supposed to happen...
              <br />
              <span className='font-satoshi font-normal'>
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className='flex flex-col gap-3'>
                <h2 className='font-satoshi font-bold text-xl'>
                  Article <span className='blue_Gradient'>Summary</span>
                </h2>
                <div className='summary_box'>
                  <p className='font-inter font-medium text-sm'>{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
        {/* Button to clear articles */}
        <button className="black_btn w-40 ml-48 mb-3 " onClick={handleClearArticles}>Clear Articles</button>
      </div>
    </section>
  );
};

export default Demo;
