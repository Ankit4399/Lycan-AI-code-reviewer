'use server';
import {auth} from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { DEFAULT_AUTH_CALLBACK, getSafeCallbackPath, SIGN_IN_PATH } from '../utils';


export const signInWithGithub = async (formData : FormData) => {
    const callback = formData.get('callbackUrl')

    const redirectTo = getSafeCallbackPath(
        typeof callback === "string" ? callback : null
      );
    

    const res = await auth.api.signInSocial({
        body : {
            provider : "github",
            callbackURL: redirectTo
        },
        headers : await headers()
    })

    if(res.url){
        redirect(res.url)
    }
}

export const getServerSession = async ()=>{
    return (
         auth.api.getSession({headers : await headers()})
    )
}

//check user is logged in
export const requireAuth = async (redirectTo = SIGN_IN_PATH) => {
    const session = await getServerSession()

    if(!session){
        redirect(redirectTo)
    }
    return session;
}

//check user is not logged in
export const requireUnAuth = async (redirectTo = DEFAULT_AUTH_CALLBACK) => { 
    const session = await getServerSession();

    if(session){
        redirect(redirectTo)
    }
}