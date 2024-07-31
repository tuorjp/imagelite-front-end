import { ImagesSkeleton } from "../ImagesSkeleton"
import { ToastContainer } from "react-toastify"
import { TextSkeleton } from "../TextSkeleton"
import Link from 'next/link'
import { useAuth } from "@/app/resources"
import { useRouter } from "next/navigation"

interface TemplateProps {
    children: React.ReactNode;
    loading?: boolean
}

export const Template: React.FC<TemplateProps> = ({children, loading = false}: TemplateProps) => {
    return (
        <>
            <Header />
            <div className={`${loading ? 'animate-pulse' : ''} container mx-auto mt-8 px-4 min-h-screen`}>
                {
                    loading && 
                    
                    <div>
                        <TextSkeleton />
                        <div className="text-center flex flex-col gap-4 items-center justify-start min-h-screen">
                        <ImagesSkeleton />
                        <ImagesSkeleton />
                        <ImagesSkeleton />
                        </div>
                    </div>
                }
                {!loading && children}
            </div>
            <Footer/>
            <ToastContainer 
                position="top-right" 
                autoClose={6000}
                hideProgressBar={false}
                draggable={false}
                closeOnClick={true}
                pauseOnHover={true}
            />
        </>
    )
}

const Header: React.FC = () => {
    const auth = useAuth()
    const router = useRouter()
    const user = auth.getUserSession()

    function logout() {
        auth.invalidateSession()
        router.push('/login')
    }

    return (
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href={"/galeria"}>
                    <h1 className="text-3xl font-bold">ImageLite</h1>
                </Link>
                { user && 
                    <div className="flex items-center">
                        <div className="relative">
                            <span className="w-64 py-3 px-6 text-md">Olá, {user?.name}</span>
                            <span className="w-64 py-3 px-6 text-sm">
                                <a href="#" onClick={logout}>Sair</a>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-950 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                Desenvolvido por João Pedro
            </div>
        </footer>
    )
}