import OptionBox from './OptionBox'
import { driverOptions, passengerOptions, timeOptions } from './data'
import { useSelected } from './hooks'

export default function BodySearchBox (): JSX.Element {
  const { selectedDriver, setSelectedDriver, selectedTime, setSelectedTime, selectedPassenger, setSelectedPassenger } = useSelected()
  return (
    <>
      <section className='mx-20 flex justify-between'>
        <OptionBox selected={ selectedDriver } setSelected={ setSelectedDriver } options={ driverOptions } iconName='ci:chevron-down'/>
        <OptionBox selected={ selectedDriver } setSelected={ setSelectedDriver } options={ driverOptions } iconName='ci:chevron-down'/>
        <OptionBox selected={ selectedTime } setSelected={ setSelectedTime } options={ timeOptions } iconName='mingcute:time-line' />
        <OptionBox selected={ selectedPassenger } setSelected={ setSelectedPassenger } options={ passengerOptions } iconName='lucide:users' />
      </section>
    </>
  )
}
