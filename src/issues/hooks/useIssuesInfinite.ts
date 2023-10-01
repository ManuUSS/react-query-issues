import { useInfiniteQuery } from '@tanstack/react-query';
import { State } from '../interfaces';
import { getIssuesInfinite } from '../helpers/getIssues';

interface Props {
    state?: State;
    labels: string[];
    page?: number;
}

export const useIssuesInfinite = ({ state, labels }: Props ) => {



    const issuesQuery = useInfiniteQuery(
        ['issues', { state, labels, page: 1 }],
        getIssuesInfinite,
        {
            getNextPageParam: ( lastPage, pages ) => {
                if( lastPage.length === 0 ) return;

                return pages.length + 1;

            }
        }
    )

    return {
        issuesQuery
    }

}
