"use client";

import Loading from "@/src/components/layouts/loading";

import { useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import CompletedQuest from "@/src/api/data/quest.api";

export default function CameraPage() {
    const router = useRouter();
    
    const params = useParams();
    const taskId = params.taskId as string;
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.click();
    }, []);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            router.back(); 
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Image = reader.result as string;
            const data = await CompletedQuest(taskId, base64Image.split(",")[1]);

            if (data.success) {
                router.push("/valid");
            } else {
                router.push("/invalid");
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex items-center justify-center bg-black text-white w-full">
            <Loading />
            <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
        </div>
    );
}