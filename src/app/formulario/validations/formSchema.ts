import * as Yup from 'yup'

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const formSchema  :FormProps = { name: '', file: '', tags: '' }

export const formValidationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required('Name required!')
        .max(50, 'Name has the limit of 50 characters!'),
    tags: Yup.string().trim().required('Tags required!'),
    file: Yup
        .mixed<Blob>()
        .required('Select an Image to upload!')
        .test('size', 'File size cannot be more than 100 MB!', (file) => {
            return file.size < 100000000
        })
        .test('type', 'Accepted formats: jpeg, gif or png', (file) => {
            return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
        })
})