import { Template } from '../components/Template'
import { ImageCard } from '../components/ImageCard'

export default function GaleriaPage() {
    return (
        <Template>
            <section className='grid grid-cols-3 gap-8'>
                <ImageCard 
                    src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    nome='exemplo' 
                    tamanho='10MB' 
                    dataUpload='01/01/2024'
                />
                <ImageCard 
                    src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    nome='exemplo' 
                    tamanho='10MB' 
                    dataUpload='01/01/2024'
                />
                <ImageCard 
                    src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    nome='exemplo' 
                    tamanho='10MB' 
                    dataUpload='01/01/2024'
                />
            </section>
        </Template>
    )
}