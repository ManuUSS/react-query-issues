import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { IIssue } from '../interfaces';
import { sleep } from '../../helpers/sleep';


const getIssues = async ():Promise<IIssue[]> => {
    await sleep( 2 );
    const { data } = await githubApi.get<IIssue[]>('/issues')

    return data;

}


export const useIssues = () => {

    const issuesQuery = useQuery(
        ['issues'],
        getIssues
    )

    return {
        issuesQuery
    }

}
