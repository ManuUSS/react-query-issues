import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { IIssue } from '../interfaces';
import { FC } from 'react';

interface Props {
    issue: IIssue
}

export const IssueItem:FC<Props> = ({ issue }) => {
    const { state, user, title, number } = issue;
    
    return (
        <div className="card mb-2 issue">
            <div className="card-body d-flex align-items-center">
                { 
                    state === 'open'
                    ? ( <FiInfo size={30} color="red" /> )
                    : ( <FiCheckCircle size={30} color="green" /> )
                }

                <div className="d-flex flex-column flex-fill px-2">
                    <span>{ title }</span>
                    <span className="issue-subinfo">#{ number } opened 2 days ago by <span className='fw-bold'>{ user.login }</span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <img src={ user.avatar_url } alt="User Avatar" className="avatar" />
                    <span className='px-2'>2</span>
                    <FiMessageSquare />
                </div>

            </div>
        </div>
    )
}
