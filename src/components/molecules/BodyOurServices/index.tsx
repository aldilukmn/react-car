import { Icon } from '@iconify/react/dist/iconify.js'
import imageOurServices from '../../../assets/img/img_service.png'
import { HeadingOne, Image, Paragraf } from '../../atoms'
import { HeadingOneContent, listContent, paragrafContent } from './data'

export default function BodyOurServices (): JSX.Element {
  return (
    <>
      <div className='flex lg:flex-row flex-col items-center mt-20 gap-10'>
        <section className='w-7/12 lg:w-1/2'>
          <Image src={imageOurServices} alt='our-services-image' className='lg:ml-20 ' />
        </section>
        <section className='lg:w-1/2 mx-5 lg:mx-20'>
          <HeadingOne content={HeadingOneContent} customStyle='text-2xl mb-5' />
          <Paragraf content={paragrafContent} className='mb-5' />
            {
              listContent.map((list, index) => (
                <div key={index} className='flex gap-3 mb-3'>
                  <Icon icon='icon-park-solid:check-one' width={25} className='text-indigo-400' />
                  <Paragraf content={list.content} />
                </div>
              ))
            }
        </section>
      </div>
    </>
  )
}
