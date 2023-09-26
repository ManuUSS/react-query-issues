import { useQuery } from '@tanstack/react-query';
import { IIssue } from '../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

const getIssueData = async ( issueNumber: number ):Promise<IIssue> => {
    await sleep( 2 );
    const { data } = await githubApi.get<IIssue>(`issues/${ issueNumber }`);
    return data;
}

const getIssueComments = async ( issueNumber: number ):Promise<IIssue[]> => {
    await sleep( 2 );
    const { data } = await githubApi.get<IIssue[]>(`issues/${ issueNumber }/comments`);
    return data;
}

export const useIssue = ( issueNumber: number ) => {

    const issueQuery = useQuery(
        ['issue', issueNumber ],
        () => getIssueData( issueNumber ),
    )

    return issueQuery

}
