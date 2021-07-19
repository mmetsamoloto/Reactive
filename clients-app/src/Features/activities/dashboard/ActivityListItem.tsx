import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label } from 'semantic-ui-react';
import { Activity } from '../../../App/Model/Activities';
import { useStore } from '../../../App/stores/store';
import ActivityDetails from '../details/ActivitiesDetails';

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {

    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    const [target, setTarget] = useState('');

    // function handleDeleteActivity(e.syntheticEvent<HTMLButtonElement>, id: string) {
    //     setSyntheticTrailingComments(e.currentTarget.name);
    //     deleteActivity(id);

}

return (
    <Item key={activity.id}>
        <Item.Content>
            <Item.Header as='a'>{ActivityDetails.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city},{activity.venue}</div>
            </Item.Description>
            <Item.Extra>
                <Button as={Link} to={'/activities/$activity.id'} floated='right' />
                <Button
                    name={activity.id}
                    loading={loading && target === ActivityDetails.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    floated='right'
                    content='Delete'
                    color='red'
                />
                <Label basic content={ActivityDetails.category} />

            </Item.Extra>
        </Item.Content>
    </Item>

)
}