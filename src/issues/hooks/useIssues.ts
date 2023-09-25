import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { IIssue } from '../interfaces';


const getIssues = async ():Promise<IIssue[]> => {

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
