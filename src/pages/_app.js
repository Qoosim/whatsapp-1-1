import '@/styles/globals.css';
import * as firebase from "firebase/app";
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import Loading from '../components/Loading';
import Login from './login';

function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL
      })
    }
  }, [user]);
  
  if (loading) return <Loading />
  if (!user) return <Login />;
  return <Component {...pageProps} />
}

export default App;
