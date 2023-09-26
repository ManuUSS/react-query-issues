import { Link, Navigate, useParams } from 'react-router-dom';
import { useIssue } from '../hooks';
import { IssueComment } from '../components/IssueComment';
import { Loading } from '../../shared/components/Loading';


export const IssueView = () => {

  const params = useParams();
  const { id = '0' } = params;

  const issueQuery = useIssue( +id );
  const { isLoading, data } = issueQuery;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>
      { !data && !isLoading && (<Navigate  to="./issues/list" /> ) }
      {
        isLoading 
          ? ( <Loading /> )
          : ( <IssueComment issue={ data! }/> )
      }


      {/* Comentario de otros */}
      {/* <IssueComment body={ comment2 } />
      <IssueComment body={ comment3 } /> */}
    </div>
  )
}
