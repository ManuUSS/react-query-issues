import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { Loading } from '../../shared/components/Loading';
import { State } from '../interfaces';

export const ListView = () => {

  const [ selectedLabels, setSelectedLabels ] = useState<string[]>( [] );
  const [ state, setState ] = useState<State>()
  const { issuesQuery, page, nextPage } = useIssues({ state, labels: selectedLabels });

  const onLabelChanged = ( labelName: string ) => {
    ( selectedLabels.includes(  labelName ) ) 
      ? setSelectedLabels( selectedLabels.filter( label => label !== labelName ) )
      : setSelectedLabels([ ...selectedLabels, labelName ])
  } 


  return (
    <div className="row mt-5">
      
      <div className="col-8">
        {
          issuesQuery.isLoading 
           ? ( <Loading /> )
           : ( 
              <IssueList 
                issues={ issuesQuery.data || [] }
                state={ state }
                onStateChange={ setState }
              /> 
            )
        }
        <div className='d-flex mt-2 justify-content-between align-items-center'>
          <button className='btn btn-outline-primary'>Prev</button>
          <span>{ page }</span>
          <button 
            className='btn btn-outline-primary'
            onClick={ nextPage }
          >Next</button>
        </div>
      </div>
      
      <div className="col-4">
        <LabelPicker 
          selectedLabels={ selectedLabels }
          onChange={ ( labelName ) => onLabelChanged( labelName ) }
        />
      </div>
    </div>
  )
}
