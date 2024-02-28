import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import type { CardType, HandleSwiperType, SeeMoreModalBoxTtype } from './types'

export function handleSwiper (): HandleSwiperType {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  const prevHandleSwiper = (): void => {
    swiperRef?.slidePrev()
  }

  const nextHandleSwiper = (): void => {
    swiperRef?.slideNext()
  }

  return {
    setSwiperRef,
    prevHandleSwiper,
    nextHandleSwiper
  }
}

export function seeMoreModalBox (): SeeMoreModalBoxTtype {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [userReview, setUserReview] = useState<CardType>({
    id: 0,
    review: '',
    username: '',
    age: 0,
    place: '',
    photo: ''
  })

  const closeModal = (): void => {
    setIsOpen(prev => !prev)
  }

  const openModal = ({ id, review, username, age, place, photo }: CardType): void => {
    setIsOpen(prev => !prev)
    setUserReview((state) => ({
      ...state,
      id,
      review,
      username,
      age,
      place,
      photo
    }))
  }

  return {
    isOpen,
    closeModal,
    openModal,
    userReview
  }
}
