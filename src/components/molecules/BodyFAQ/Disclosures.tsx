import { Icon } from '@iconify/react/dist/iconify.js'
import { Disclosure } from '@headlessui/react'
import type { ListType } from './types'
import { Paragraf } from '../../atoms'

export default function Disclosures ({ title, body }: ListType): JSX.Element {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex w-full justify-between rounded-lg p-4 text-left font-medium'>
              <Paragraf content={ title } />
              <Icon icon='ci:chevron-right'
                className={`duration-300 ${
                  open ? '-rotate-90' : 'rotate-90'
                } h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pb-2 pt-4'>
              {body}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
