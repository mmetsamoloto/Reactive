import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../App/Model/Activities'

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''

    }
    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    };

    return (

        <Segment clearing>
            <Form onSubmit={handleSubmit} autoCOmplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' />
                <Form.TextArea placeholder='Description' value={activity.description} name='Description' />
                <Form.Input placeholder='Category' value={activity.category} name='Category' />
                <Form.Input placeholder='Date' value={activity.date} name='Date' />
                <Form.Input placeholder='City' value={activity.city} name='City' />
                <Form.Input placeholder='Venue' value={activity.venue} name='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )

}
