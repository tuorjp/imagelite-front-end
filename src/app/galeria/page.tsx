import { Template } from '../components/Template'
import { ImageCard } from '../components/ImageCard'
import { useImageService } from '../resources/image/image.service'
import { Image } from '../resources/image/image.resource'
import { useState } from 'react';

export default function GaleriaPage() {
    const [images, setImages] = useState<Image[]>([]);
    const useService = useImageService();
    
    async function searchImages() {
        const imagesResponse = await useService.buscar();
        setImages(imagesResponse);
        console.table(imagesResponse);
    }

    function renderImageCard(img: Image, i: number) {
        return (
            <ImageCard 
                nome={img.name} 
                src={img.url} 
                tamanho={img.size} 
                dataUpload={img.uploadDate}
                key={i}
            />
        )
    }

    function renderImageCards() {
        return images.map((img, i) => renderImageCard(img, i));
    }

    return (
        <Template>
            <section className='grid grid-cols-3 gap-8'>
                {renderImageCards()}
            </section>
        </Template>
    )
}