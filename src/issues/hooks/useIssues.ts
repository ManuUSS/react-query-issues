import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { IIssue, State } from '../interfaces';
import { sleep } from '../../helpers/sleep';

interface Props {
    state?: State;
    labels: string[];
}

const getIssues = async ():Promise<IIssue[]> => {
    await sleep( 2 );
    const { data } = await githubApi.get<IIssue[]>('/issues')
    return data;
}


export const useIssues = ({ state, labels }:Props) => {

    const issuesQuery = useQuery(
        ['issues', { state, labels }],
        getIssues
    )

    return {
        issuesQuery
    }

}
