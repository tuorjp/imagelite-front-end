import { Spinner } from "../Spinner";
import { ToastContainer } from "react-toastify"

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
                    <div className="text-center flex items-center justify-center min-h-screen">
                        <Spinner />
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
    return (
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">ImageLite</h1>
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