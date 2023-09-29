import React, { ChangeEvent, Dispatch, FormEvent, createContext, useState } from 'react'
import { A } from './A';

interface Props {
    label: string;
    value: string | number;
    name: string;
    children: JSX.Element[];
    onChange:( e:ChangeEvent<any>) => void;
}

interface ContextProps {   
    fieldValue: string | number;
    setFieldValue: Dispatch<React.SetStateAction<string | number>>;
    name: string;
}

export const ABContext = createContext({} as ContextProps);

export const AB = ({ label, value, name, children, onChange }:Props) => {

    const [ fieldValue, setFieldValue ] = useState<typeof value>( value );

    return (
        <ABContext.Provider value={{ fieldValue, setFieldValue, name }}>
            <fieldset
                onChange={ onChange }
            >
                <legend>{ label }</legend>
                <div className='ft-radio-group'>
                    { children }
                </div>
            </fieldset>
        </ABContext.Provider>
    )
}
