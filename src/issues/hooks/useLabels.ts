import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { ILabel } from '../interfaces/label';
import { sleep } from '../../helpers/sleep';

const getLabels = async ():Promise<ILabel[]> => {
    await sleep( 2 );
    const { data } = await githubApi<ILabel[]>('/labels?per_page=100');
    return data;
}

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            
            // placeholderData: [],
            // initialData: [], 
            refetchOnWindowFocus: false
        }
    );

    return labelsQuery;

}
