import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import database from '../constants/database';

const firebaseApp = firebase.initializeApp(database);
const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;