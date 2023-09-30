import { githubApi } from '../../api/githubApi';
import { IIssue, State } from '../interfaces';
import { sleep } from '../../helpers';

interface Props {
    state?: State;
    labels: string[];
    page?: number;
}

export const getIssues = async( { labels, state, page = 1 }:Props ):Promise<IIssue[]> => {
    await sleep( 2 );

    const params = new URLSearchParams();

    if( state ) params.append( 'state', state );

    if( labels.length > 0 ) {
        const labelString = labels.join(',');
        params.append( 'labels', labelString );
    }

    params.append( 'page', page.toString() );
    params.append( 'per_page', '5' );

    const { data } = await githubApi.get<IIssue[]>('/issues', { params })
    return data;
}