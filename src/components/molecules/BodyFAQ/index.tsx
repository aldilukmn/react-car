import { HeadingTwo, Paragraf } from '../../atoms'
import Disclosures from './Disclosures'
import { Lists, content, title } from './data'

export default function BodyFAQ (): JSX.Element {
  return (
    <>
      <section className='mx-5 lg:mx-20 flex flex-col lg:flex-row'>
        <section className='lg:w-1/2 text-center lg:text-start'>
          <HeadingTwo content={title} className='font-bold text-2xl mb-3' />
          <Paragraf content={content} className='mb-10 lg:mb-0' />
        </section>
        <section className='lg:w-1/2'>
          {
            Lists.map((list, index) => (
              <section key={index} className='mb-5 rounded-lg border'>
                <Disclosures title={ list.title } body={ list.body } />
              </section>
            ))
          }
        </section>
      </section>
    </>
  )
}
