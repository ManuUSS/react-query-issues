import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { IIssue, State } from '../interfaces';
import { getIssueData } from '../hooks/useIssue';

interface Props {
    issue: IIssue
}

export const IssueItem:FC<Props> = ({ issue }) => {
    
    const { state, user, title, number, comments } = issue;
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const onMouse = () => {
        queryClient.prefetchQuery(
            ['issue', issue.number],
            () => getIssueData( issue.number )
        )
    }

    return (
        <div 
            className="card mb-2 issue overflow-auto"
            onClick={ () => navigate(`/issues/issue/${ number }`)}
            onMouseEnter={ onMouse }
        >
            <div className="card-body d-flex align-items-center">
                { 
                    state === State.Open
                    ? ( <FiInfo size={30} color="red" /> )
                    : ( <FiCheckCircle size={30} color="green" /> )
                }

                <div className="d-flex flex-column flex-fill px-2">
                    <span>{ title }</span>
                    <span className="issue-subinfo">#{ number } opened 2 days ago by <span className='fw-bold'>{ user.login }</span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <img src={ user.avatar_url } alt="User Avatar" className="avatar" />
                    <span className='px-2'>{ comments }</span>
                    <FiMessageSquare />
                </div>

            </div>
        </div>
    )
}
