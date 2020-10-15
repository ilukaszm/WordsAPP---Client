import { db } from './firebase';

export const wordsRef = db.collection('words');
export const usersRef = db.collection('users');
