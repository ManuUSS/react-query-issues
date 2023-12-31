import { Link, Navigate, useParams } from 'react-router-dom';
import { useIssue } from '../hooks';
import { IssueComment } from '../components/IssueComment';
import { Loading } from '../../shared/components/Loading';


export const IssueView = () => {

  const params = useParams();
  const { id = '0' } = params;

  const { issueQuery, commentsQuery } = useIssue( +id );
  const { isLoading, data } = issueQuery;

  if( isLoading ) return ( <Loading /> )

  if( !data ) return ( <Navigate to="./issues/list" /> )

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>
      <div className='mb-3'>
        <IssueComment issue={ data! }/>
      </div>
      { 
        commentsQuery.isLoading && ( <Loading /> )
      }
      {
        commentsQuery.data && 
        (
          <div className="d-flex flex-column gy-2 mt-3">
            <p className="h5">Comments</p>
            {
              commentsQuery.data?.map(( issue ) => (
                <IssueComment key={ issue.id } issue={ issue } />
              ))
            }
          </div>
        )
      }
    </div>
  )
}
