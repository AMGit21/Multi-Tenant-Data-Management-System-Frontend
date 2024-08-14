"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import './signUpForm.css'
import axios from "axios";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z
    .object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(6, {
            message: "Password must be at least 6 characters.",
        }),
        passwordConfirm: z.string(),
        emailAddress: z.string().email(),
        accountType: z.enum(["personal", "company"]),
        companyName: z.string().optional(),
    })
    .refine(
        (data) => {
            return data.password === data.passwordConfirm;
        },
        {
            message: "Passwords do not match",
            path: ["passwordConfirm"],
        }
    )
    .refine(
        (data) => {
            if (data.accountType === "company") {
                return !!data.companyName;
            }
            return true;
        },
        {
            message: "Company name is required",
            path: ["companyName"],
        }
    );

export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            emailAddress: "",
            password: "",
            passwordConfirm: "",
            companyName: "",
        },
    });

    const accountType = form.watch("accountType");

    const { toast } = useToast()
    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log({ values });
        try {
            toast({
                variant: "destructive",
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                    </pre>
                ),
                action: (
                    <ToastAction style={{ marginLeft: '-300px' }} altText="Go to schedule to undo">Undo</ToastAction>
                ),
            })

            const response = await axios.post("http://127.0.0.1:8000/register", {
                username: values.username,
                password: values.password,
            });
            console.log(response.data); // response.data contains the server's response
        } catch (error) {
            console.error("There was an error registering the user!", error);
        }
    };

    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ScrollArea className="h-[350px] pr-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="max-w-md w-full flex flex-col gap-4"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="label">User Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="User Name"
                                            type="text"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="FormDescription">
                                        This will be your database name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="label">Email address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Email address"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="FormDescription">
                                        Enter your email to send you a validation token.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="accountType"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="label">Account type</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an account type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="personal">Personal</SelectItem>
                                            <SelectItem value="company">Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription className="FormDescription">
                                        Select your account type if it is "Personal" or "Company".
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    {accountType === "company" && (
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="label">Company name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Company name" {...field} />
                                        </FormControl>
                                        <FormDescription className="FormDescription">
                                            Enter your company name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="label">Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" type="password" {...field} />
                                    </FormControl>
                                    <FormDescription className="FormDescription">
                                        This will be your database password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="label">Password confirm</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Password confirm"
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="FormDescription">
                                        You must confirm your password before continue.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <Button type="submit" className="w-full" style={{ backgroundColor: 'rgb(43, 38, 70)' }}>
                        Sign Up
                    </Button>
                </form>
            </Form>
        </ScrollArea >
        // </main>
    );
}