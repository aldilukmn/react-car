import { Button, HeadingTwo, Paragraf } from '../../atoms'
import { btnName, content, title } from './data'

export default function BodyBanner (): JSX.Element {
  return (
    <>
      <section className='mt-20 border mx-5 lg:mx-20 bg-primary text-white rounded-lg px-10 py-14 lg:p-20 text-center'>
        <HeadingTwo content={title} className='font-bold text-xl lg:text-3xl mb-5' />
        <Paragraf content={content} className='mx-5 lg:mx-52 opacity-80 mb-10 text-sm lg:text-base' />
        <Button name={btnName} className='bg-secondary duration-150 px-5 py-2 rounded' onClick={() => {
          console.log('ok')
        }} />
      </section>
    </>
  )
}
