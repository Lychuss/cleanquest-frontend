"use client";

import { useEffect } from "react";
import { authClient } from "../libs/authclient";

export default function SyncId(){

    const { data: session } = authClient.useSession();

    useEffect(() => {
        if(session?.user?.id){
            localStorage.setItem("userId", session.user.id);
        }
    }, [session])

    return null;
}