import React, { FC, createContext, useContext, useState, ChangeEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectWordsToRepeat } from 'data/slices/wordsSlice';
import { selectUserProfile } from 'data/slices/userProfileSlice';
import { updateUserProfile } from 'helpers/manageData';
import { useAuthContext } from 'context/AuthContext';
import failureSound from 'assets/sounds/failure.wav';
import startSound from 'assets/sounds/start.wav';
import successSound from 'assets/sounds/success.wav';
import { getRandom, uniqueId } from 'utils/utils';

interface Game {
  isGameLaunch: null | boolean;
  isConfirmNumberOfWords: () => boolean;
  useWordsList: boolean;
  gamePoints: number;
  handleLaunchGame: () => void;
  handleChangeAnswer: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleCheckAnswer: (e?: any, buttonAnswer?: string) => void;
  setNextLevel: () => void;
  toggleUseWordsList: () => void;
  answerTextValue: string;
  activeLevelVariant: 'wordToTranslate' | 'translateToWord';
  activeWord: string;
  activeWordTranslation: string;
  answerIsCorrect: null | boolean;
  answersWords: Word[];
  gameProgress: number;
}

interface Word {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
  gameId?: string;
}

type LevelVariant = 'wordToTranslate' | 'translateToWord';

const GameContext = createContext({});

const GameProvider: FC = ({ children }) => {
  const { userId } = useAuthContext();

  const gameSettings = useSelector(selectUserProfile) || {};
  const words = useSelector(selectWordsToRepeat) || [];

  const [isGameLaunch, setIsGameLaunch] = useState<null | boolean>(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [gamePoints, setGamePoints] = useState(0);
  const [activeLevelVariant, setActiveLevelVariant] = useState<LevelVariant>('wordToTranslate');
  const [gameWords, setGameWords] = useState<Word[]>([]);
  const [answersWords, setAnswersWords] = useState<Word[]>([]);
  const [answerTextValue, setAnswerTextValue] = useState('');
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
      setAnswerTextValue('');
      setAnswerIsCorrect(null);
      setUseWordsList(false);
      randomAnswers(0);
      updateUserProfile(userId, { gamePoints });
      setGamePoints(0);

      return;
    }
    setActiveLevel((prevState) => prevState + 1);
    randomLevelVariant();
    setAnswerTextValue('');
    setAnswerIsCorrect(null);
    randomAnswers(activeLevel + 1);
  };

  const handleCheckAnswer = (e: any, buttonAnswer = '') => {
    const isAnswerCorrect = () => {
      let output: boolean;
      const answerType = buttonAnswer || answerTextValue;

      if (activeLevelVariant === 'wordToTranslate') {
        output = answerType.toLowerCase() === gameWords[activeLevel].translation.toLowerCase();
      } else {
        output = answerType.toLowerCase() === gameWords[activeLevel].word.toLowerCase();
      }

      return output;
    };

    if (isAnswerCorrect()) {
      setAnswerIsCorrect(true);
      setGamePoints((prevState) => prevState + 1);
      playAudio('success');
    } else {
      setAnswerIsCorrect(false);
      playAudio('failure');
    }
  };

  const handleChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const answerValue = e.target.value;
    setAnswerTextValue(answerValue);
  };

  const gameProgress = (activeLevel / numberOfLevels) * 100;

  const toggleUseWordsList = () => {
    randomAnswers(activeLevel);

    setUseWordsList((prevState) => !prevState);
  };

  const isConfirmNumberOfWords = () => {
    let output: boolean;

    if (words.length > numberOfLevels) {
      output = true;
    } else {
      output = false;
    }

    return output;
  };

  const context = {
    isGameLaunch,
    isConfirmNumberOfWords,
    gamePoints,
    handleLaunchGame,
    handleChangeAnswer,
    handleCheckAnswer,
    setNextLevel,
    activeWord,
    activeWordTranslation,
    activeLevelVariant,
    answerTextValue,
    answersWords,
    answerIsCorrect,
    gameProgress,
    useWordsList,
    toggleUseWordsList,
  };

  return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
};

export default GameProvider;

export const useGameContext = () => useContext(GameContext) as Game;
