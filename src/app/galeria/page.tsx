'use client'

import { Template } from '../components/Template'
import { ImageCard } from '../components/ImageCard'
import { useImageService } from '../resources/image/image.services'
import { Image } from '../resources/image/image.resource'
import { useState } from 'react';

export default function GaleriaPage() {
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>();
    const [extension, setExtension] = useState<string>();
    const useService = useImageService();
    
    async function searchImages() {
        const imagesResponse = await useService.buscar(query, extension);
        setImages(imagesResponse);
        console.table(imagesResponse);
    }

    function renderImageCard(img: Image) {
        return (
            <ImageCard 
                nome={img.name} 
                src={img.url} 
                tamanho={img.size} 
                dataUpload={img.uploadDate}
                key={img.url}
                extension={img.extension}
            />
        )
    }

    function renderImageCards() {
        return images.map((img, i) => renderImageCard(img));
    }

    return (
        <Template>
            <section className='flex flex-col items-center justify-center my-5'>
                <div className='flex space-x-4'>
                    <input 
                        type="text" 
                        className='border px-3 py-2 rounded-md text-gray-900'
                        onChange={ev => setQuery(ev.target.value)}
                    />
                    <select 
                        className='border px-4 py-2 rounded-md text-gray-900' 
                        onChange={ev => setExtension(ev.target.value)}
                    >
                        <option value="">All formats</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={searchImages}>
                        Search
                    </button>
                    <button className='bg-green-500 text-white px-4 py-2 rounded-md'>
                        Add image
                    </button>
                </div>
            </section>
            <section className='grid grid-cols-3 gap-8'>
                {renderImageCards()}
            </section>
        </Template>
    )
}