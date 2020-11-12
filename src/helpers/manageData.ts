import { Dispatch } from '@reduxjs/toolkit';
import { wordsRef, usersRef } from 'services/database';
import { auth, firestore } from 'services/firebase';
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
import {
  getUserProfileData,
  getUserProfileDataSuccess,
  getUserProfileDataFailure,
} from 'data/slices/userProfileSlice';
import {
  getGameStatsData,
  getGameStatsDataSuccess,
  getGameStatsDataFailure,
} from 'data/slices/gameStatsSlice';

interface ItemData {
  word: string;
  translation: string;
  userId: string;
}

export const getItems = (userId: string) => async (dispatch: Dispatch) => {
  dispatch(getWords());
  const tmp: any[] = [];

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

export const addItem = (newData: ItemData) => async (dispatch: Dispatch) => {
  dispatch(addWord());

  const defaultValues = { toRepeat: true, createdAt: new Date() };
  try {
    const result = await wordsRef.add({
      ...newData,
      ...defaultValues,
    });
    if (result) {
      dispatch(addWordSuccess({ id: result.id, ...newData, ...defaultValues }));
    }
  } catch (error) {
    dispatch(addWordFailure());
  }
};

export const removeItem = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeWord());

  try {
    await wordsRef.doc(id).delete();
    dispatch(removeWordSuccess({ id }));
  } catch (error) {
    dispatch(removeWordFailure());
  }
};

export const editItem = (id: string, editedData: any) => async (dispatch: Dispatch) => {
  dispatch(editWord());

  try {
    await wordsRef.doc(id).update({ ...editedData });
    dispatch(editWordSuccess({ id, ...editedData }));
  } catch (error) {
    dispatch(editWordFailure());
  }
};

export const changeItemStatus = (id: string, toRepeat: boolean) => async (dispatch: Dispatch) => {
  dispatch(changeWordStatus());

  try {
    await wordsRef.doc(id).update({ toRepeat });
    dispatch(changeWordStatusSuccess({ id, toRepeat }));
  } catch (error) {
    dispatch(changeWordStatusFailure());
  }
};

export const createProfileByIntegrate = async (user: any) => {
  const currentUser: any = await auth().currentUser;
  const checkUser = await usersRef.doc(currentUser?.uid).get();

  if (!checkUser.exists) {
    const { profile } = user?.additionalUserInfo;
    const userDetails = {
      email: profile.email,
      avatarURL: profile.picture,
    };

    const appDefaultValues = { gameSound: true, numberOfLevels: 5, gamePoints: 0 };

    try {
      await usersRef.doc(currentUser?.uid).set({ ...userDetails, ...appDefaultValues });
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const createProfileByEmailAndPassword = async (user: any) => {
  const { userId, email, avatarURL } = user;
  const userDetails = {
    email,
    avatarURL,
  };
  const appDefaultValues = { gameSound: true, numberOfLevels: 5, gamePoints: 0 };

  try {
    await usersRef.doc(userId).set({ ...userDetails, ...appDefaultValues });
  } catch (error) {
    throw new Error(error);
  }
};

type NewProfileData = {
  avatarURL?: string;
  gameSound?: boolean;
  gamePoints?: number;
  numberOfLevels?: number;
};

export const updateUserProfile = async (userId: string, newData: NewProfileData) => {
  const dataToUpdate = () => {
    if (newData.gamePoints) {
      return { gamePoints: firestore.FieldValue.increment(newData.gamePoints) };
    }
    return { ...newData };
  };

  try {
    await usersRef.doc(userId).update({ ...dataToUpdate() });
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
  dispatch(getUserProfileData());

  try {
    const result = await usersRef.doc(userId).get();
    dispatch(getUserProfileDataSuccess(result.data()));
  } catch (error) {
    dispatch(getUserProfileDataFailure());
  }
};

export const getGameStats = () => async (dispatch: Dispatch) => {
  dispatch(getGameStatsData());
  const tmp: any[] = [];

  try {
    const result = await usersRef.orderBy('gamePoints', 'desc').get();
    if (result) {
      result.forEach((doc) => {
        tmp.push({
          player: doc.data().email.substring(0, doc.data().email.lastIndexOf('@')),
          avatarURL: doc.data().avatarURL,
          gamePoints: doc.data().gamePoints,
        });
      });
    }

    dispatch(getGameStatsDataSuccess(tmp));
  } catch (error) {
    dispatch(getGameStatsDataFailure());
  }
};
