import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../Model/Activities';
import NavBar from './Navbar';
import { Container } from "semantic-ui-react";
import ActivityDashboard from '../../Features/activities/dashboard/ActivitiesDashboard';
import { v4 as uuid } from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {

      setActivities(response.data);
    })
  }, [])
  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));

  }
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }
  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }
  function handleFormClose() {
    setEditMode(false);

  }
  function handleCreateEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(x => activity.id, activity)])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }
  function handleDeleteActivty(id: string) {
    setActivities([...activities.filter(x => x.id !== id)]);
  }
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        {
          <ActivityDashboard activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateEditActivity}
            deleteActivity={handleDeleteActivty} />

        }
      </Container>
    </>
  );
}
export default App;
