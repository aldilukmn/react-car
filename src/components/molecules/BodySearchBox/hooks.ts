import { useState } from 'react'
import type { TimeOptionType, DriverOptionType, UseSelectedType, PassengerOptionType } from './types'
import { driverOptions, passengerOptions, timeOptions } from './data'

export function useSelected (): UseSelectedType {
  const [selectedDriver, setSelectedDriver] = useState<DriverOptionType>(driverOptions[0])
  const [selectedTime, setSelectedTime] = useState<TimeOptionType>(timeOptions[0])
  const [selectedPassenger, setSelectedPassenger] = useState<PassengerOptionType>(passengerOptions[0])
  return {
    selectedDriver,
    setSelectedDriver,
    selectedTime,
    setSelectedTime,
    selectedPassenger,
    setSelectedPassenger
  }
}
