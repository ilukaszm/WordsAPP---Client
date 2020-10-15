import { wordsRef, usersRef } from 'services/database';
import {
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
} from 'data/slices/wordsSlice';

interface Data {
  word: string;
  translation: string;
  userId: string;
}

export const getItems = (userId: string) => async (dispatch: any) => {
  dispatch(getWords());
  const tmp: any = [];

  try {
    const result = await wordsRef.where('userId', '==', userId).get();
    if (result) {
      result.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
    }
    dispatch(getWordsSuccess(tmp));
  } catch (error) {
    dispatch(getWordsFailure());
  }
};

export const addItem = (newData: Data) => async (dispatch: any) => {
  dispatch(addWord());
  try {
    const result = await wordsRef.add({
      ...newData,
      toRepeat: false,
      createdAt: new Date(),
    });
    if (result) {
      dispatch(addWordSuccess({ id: result.id, ...newData, toRepeat: false }));
    }
  } catch (error) {
    dispatch(addWordFailure());
  }
};

export const removeItem = (id: string) => async (dispatch: any) => {
  dispatch(removeWord());

  try {
    await wordsRef.doc(id).delete();
    dispatch(removeWordSuccess({ id }));
  } catch (error) {
    dispatch(removeWordFailure());
  }
};

export const editItem = (id: string, editedData: any) => async (dispatch: any) => {
  dispatch(editWord());

  try {
    await wordsRef.doc(id).update({ ...editedData });
    dispatch(editWordSuccess({ id, ...editedData }));
  } catch (error) {
    dispatch(editWordFailure());
  }
};

export const changeItemStatus = (id: string, toRepeat: boolean) => async (dispatch: any) => {
  dispatch(changeWordStatus());

  try {
    await wordsRef.doc(id).update({ toRepeat });
    dispatch(changeWordStatusSuccess({ id, toRepeat }));
  } catch (error) {
    dispatch(changeWordStatusFailure());
  }
};

export const createUser = async ({ userId, email, avatarURL }: any) => {
  try {
    await usersRef.doc(userId).set({ email, avatarURL });
  } catch (error) {
    console.log(error);
  }
};
