import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { ILabel } from '../interfaces/label';

const getLabels = async ():Promise<ILabel[]> => {
    const { data } = await githubApi<ILabel[]>('/labels');
    console.log( data );
    return data;
}

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
          refetchOnWindowFocus: false
        }
    );

    return labelsQuery;

}
