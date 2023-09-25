import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { Loading } from '../../shared/components/Loading';


export const ListView = () => {

  const [ selectedLabels, setSelectedLabels ] = useState<string[]>( [] );
  const { issuesQuery } = useIssues();

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
           : ( <IssueList /> )
        }
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
