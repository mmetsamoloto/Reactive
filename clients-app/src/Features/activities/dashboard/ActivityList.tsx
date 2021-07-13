import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, ItemHeader, Label, Segment } from "semantic-ui-react";
import { setSyntheticTrailingComments } from "typescript";
import { Activity } from "../../../App/Model/Activities";
import { useStore } from "../../../App/stores/store";


interface Props {

    activities: Activity[];
    deleteActivity: (id: string) => void;
}
export default function ActivityList({ activities, deleteActivity }: Props) {

    // function handleDeleteActivity(e.syntheticEvent<HTMLButtonElement>, id: string) {
    //     setSyntheticTrailingComments(e.currentTarget.name);
    //     deleteActivity(id);


    const { activityStore } = useStore();
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (<Item key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}

                        </Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city},{activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button as={Link} to={'/activities/${activity.id}'} floated='right' content='View' color='blue' />
                            <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                            <Label basic content={activity.category} />

                        </Item.Extra>

                    </Item.Content>

                </Item>))}

            </Item.Group>
        </Segment>

    )
}




