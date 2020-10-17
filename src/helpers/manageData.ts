import { wordsRef, usersRef } from 'services/database';
import { auth } from 'services/firebase';
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

  const defaultValues = { toRepeat: false, createdAt: new Date() };
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

export const createUserProfile = async (user: any) => {
  const currentUser: any = await auth().currentUser;
  const checkUser = await usersRef.doc(currentUser?.uid).get();

  if (!checkUser.exists) {
    const { profile } = user?.additionalUserInfo;
    const details = {
      email: profile.email,
      avatarURL: profile.picture,
    };

    const defaultValues = { gameSound: true, numberOfLevels: 5 };

    try {
      await usersRef.doc(currentUser?.uid).set({ ...details, ...defaultValues });
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const createUserProfileWithEmail = async (user: any) => {
  const { userId, email, avatarURL } = user;
  const defaultValues = { gameSound: true, numberOfLevels: 5 };

  try {
    await usersRef.doc(userId).set({ email, avatarURL, ...defaultValues });
  } catch (error) {
    throw new Error(error);
  }
};

type NewProfileData = { avatarUrl?: string; gameSound: boolean; numberOfLevels: string };
export const updateUserProfile = async (userId: any, newData: NewProfileData) => {
  try {
    await usersRef.doc(userId).update({ ...newData });
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserProfile = (userId: string) => async (dispatch: any) => {
  dispatch(getUserProfileData());

  try {
    const result = await usersRef.doc(userId).get();
    dispatch(getUserProfileDataSuccess(result.data()));
  } catch (error) {
    dispatch(getUserProfileDataFailure());
  }
};
