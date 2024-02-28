import type { CardType } from './types'
import userOne from '../../../assets/img/photo_review_1.png'
import userTwo from '../../../assets/img/photo_review_2.png'

export const title = 'Testimonial'
export const body = 'Berbagai review positif dari pelanggan kami'
export const contentCard: CardType[] = [
  {
    id: 1,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 1',
    username: 'John Dee',
    age: 23,
    place: 'Bromo',
    photo: userOne
  },
  {
    id: 2,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 2',
    username: 'John Doe',
    age: 25,
    place: 'Miami',
    photo: userTwo
  },
  {
    id: 3,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 3',
    username: 'John Dee',
    age: 23,
    place: 'Bromo',
    photo: userOne
  },
  {
    id: 4,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 4',
    username: 'John Doe',
    age: 25,
    place: 'Miami',
    photo: userTwo
  }
]
