import { Pagination } from 'swiper/modules'
import { Button, HeadingFour, HeadingTwo, Paragraf } from '../../atoms'
import { body, contentCard, title } from './data'
import { handleSwiper, seeMoreModalBox } from './hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { trimWords } from '../../../libs/trimWords'
import { screenSize } from '../../../libs/screenSize'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ModalBox from './modalBox'

export default function BodyTestimonial (): JSX.Element {
  const { setSwiperRef, prevHandleSwiper, nextHandleSwiper } = handleSwiper()
  const { width } = screenSize()
  const { isOpen, openModal, closeModal, userReview } = seeMoreModalBox()
  return (
    <>
      <section className='text-center'>
        <HeadingTwo content={title} className='font-bold text-2xl mb-5' />
        <Paragraf content={body} className='mb-10'/>
        <section className='flex mb-5'>
          <Swiper
            spaceBetween={40}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            onSwiper={(swiper) => {
              setSwiperRef(swiper)
            }}
          >
          {
            contentCard.map((data, index) => (
              <SwiperSlide key={index} className='border bg-third shadow-lg flex flex-col lg:flex-row items-center gap-5 lg:gap-10 lg:px-16 px-10 rounded-lg py-10'>
                <figure>
                  <img src={data.photo} alt={`${data.photo}`} className='lg:w-[200px]' />
                </figure>
                <section className='flex flex-col'>
                  <div className='flex text-yellow-500 mb-2 lg:justify-start justify-center'>
                    {
                      Array.from({ length: 5 }).map((_, index) => (
                        <div key={index}>
                          <Icon icon="material-symbols:star-rate" width={20} />
                        </div>
                      ))
                    }
                  </div>
                  <Paragraf content={width >= 769 ? `${trimWords(data.review, 30)} ...` : width <= 768 ? `${trimWords(data.review, 20)} ...` : ''} className='text-start mb-1' />
                  <Button name='Lebih banyak' className='self-start underline text-blue-700 mb-3' onClick={() => {
                    openModal({
                      id: data.id,
                      review: data.review,
                      username: data.username,
                      age: data.age,
                      place: data.place,
                      photo: data.photo
                    })
                  }} />
                  <HeadingFour content={`${data.username} ${data.age}, ${data.place}`} className='font-semibold text-start'/>
                </section>
              </SwiperSlide>
            ))
            }
            </Swiper>
        </section>
        <section className='flex gap-5 justify-center'>
          <Button name={<Icon icon="grommet-icons:form-previous" width={30} />} onClick={prevHandleSwiper} className='border p-1 rounded-full hover:bg-green-500 duration-300 hover:text-white' />
          <Button name={<Icon icon='grommet-icons:form-next' width={30}/>} onClick={nextHandleSwiper} className='border p-1 rounded-full hover:bg-green-500 duration-300 hover:text-white' />
        </section>
      </section>
      <ModalBox isOpen={isOpen} openModal={openModal} closeModal={closeModal} userReview={userReview} />
    </>
  )
}
