import React from 'react';

const About = () => {
  return (
    <div className="p-6 font-satoshi">
      <h1 className="text-2xl font-bold mb-4 text-orange-500">About Summify</h1>
      <p className="mb-4">
        Summify is an innovative application that harnesses the power of OpenAI's GPT-4 technology
        to help users summarize lengthy articles effortlessly.
      </p>
      <p className="mb-4">
        With Summify, users can simply input any article's URL, and the application will generate
        a concise and easy-to-read summary, enabling users to grasp the key points and insights
        without having to read the entire article.
      </p>
      <p className="mb-4">
        Whether you're a student, researcher, or avid reader, Summify streamlines your reading
        experience by condensing complex articles into clear and digestible summaries, saving
        you time and effort.
      </p>

      {/* How Does It Work? Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-orange-500">How Does It Work?</h2>
        <ol className="list-decimal ml-6">
          <li>Enter the URL of the article you want to summarize.</li>
          <li>Summify's powerful AI engine processes the article and extracts key information.</li>
          <li>Receive a concise summary of the article, enabling you to grasp its main points quickly.</li>
        </ol>
      </section>

      {/* Give It a Try Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-orange-500">Give It a Try</h2>
        <p className="mb-4">
          Experience Summify now! Use the following credentials to log in as a guest user, or simply click "Continue as Guest":
        </p>
        <p className="mb-4">
          <strong>Username:</strong> guestuser<br />
          <strong>Password:</strong> guestpassword
        </p>
      </section>

      {/* Let's Connect Section */}
      <section>
        <h2 className="text-xl font-bold mb-2 text-orange-500">Let's Connect</h2>
        <p className="mb-4">
          Have questions or feedback? Let's connect!
        </p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          </li>
          <li>
            <a href="mailto:example@example.com" className="text-blue-600 hover:underline">Email</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
