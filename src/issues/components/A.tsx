import { ChangeEvent, useContext } from "react";
import { ABContext } from "./AB";

interface Props {
    value: string;
}

export const A = ({ value }:Props) => {

    const { fieldValue, setFieldValue,name } = useContext( ABContext );
    
    const onChange = ( e:ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        setFieldValue( target.value );
    }


    return (
        <div className={`ft-radio-group__item ${ fieldValue === value ? 'ft-radio-group__item--active' : '' }`}>
            <input 
                type="radio" 
                id={ value } 
                name={ name } 
                value={ value } 
                onChange={ onChange }
                className='ft-radio-group__input'
            />
            <label htmlFor={ value }>{ value }</label>
        </div>
    )
}
