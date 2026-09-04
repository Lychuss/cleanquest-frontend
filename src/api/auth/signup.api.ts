import { authClient } from "@/src/libs/authclient";
import { SignUpInterface } from "../../model/types/signup.type";

export default async function SignUpEmailApi(accountData: SignUpInterface){
    const { name, email, password } = accountData;

    const { data, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        callbackURL: `${process.env.NEXT_PUBLIC_CALLBACK_URL}/dashboard`
    })

    if(error){
        alert(error.message);
        return false;
    } else {
        console.log("Sign up successfully: \nData: ", data.user);
        return true;
    }
}