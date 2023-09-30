import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IIssue, State } from '../interfaces';
import { getIssues } from '../helpers/getIssues';

interface Props {
    state?: State;
    labels: string[];
    page?: number;
}


export const useIssues = ({ state, labels }:Props) => {

    const [ page, setPage] = useState<number>( 1 );

    useEffect(() => {
        setPage( 1 );
    }, [ state, labels ]);
    

    const issuesQuery = useQuery(
        ['issues', { state, labels, page }],
        () => getIssues({ labels, state, page })
    );

    const nextPage = () => {
        if( issuesQuery.data?.length === 0 ) return;
        setPage( page + 1 );
    }

    const prevPage = () => {
        if( page <= 1 ) return;
        setPage( page - 1 );
    }

    return {
        issuesQuery,
        page: issuesQuery.isFetching ? 'Loading': page,
        nextPage,
        prevPage
    }

}
