import React, { useEffect } from 'react';

const Hero = ({ setIsHeroVisible }) => {
  useEffect(() => {
    setIsHeroVisible(true);
    return () => {
      setIsHeroVisible(false);
    };
  }, [setIsHeroVisible]);

  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading experience with Summify, an article summarizer 
        designed to condense lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
}

export default Hero;
