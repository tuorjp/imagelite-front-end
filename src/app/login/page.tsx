'use client'

import { useState } from "react"
import { Template } from "../components/Template"
import { FieldError, InputText } from "../components/InputText"
import { Button } from "../components/Button"
import { LoginForm, formScheme, validationScheme } from './formScheme'
import { useFormik } from "formik"
import { useAuth } from "../resources"
import { useRouter } from 'next/navigation'
import { AccessToken, Credentials } from "../resources/user/user.resources"
import { useNotification } from "../utils/notifications"

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false)
    const [newUserState, setNewUserState] = useState<boolean>(false)

    const auth = useAuth()
    const notification = useNotification()
    const router = useRouter()

    const { values, handleChange, handleSubmit, errors } = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit,
    })

    async function onSubmit(values: LoginForm) {
        if(!newUserState) {
            const credentials : Credentials = { email: values.email, password: values.password }

            try {
                const accessToken: AccessToken = await auth.authentication(credentials)
                router.push('/galeria')
            } catch (error: any) {
                const message = error?.message
                console.log(message)
                notification.notify(message, 'error')
            }
        }
    }
    
    return (
        <Template loading={loading}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-1xl leading-9 tracking-tight text-gray-900">
                        {newUserState ? 'Create new User' : 'Login to your Account'}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        {
                            newUserState &&
                            <>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Name: </label>
                                </div>
                                <div className="mt-2">
                                    <InputText style="w-full" id="name" value={values.name} onChange={handleChange}/>
                                    <FieldError error={errors.name}/>
                                </div>
                            </>
                        }

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email: </label>
                        </div>
                        <div className="mt-2">
                            <InputText style="w-full" id="email" value={values.email} onChange={handleChange}/>
                            <FieldError error={errors.email}/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password: </label>
                        </div>
                        <div className="mt-2">
                            <InputText style="w-full" id="password" type="password" value={values.password} onChange={handleChange}/>
                            <FieldError error={errors.password}/>
                        </div>

                        {
                            newUserState &&
                            <>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Password Match: </label>
                                </div>
                                <div className="mt-2">
                                    <InputText style="w-full" id="passwordMatch" type="password" value={values.passwordMatch} onChange={handleChange} />
                                    <FieldError error={errors.passwordMatch}/>
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