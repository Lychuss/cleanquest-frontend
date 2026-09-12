"use client";

import Loading from "@/src/components/layouts/loading";

import { useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import CompletedQuest from "@/src/api/data/quest.api";

function compressImage(file: File, maxDimension = 1024, quality = 0.7): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            img.src = e.target?.result as string;
        };
        reader.onerror = reject;

        img.onload = () => {
            let { width, height } = img;

            if (width > height && width > maxDimension) {
                height *= maxDimension / width;
                width = maxDimension;
            } else if (height > maxDimension) {
                width *= maxDimension / height;
                height = maxDimension;
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
                reject(new Error("Could not get canvas context"));
                return;
            }
            ctx.drawImage(img, 0, 0, width, height);

            const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
            resolve(compressedDataUrl);
        };
        img.onerror = reject;

        reader.readAsDataURL(file);
    });
}

export default function CameraPage() {
    const router = useRouter();

    const params = useParams();
    const taskId = params.taskId as string;
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.click();
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            router.back();
            return;
        }

        try {
            const compressedDataUrl = await compressImage(file, 1024, 0.7);
            const base64Image = compressedDataUrl.split(",")[1];
            const data = await CompletedQuest(taskId, base64Image);

            if (data.success) {
                router.push("/valid");
            } else {
                router.push("/invalid");
            }
        } catch (err) {
            console.error("Image compression/upload failed:", err);
            router.push("/invalid");
        }
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