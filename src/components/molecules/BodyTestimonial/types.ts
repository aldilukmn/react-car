import type { Swiper as SwiperType } from 'swiper'

export interface CardType {
  id: number
  review: string
  username: string
  age: number
  place: string
  photo: string
}

export interface HandleSwiperType {
  setSwiperRef: React.Dispatch<React.SetStateAction<SwiperType | null>>
  prevHandleSwiper: () => void
  nextHandleSwiper: () => void
}

export interface SeeMoreModalBoxTtype {
  isOpen: boolean
  closeModal: () => void
  openModal: ({ id, review, username, age, place, photo }: CardType) => void
  userReview: CardType
}
