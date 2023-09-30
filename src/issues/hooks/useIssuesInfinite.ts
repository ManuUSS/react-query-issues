import { useInfiniteQuery } from '@tanstack/react-query';
import { State } from '../interfaces';

interface Props {
    state?: State;
    labels: string[];
    page?: number;
}

export const useIssuesInfinite = ({ state, labels }: Props ) => {



    const issuesQuery = useInfiniteQuery(
        ['issues', { state, labels, page: 1 }],
        ()
    )

    return {

    }

}
