import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';

const Hero = () => {
  return (
    <div className='w-full flex 
    justify-center items-center flex-col'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* Other routes go here */}
            </Routes>
        </Router>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>

        </h1>
        <h2 className='desc'>
        Streamline your reading experience with Summify, an article summarizer 
        designed to condense lengthy articles into clear and concise summaries.
        </h2>
    </div>
  )
}

export default Hero;