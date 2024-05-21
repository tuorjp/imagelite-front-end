'use client'

import { Template } from '../components/Template'
import { ImageCard } from '../components/ImageCard'
import { useImageService } from '../resources/image/image.services'
import { Image } from '../resources/image/image.resource'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/Button'
import { InputText } from '../components/InputText'
import { useNotification } from "../utils/notifications"

export default function GaleriaPage() {
    const [images, setImages] = useState<Image[]>([])
    const [query, setQuery] = useState<string>()
    const [extension, setExtension] = useState<string>()
    const [load, setLoad] = useState(false)
    const useService = useImageService()
    const notification = useNotification()
    
    async function searchImages() {
        setLoad(true)
        const imagesResponse = await useService.buscar(query, extension)

        if(!imagesResponse.length) {
            notification.notify('No results found', 'warning')
        }

        setImages(imagesResponse)
        setLoad(false)
        console.table(imagesResponse)
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
        return images.map((img, i) => renderImageCard(img))
    }

    return (
        <Template loading={load}>
            <section className='flex flex-col items-center justify-center my-5'>
                <div className='flex space-x-4'>
                    <InputText placeholder='Type name or Tags' onChange={event => setQuery(event.target.value)}/>
                    <select 
                        className='border px-4 py-2 rounded-md text-gray-900' 
                        onChange={ev => setExtension(ev.target.value)}
                    >
                        <option value="">All formats</option>
                        <option value="PNG">PNG</option>
                        <option value="JPEG">JPEG</option>
                        <option value="GIF">GIF</option>
                    </select>
                    <Button onClick={searchImages} color='bg-blue-500' label='Search' hover='bg-blue-300'/>
                    <Link href="/formulario">
                        <Button color='bg-green-500' hover='bg-green-300' label='Add new'/>
                    </Link>
                </div>
            </section>
            <section className='grid grid-cols-3 gap-8'>
                {renderImageCards()}
            </section>
        </Template>
    )
}