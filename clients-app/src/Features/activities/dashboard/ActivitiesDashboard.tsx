import React, { useEffect } from 'react';
import { Grid, } from 'semantic-ui-react';
import LoadingComponent from '../../../App/layout/LoadingComponent';
import { Activity } from '../../../App/Model/Activities';
import { useStore } from '../../../App/stores/store';
import ActivityList from './ActivityList';


interface Props {
    activities: Activity[];
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;


}
export default function ActivityDashboard({ activities, createOrEdit, deleteActivity, submitting }: Props) {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;


    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />



    return (
        <Grid>

            <Grid.Column
                width='10'>
                <ActivityList activities={activities}
                    deleteActivity={deleteActivity} />

            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Actvity filters</h2>



            </Grid.Column>

        </Grid>
    )
}