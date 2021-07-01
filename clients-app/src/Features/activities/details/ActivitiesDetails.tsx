import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { Activity } from '../../../App/Model/Activities'

interface Props {
    activity: Activity
}
export default function ActivityDetails({ activity }: Props) {
    return (
        <Card fluid>
            <Image src={'/assets/categoryImages/${activity.category}.jpg'} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group width='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}




