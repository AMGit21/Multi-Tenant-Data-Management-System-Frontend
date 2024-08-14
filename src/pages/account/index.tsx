import { Button } from "@/components/ui/button"
import "../../app/globals.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import SignUpForm from "@/components/signUpForm";
import SignInForm from "@/components/signInForm";
import './account.css';
import Image from 'next/image'
import imgbg from '@/assets/imgs/1.jpg';

export default function Account() {
    return (
        <div className="container">
            <Image src={imgbg} alt="data" className="imgbg" width={1500}
                height={1500} />
            <Tabs defaultValue="account" className="centered w-[500px] m-auto" >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account" style={{ color: 'rgb(43, 38, 70)' }}>Sign Up</TabsTrigger>
                    <TabsTrigger value="password" style={{ color: 'rgb(43, 38, 70)' }}>Sign In</TabsTrigger>
                </TabsList>
                <TabsContent value="account" >
                    <Card style={{ backgroundImage: 'linear-gradient(to top, #ffa590,  #f8e9fa, #ffffff)', opacity: 0.85 }}>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription style={{ color: 'rgb(43, 38, 70)' }}>
                                Create your account. Click submit when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <SignUpForm />
                        </CardContent>
                        <CardFooter>
                            <CardDescription style={{ color: 'rgb(43, 38, 70)' }}>
                                If you have an account, please sign in.
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card style={{ backgroundImage: 'linear-gradient(to top, #ffa590,  #f8e9fa, #ffffff)', opacity: 0.85 }}>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <CardDescription style={{ color: 'rgb(43, 38, 70)' }}>
                                Sign in to your account, if you don't have one, please sign up.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <SignInForm />
                        </CardContent>
                        <CardFooter>
                            <CardDescription style={{ color: 'rgb(43, 38, 70)' }}>
                                If you don't have an account, please sign up.
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
