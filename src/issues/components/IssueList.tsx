import { FC } from 'react';
import { IIssue, State } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
    issues: IIssue[];
    state?: State;
    onStateChange: ( newState?: State ) => void;
}

export const IssueList: FC<Props> = ({ issues, state, onStateChange }) => {


    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link active">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Open</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    issues.map( issue => (
                        <IssueItem key={ issue.id } issue={ issue } />
                    ))
                }                
            </div>
        </div>
    )
}
