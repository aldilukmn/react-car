export interface UseSelectedType {
  selectedDriver: DriverOptionType
  setSelectedDriver: (driver: DriverOptionType) => void
  selectedTime: TimeOptionType
  setSelectedTime: (time: TimeOptionType) => void
  selectedPassenger: PassengerOptionType
  setSelectedPassenger: (passenger: PassengerOptionType) => void
}

export interface UseSelected {
  selected: DriverOptionType | TimeOptionType | PassengerOptionType
  setSelected: (select: DriverOptionType | TimeOptionType | PassengerOptionType) => void
  options: DriverOptionType[] | TimeOptionType[] | PassengerOptionType[]
  iconName: string
}

export interface DriverOptionType {
  option: string
}

export interface TimeOptionType {
  option: string
}

export interface PassengerOptionType {
  option: string
}

export interface SelectedType {
  option: string
}
