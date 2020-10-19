import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { GamePageTemplate } from 'templates';
import { selectWordsToRepeat } from 'data/slices/wordsSlice';
import { selectUserProfile } from 'data/slices/userProfileSlice';
import failureSound from 'assets/sounds/failure.wav';
import startSound from 'assets/sounds/start.wav';
import successSound from 'assets/sounds/success.wav';
import { getRandom, uniqueId } from 'utils/utils';

interface Word {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
  gameId?: string;
}

type LevelVariant = 'wordToTranslate' | 'translateToWord';

const GamePage: FC = () => {
  const gameSettings = useSelector(selectUserProfile);
  const words = useSelector(selectWordsToRepeat) as Word[];

  const [isGameLaunch, setIsGameLaunch] = useState<null | boolean>(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeLevelVariant, setActiveLevelVariant] = useState<LevelVariant>('wordToTranslate');
  const [gameWords, setGameWords] = useState<Word[]>([]);
  const [answersWords, setAnswersWords] = useState<Word[]>([]);
  const [answerValue, setAnswerValue] = useState('');
  const [answerIsCorrect, setAnswerIsCorrect] = useState<null | boolean>(null);
  const [gameSound, setGameSound] = useState(false);
  const [numberOfLevels, setNumberOfLevels] = useState(10);
  const [useWordsList, setUseWordsList] = useState(false);

  useEffect(() => {
    const { gameSound, numberOfLevels } = gameSettings;

    setGameSound(gameSound);
    setNumberOfLevels(Number(numberOfLevels));
  }, [gameSettings]);

  const activeWord = gameWords[activeLevel]?.word;
  const activeWordTranslation = gameWords[activeLevel]?.translation;

  const playAudio = (variant: 'failure' | 'success' | 'start') => {
    const sounds = {
      failure: failureSound,
      success: successSound,
      start: startSound,
    };
    const sound = sounds[variant];
    const audio = new Audio(sound);

    if (gameSound) {
      audio.play();
    }
  };

  const randomWords = () => {
    const gameWords: Word[] = [];

    for (let i = 0; i < numberOfLevels; i++) {
      const randomIndex = () => Math.floor(Math.random() * (words.length - 1) * 1);

      gameWords.push(words[randomIndex()]);
    }

    setGameWords(gameWords);
  };

  function randomAnswers(activeLevel: number) {
    const wordsWithoutAnswer = gameWords.filter((word) => word.id !== gameWords[activeLevel].id);
    const wordsArray = getRandom(wordsWithoutAnswer, 3);

    const correctAnswerIndex = Math.floor(Math.random() * 2);
    wordsArray.splice(correctAnswerIndex, 0, gameWords[activeLevel]);

    const wordsArrayWithGameId = wordsArray.map((word) => ({
      ...word,
      gameId: uniqueId(),
    }));

    setAnswersWords(wordsArrayWithGameId);
  }

  const randomLevelVariant = () => {
    const randomBoolean = Math.random() >= 0.5;

    if (randomBoolean) {
      setActiveLevelVariant('wordToTranslate');
    } else {
      setActiveLevelVariant('translateToWord');
    }
  };

  const handleLaunchGame = () => {
    setIsGameLaunch(true);
    randomWords();
    randomLevelVariant();
    playAudio('start');
  };

  const setNextLevel = () => {
    const isLastLevel = activeLevel + 1 === numberOfLevels;

    if (isLastLevel) {
      setIsGameLaunch(false);
      setActiveLevel(0);
      setAnswerValue('');
      setAnswerIsCorrect(null);
      setUseWordsList(false);
      randomAnswers(0);

      return;
    }
    setActiveLevel((prevState) => prevState + 1);
    randomLevelVariant();
    setAnswerValue('');
    setAnswerIsCorrect(null);
    randomAnswers(activeLevel + 1);
  };

  const handleCheckAnswer = (e: any, buttonAnswer = '') => {
    const isAnswerCorrect = () => {
      let output: boolean;
      const answerType = buttonAnswer || answerValue;

      if (activeLevelVariant === 'wordToTranslate') {
        output = answerType.toLowerCase() === gameWords[activeLevel].translation.toLowerCase();
      } else {
        output = answerType.toLowerCase() === gameWords[activeLevel].word.toLowerCase();
      }

      return output;
    };

    if (isAnswerCorrect()) {
      setAnswerIsCorrect(true);
      playAudio('success');
    } else {
      setAnswerIsCorrect(false);
      playAudio('failure');
    }
  };

  const handleChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const answerValue = e.target.value;
    setAnswerValue(answerValue);
  };

  const gameProgress = (activeLevel / numberOfLevels) * 100;

  const toggleUseWordsList = () => {
    randomAnswers(activeLevel);

    setUseWordsList((prevState) => !prevState);
  };

  return (
    <GamePageTemplate
      isGameLaunch={isGameLaunch}
      handleLaunchGame={handleLaunchGame}
      handleChangeAnswer={handleChangeAnswer}
      handleCheckAnswer={handleCheckAnswer}
      setNextLevel={setNextLevel}
      activeWord={activeWord}
      activeWordTranslation={activeWordTranslation}
      activeLevelVariant={activeLevelVariant}
      answerValue={answerValue}
      answerIsCorrect={answerIsCorrect}
      gameProgress={gameProgress}
      answersWords={answersWords}
      useWordsList={useWordsList}
      toggleUseWordsList={toggleUseWordsList}
    />
  );
};

export default GamePage;
