import { Icon } from '@iconify/react/dist/iconify.js'
import imageOurServices from '../../../assets/img/img_service.png'
import { HeadingOne, Image, Paragraf } from '../../atoms'
import { HeadingOneContent, listContent, paragrafContent } from './hooks'

export default function BodyOurServices (): JSX.Element {
  return (
    <>
      <div className='flex items-center justify-center'>
        <section className='w-1/2'>
          <Image src={imageOurServices} alt='our-services-image' />
        </section>
        <section className='bg-blue-500 w-1/2'>
          <HeadingOne content={HeadingOneContent} customStyle='text-2xl' />
          <Paragraf content={paragrafContent} />
            {
              listContent.map((list, index) => (
                <div key={index} className='flex gap-3 mb-2'>
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
