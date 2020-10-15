import React, { FC, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { GamePageTemplate } from 'templates';
import { selectWordsToRepeat } from 'data/slices/wordsSlice';
import failureSound from 'assets/sounds/failure.wav';
import startSound from 'assets/sounds/start.wav';
import successSound from 'assets/sounds/success.wav';

interface Word {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
}

type LevelVariant = 'wordToTranslate' | 'translateToWord';

const GamePage: FC = () => {
  const gameSettings = {
    numberOfLevels: 2,
    sound: true,
  };

  const words = useSelector(selectWordsToRepeat) as Word[];

  const [isGameLaunch, setIsGameLaunch] = useState<null | boolean>(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeLevelVariant, setActiveLevelVariant] = useState<LevelVariant>('wordToTranslate');
  const [gameWords, setGameWords] = useState<Word[]>([]);
  const [answerValue, setAnswerValue] = useState('');
  const [answerIsCorrect, setAnswerIsCorrect] = useState<null | boolean>(null);

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

    if (gameSettings.sound) {
      audio.play();
    }
  };

  const randomWords = () => {
    const gameWords: Word[] = [];
    const { numberOfLevels } = gameSettings;

    for (let i = 0; i < numberOfLevels; i++) {
      const randomIndex = () => Math.floor(Math.random() * (words.length - 1) * 1);

      gameWords.push(words[randomIndex()]);
    }

    setGameWords(gameWords);
  };

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

  const handleCheckAnswer = () => {
    const isAnswerCorrect = () => {
      let output: boolean;
      if (activeLevelVariant === 'wordToTranslate') {
        output = answerValue.toLowerCase() === gameWords[activeLevel].translation.toLowerCase();
      } else {
        output = answerValue.toLowerCase() === gameWords[activeLevel].word.toLowerCase();
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

  const setNextLevel = () => {
    const { numberOfLevels } = gameSettings;
    const isLastLevel = activeLevel + 1 === numberOfLevels;

    if (isLastLevel) {
      setIsGameLaunch(false);
      setActiveLevel(0);
      setAnswerValue('');
      setAnswerIsCorrect(null);
      return;
    }
    setActiveLevel((prevState) => prevState + 1);
    randomLevelVariant();
    setAnswerValue('');
    setAnswerIsCorrect(null);
  };

  const handleChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const answerValue = e.target.value;
    setAnswerValue(answerValue);
  };

  const gameProgress = (activeLevel / gameSettings.numberOfLevels) * 100;

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
    />
  );
};

export default GamePage;
