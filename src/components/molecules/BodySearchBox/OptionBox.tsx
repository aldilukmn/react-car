import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import type { UseSelected } from './types'

export default function OptionBox ({ selected, setSelected, options, iconName }: UseSelected): JSX.Element {
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-64 cursor-default border border-gray-400 rounded bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected?.option}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon icon={iconName} width={20} className="duration-300 text-gray-600" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options?.map((val, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-third text-indigo-500' : 'text-gray-900'
                    }`
                  }
                  value={val}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {val.option}
                      </span>
                      {selected
                        ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500">
                          <Icon icon="material-symbols:check" width={20} />
                        </span>)
                        : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}
