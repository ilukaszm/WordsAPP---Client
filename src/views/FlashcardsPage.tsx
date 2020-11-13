import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { FlashcardsPageTemplate } from 'templates';
import { InfoBar, InfoBarWrapper } from 'components';
import Spinner from 'utils/Spinner';
import { selectWordsToRepeat, selectWordsLoading, selectWordsErrors } from 'data/slices/wordsSlice';

const FlashcardsPage: FC = () => {
  const [activeWord, setActiveWord] = useState(0);
  const wordsToRepeat = useSelector(selectWordsToRepeat);
  const wordsLoading = useSelector(selectWordsLoading);
  const wordsErrors = useSelector(selectWordsErrors);

  const changeActiveWord = (type: 'next' | 'previous') => {
    if (type === 'next') {
      if (activeWord + 1 === wordsToRepeat.length) {
        setActiveWord(0);
        return;
      }
      setActiveWord((prevState) => prevState + 1);
    } else if (type === 'previous') {
      if (activeWord - 1 < 0) {
        setActiveWord(wordsToRepeat.length - 1);
        return;
      }
      setActiveWord((prevState) => prevState - 1);
    }
  };

  return (
    <FlashcardsPageTemplate
      word={wordsToRepeat[activeWord]?.word}
      translation={wordsToRepeat[activeWord]?.translation}
      changeActiveWordFn={changeActiveWord}
    >
      {wordsLoading && <Spinner />}
      {wordsErrors && (
        <InfoBarWrapper>
          <InfoBar icon="error">Oops! Something went wrong. Try again later.</InfoBar>
        </InfoBarWrapper>
      )}
    </FlashcardsPageTemplate>
  );
};

export default FlashcardsPage;
