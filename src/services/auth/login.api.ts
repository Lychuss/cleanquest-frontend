import { authClient } from "@/src/libs/authclient";
import { LoginInterface } from "../types/login.type";

export async function LoginEmailApi(accountData: LoginInterface){

    const {email, password} = accountData;

    console.log(email, password);

    const { data, error }= await authClient.signIn.email(
        {email, password},
        {
            onRequest: () => {

            },
            onSuccess: (ctx) => {
                window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/dashboard`
            },
            onError: (ctx) => {
                alert(ctx.error.message);
            }
        }
    );
}

export async function LoginGoogleApi(){
    await authClient.signIn.social({
        provider: "google",
        callbackURL: `${process.env.NEXT_PUBLIC_CALLBACK_URL}/dashboard`
    });
}



