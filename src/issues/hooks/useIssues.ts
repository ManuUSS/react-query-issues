import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { IIssue, State } from '../interfaces';
import { sleep } from '../../helpers/sleep';

interface Props {
    state?: State;
    labels: string[];
}

const getIssues = async( labels: string[], state?:State ):Promise<IIssue[]> => {
    await sleep( 2 );

    const params = new URLSearchParams();

    if(  state ) params.append( 'state', state );

    const { data } = await githubApi.get<IIssue[]>('/issues', { params })
    return data;
}


export const useIssues = ({ state, labels }:Props) => {

    const issuesQuery = useQuery(
        ['issues', { state, labels }],
        () => getIssues( labels, state )
    )

    return {
        issuesQuery
    }

}
