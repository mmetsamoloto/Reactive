import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../Model/Activities';
import NavBar from './Navbar';
import { Container } from "semantic-ui-react";
import ActivitiesDashboard from '../../Features/activities/dashboard/ActivitiesDashboard';
import ActivityDashboard from '../../Features/activities/dashboard/ActivitiesDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {

      setActivities(response.data);
    })
  }, [])
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        {
          <ActivityDashboard activities={activities} />
        }
      </Container>
    </>
  );
}
export default App;
