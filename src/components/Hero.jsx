import logo from '../assets/logo.svg';
// import Login from './login';
// import Signup from './signup';

const Hero = () => {
  return (
    <header className='w-full flex 
    justify-center items-center flex-col'>
        <nav className='flex justify-between
        items-center w-full mb-10 pt-3'>
            <img src={logo} alt="summify_logo" className='w-28 object-contain' />
            <button 
                type='button'
                className='black_btn'>               
                Login
            </button>
            <button 
                type='button'
                className='black_btn'>                        
                Signup
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>

        </h1>
        <h2 className='desc'>
        Streamline your reading experience with Summify, an article summarizer 
        designed to condense lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero;