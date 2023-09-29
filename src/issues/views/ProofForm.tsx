import { ChangeEvent, FormEvent, useState } from 'react';
import { AB } from '../components/AB';
import { A } from '../components/A';

export const ProofForm = () => {

    const [ object, setObject ] = useState<{ value: any }>({ value: '' });

    const onChange = ( e:ChangeEvent<HTMLInputElement> ) => {
        const { target } = e;
        setObject({ value:target.value });
      }
    
      const onSubmitForm = ( e: FormEvent<HTMLFormElement> ) => {
          e.preventDefault();
          console.log( object );
      }

    return (
        <div className="container mt-3">
            <div className="row mt-5">
                <form noValidate onSubmit={ onSubmitForm }>
                    <AB 
                        label='Select a drone:' 
                        value={ object.value }
                        name='drone'
                        onChange={ onChange }
                    >
                        <A value='DJI'/>
                        <A value='DJS'/>
                        <A value='DJO'/>
                        <A value='DJP'/>
                        <A value='DJQ'/>
                        <A value='DJR'/>
                        <A value='DJM'/>
                        <A value='DJT'/>
                    </AB>
                    <div className='d-block mt-3'>
                        <input className='btn btn-primary' type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </div>
      )
}
