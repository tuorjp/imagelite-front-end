'use client'

import { useState } from "react"
import { Template } from "../components/Template"
import { InputText } from "../components/InputText"
import { Button } from "../components/Button"

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState, setNewUserState] = useState<boolean>(false)
    
    return (
        <Template loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-1xl leading-9 tracking-tight text-gray-900">
                        {newUserState ? 'Create new User' : 'Login to your Account'}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2">
                        {
                            newUserState &&
                            <>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Name: </label>
                                </div>
                                <div className="mt-2">
                                    <InputText style="w-full" id="name" />
                                </div>
                            </>
                        }

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email: </label>
                        </div>
                        <div className="mt-2">
                            <InputText style="w-full" id="email" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password: </label>
                        </div>
                        <div className="mt-2">
                            <InputText style="w-full" id="password" type="password" />
                        </div>

                        {
                            newUserState &&
                            <>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Password Match: </label>
                                </div>
                                <div className="mt-2">
                                    <InputText style="w-full" id="passwordMatch" type="password" />
                                </div>
                            </>
                        }

                        <div>
                            {newUserState && 
                                <>
                                    <Button type="button" color='bg-red-700' hover="bg-red-500" label="Cancel" style="mx-2" onClick={() => setNewUserState(false)} />
                                    <Button type="submit" color='bg-indigo-700' hover="bg-indigo-500" label="Save" />
                                </>
                            }
                            {!newUserState && 
                                <>
                                    <Button type="button" color='bg-red-700' hover="bg-red-500" label="Sign up" style="mx-2" onClick={() => setNewUserState(true)} />
                                    <Button type="submit" color='bg-indigo-700' hover="bg-indigo-500" label="Login" />
                                </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )
}