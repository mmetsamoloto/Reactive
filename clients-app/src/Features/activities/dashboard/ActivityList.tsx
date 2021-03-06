import React from 'react';
import { observer } from "mobx-react-lite";
import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import ActivityListItem from "./ActivityListItem";


export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { activitiesByDate } = activityStore;

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    <ActivityListItem key={activity.id} activity={activity} />

                ))}
            </Item.Group>
        </Segment>
    )
})











