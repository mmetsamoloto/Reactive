import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container stylr={{ marginTop: '7em' }}>
            <h1>Home Page</h1>
            <h3>Go to<Link to='/activities'></Link></h3>
        </Container>
    )
}