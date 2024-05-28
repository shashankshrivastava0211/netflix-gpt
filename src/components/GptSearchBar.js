import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changelang } from '../utils/configSlice';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLanguageChange = (e) => {
    dispatch(changelang(e.target.value));
  };

  const handleGptSearchClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = SearchText.current?.value;
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices);
    } catch (error) {
      if (error.status === 429) {
        setError('Too many requests. Please try again later.');
      } else {
        setError('Error fetching GPT results.');
        console.error('Error fetching GPT results:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-40  md:pt-20 flex justify-center'>
      <form className='w-3/4 md:w-3/4 bg-black rounded-xl p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='p-4 w-5/6 md:w-9/12 rounded-lg'
          ref={SearchText}
          placeholder={lang[language].placeHolder}
        />
        <button className='py-2 px-4 w-5/6 md:w-auto rounded-lg bg-red-700 text-white' onClick={handleGptSearchClick} disabled={loading}>
          {lang[language].search}
        </button>
        <select className='p-2 w-5/6 md:w-auto bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      </form>
      {error && <div className="error-message mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default GptSearchBar;
