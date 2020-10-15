import { createSlice } from '@reduxjs/toolkit';

interface Word {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
}

interface Words {
  words: InitialState;
}

interface InitialState {
  loading: boolean;
  hasErrors: boolean;
  allWords: Word[];
}

const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  allWords: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state) => {
      state.loading = true;
    },
    addWordSuccess: (state, { payload }) => {
      state.loading = false;
      state.allWords.push(payload);
      state.hasErrors = false;
    },
    addWordFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    getWords: (state) => {
      state.loading = true;
    },
    getWordsSuccess: (state, { payload }) => {
      state.loading = false;
      state.allWords = payload;
      state.hasErrors = false;
    },
    getWordsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    removeWord: (state) => {
      state.loading = true;
    },
    removeWordSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      const { id } = payload;
      const removedWordId = state.allWords.findIndex((word) => word.id === id);

      state.allWords.splice(removedWordId, 1);
    },
    removeWordFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    editWord: (state) => {
      state.loading = true;
    },
    editWordSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      const { id, word, translation } = payload;
      const editedWord = state.allWords.find((word) => word.id === id);

      if (editedWord) {
        editedWord.word = word;
        editedWord.translation = translation;
      }
    },
    editWordFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    changeWordStatus: (state) => {
      state.loading = true;
    },
    changeWordStatusSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      const { id, toRepeat } = payload;
      const editedWord = state.allWords.find((word) => word.id === id);

      if (editedWord) {
        editedWord.toRepeat = toRepeat;
      }
    },
    changeWordStatusFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const wordsReducer = wordsSlice.reducer;

export const {
  getWords,
  addWord,
  removeWord,
  editWord,
  changeWordStatus,
  addWordSuccess,
  getWordsSuccess,
  removeWordSuccess,
  editWordSuccess,
  changeWordStatusSuccess,
  addWordFailure,
  getWordsFailure,
  removeWordFailure,
  editWordFailure,
  changeWordStatusFailure,
} = wordsSlice.actions;

export const selectWords = (state: Words): Word[] => state.words.allWords;
export const selectWordsToRepeat = (state: Words): Word[] =>
  state.words.allWords.filter((word: Word) => word.toRepeat);
export const selectWordsLoading = (state: Words) => state.words.loading;
