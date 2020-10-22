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
  numberOfLevels?: string;
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

export const getUserProfile = (userId: string) => async (dispatch: any) => {
  dispatch(getUserProfileData());

  try {
    const result = await usersRef.doc(userId).get();
    dispatch(getUserProfileDataSuccess(result.data()));
  } catch (error) {
    dispatch(getUserProfileDataFailure());
  }
};

export const getGameStats = () => async (dispatch: any) => {
  dispatch(getGameStatsData());
  const tmp: any = [];

  try {
    const result = await usersRef.orderBy('gamePoints', 'desc').get();
    if (result) {
      result.forEach((doc) => {
        tmp.push({
          email: doc.data().email,
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
