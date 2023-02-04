import { auth, provider} from '../firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { async } from "@firebase/util";
import Cookies from 'universal-cookie';
const cookies = new Cookies()

export const Auth =(props) => {

    const { setIsAuth } = props;
        const signInWithGoogle = async () => {
            try{
           const result = await signInWithPopup(auth, provider);
           cookies.set("auth-token", result.user.refreshToken);
           setIsAuth(true);
            } catch(err) {
                console.error(err);
            }
        };

    return ( <div className="auth">
        <p>Google sign in</p>
        <button onClick={signInWithGoogle}>Google Sign In</button>
    </div>
);
};