"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { registerSchema } from "@/lib/zod";

export function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            const signInResponse = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false
            })

            if (signInResponse?.ok) {
                toast.success("Login successfully")
                form.reset();
                router.push("/discover")
            } else {
                if(signInResponse?.error){
                    toast.error(signInResponse.error)
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while logging in. Please try again.");
        }
    };

    return (
        <div className="gap-6 flex flex-col">
            <div className="flex items-center justify-between pt-8">
                <Link href="/" className="text-lg font-bold text-white text-start">GUMROAD</Link>
                <Link href="/signup" className=" text-md text-white font-semibold underline">
                    Sign up
                </Link>
            </div>
            <h1 className="text-4xl font-semibold text-neutral-300 pt-8">Log in</h1>

            <div className="mt-6 flex flex-col gap-4">
                <Button variant="elevated" className="w-full bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            fill="currentColor"
                        />
                    </svg>
                    Login with Google
                </Button>
                <Button variant="elevated" className="w-full bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            fill="currentColor"
                        />
                    </svg>
                    Login with GitHub
                </Button>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full " />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-[#242423] px-2 text-sm text-muted-foreground">or</span>
                    </div>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} className="border-neutral-500 text-white font-medium" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" type="password" {...field} className="border-neutral-500 text-white font-medium" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full" variant="outline">
                            {loading && (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            )}
                            Login
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}






