import { Icon } from '@iconify/react/dist/iconify.js'
import { HeadingOne, HeadingTwo, Paragraf } from '../../atoms'
import { body, contentCard, title } from './data'

export default function BodyWhyUs (): JSX.Element {
  return (
    <>
      <div className='mt-20 lg:mt-36 mx-5 lg:mx-20'>
        <HeadingTwo content={title} className='font-bold text-2xl mb-5' />
        <Paragraf content={body} className='mb-10' />
        <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {
          contentCard.map((data, index) => (
            <div key={index} className='border p-5 rounded-lg hover:scale-105 hover:lg:scale-110 duration-300 shadow delay-100 hover:-translate-y-3'>
              <div className={`${data.className} w-fit p-2 text-white mb-5 rounded-full`}>
                <Icon icon={data.iconName} width={25}/>
              </div>
              <HeadingOne content={data.title} customStyle='text-xl mb-5' />
              <Paragraf content={data.body} />
            </div>
          ))
          }
        </section>
      </div>
    </>
  )
}
