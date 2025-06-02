import { LoginForm } from "@/components/forms/login-form";
import Image from "next/image";

export default function SignupPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-5 bg-[#242423]">
            <div className=" col-span-3">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-3xl">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-span-2">
                <div className="relative bg-red-300 h-full w-full flex items-center justify-center">
                    <Image
                        src="/login-image.webp"
                        alt="Image"
                        fill
                        className="dark:brightness-[0.2] dark:grayscale object-cover"
                    />
                </div>
            </div>
        </div>
    )
}