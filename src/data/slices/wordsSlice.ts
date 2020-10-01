import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Word {
  id: number;
  word: string;
  translation: string;
  toRepeat: boolean;
}

interface WordsState {
  words: Word[];
}

const wordsSlice = createSlice({
  name: 'words',
  initialState: [
    { id: 0, word: 'add', translation: 'dodawac', toRepeat: false },
    { id: 1, word: 'you', translation: 'ty', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
    { id: 2, word: 'game', translation: 'gra', toRepeat: false },
  ] as Word[],
  reducers: {
    addWord: (
      state,
      action: PayloadAction<{
        word: string;
        translation: string;
      }>,
    ) => {
      state.push({ id: state.length, ...action.payload, toRepeat: false });
    },
  },
});

export const wordsReducer = wordsSlice.reducer;

export const { addWord } = wordsSlice.actions;

export const selectWords = (state: WordsState): Word[] => state.words;
