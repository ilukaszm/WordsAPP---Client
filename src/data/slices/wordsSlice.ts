import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Word {
  id: string;
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
    { id: '0', word: 'add', translation: 'dodawac', toRepeat: false },
    { id: '1', word: 'you', translation: 'ty', toRepeat: false },
    { id: '2', word: 'game', translation: 'gra', toRepeat: false },
  ] as Word[],
  reducers: {
    addWord: (
      state,
      action: PayloadAction<{
        word: string;
        translation: string;
      }>,
    ) => {
      const { payload } = action;

      state.push({ id: state.length.toString(), ...payload, toRepeat: false });
    },

    removeWord: (
      state,
      action: PayloadAction<{
        id: string;
      }>,
    ) => {
      const { id } = action.payload;
      const wordId = state.findIndex((word) => word.id === id);

      state.splice(wordId, 1);
    },

    editWord: (
      state,
      action: PayloadAction<{
        id: string;
        word: string;
        translation: string;
      }>,
    ) => {
      const { id, word, translation } = action.payload;
      const editedWord = state.find((word) => word.id === id);

      if (editedWord) {
        editedWord.word = word;
        editedWord.translation = translation;
      }
    },

    changeWordStatus: (
      state,
      action: PayloadAction<{
        id: string;
      }>,
    ) => {
      const { id } = action.payload;
      const editedWord = state.find((word) => word.id === id);

      if (editedWord) {
        editedWord.toRepeat = !editedWord.toRepeat;
      }
    },
  },
});

export const wordsReducer = wordsSlice.reducer;

export const { addWord, removeWord, editWord, changeWordStatus } = wordsSlice.actions;

export const selectWords = (state: WordsState): Word[] => state.words;
