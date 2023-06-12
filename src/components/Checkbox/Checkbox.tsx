import {FC, useCallback, useState} from 'react'
import { CheckboxProps } from "../../types/Checkbox.types"
import { CheckSvg } from '../../constants/icon'

const Checkbox: FC<CheckboxProps> = (props) => {
  const {id, inictalChecked, onchange} = props
  const [checked, setChecked] = useState(inictalChecked);

  const handleChange = useCallback(() => {
    setChecked(prevState => !prevState)
    onchange()
  }, [onchange])

  return (
    <div className='relative overflow-hidden'>
      <input className='absolute -left-96' id={id} type="checkbox" checked={checked} onChange={handleChange}/>
      <label 
        className='w-7 h-7 flex justify-center items-center rounded-full border-x border-y border-skin-main-color cursor-pointer checkbox' 
        htmlFor={id}
        >
          {checked && <CheckSvg />}
      </label>
    </div>
  )
}

export default Checkbox