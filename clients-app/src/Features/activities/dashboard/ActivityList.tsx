import React from "react";
import { Button, Item, ItemHeader, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Model/Activities";


interface Props {

    activities: Activity[];
}
export default function ActivityList({ activities }: Props) {

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
                            <div>{activity.city},{activity.vanue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' content='View' color='blue' />
                            <Label basic content={activity.category} />

                        </Item.Extra>

                    </Item.Content>

                </Item>))}

            </Item.Group>
        </Segment>

    )
}


