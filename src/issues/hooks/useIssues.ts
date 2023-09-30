import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { IIssue, State } from '../interfaces';
import { sleep } from '../../helpers/sleep';

interface Props {
    state?: State;
    labels: string[];
    page?: number;
}

const getIssues = async( { labels, state, page }:Props ):Promise<IIssue[]> => {
    await sleep( 2 );

    const params = new URLSearchParams();

    if( state ) params.append( 'state', state );

    if( labels.length > 0 ) {
        const labelString = labels.join(',');
        params.append( 'labels', labelString );
    }

    params.append( 'page', '1' );
    params.append( 'per_page', '5' );

    const { data } = await githubApi.get<IIssue[]>('/issues', { params })
    return data;
}


export const useIssues = ({ state, labels }:Props) => {

    const [ page, setPage] = useState<number>( 1 );

    const issuesQuery = useQuery(
        ['issues', { state, labels, page }],
        () => getIssues({ labels, state, page })
    )

    return {
        issuesQuery,
        page
    }

}
