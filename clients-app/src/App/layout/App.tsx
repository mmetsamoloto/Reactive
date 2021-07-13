import React, { Fragment, useEffect, useState } from 'react';
import NavBar from './Navbar';
import { Container } from "semantic-ui-react";
import ActivityDashboard from '../../Features/activities/dashboard/ActivitiesDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../Features/home/HomePage';
import ActivityForm from '../../Features/activities/Form/ActivityForm';
import ActivityDetails from '../../Features/activities/details/ActivitiesDetails';


function App() {
  const location = useLocation();
  // const { activityStore } = useStore();
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>

              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/id']} component={ActivityForm} />

            </Container>
          </>


        )}
      />
    </>

  );
}

export default observer(App);

