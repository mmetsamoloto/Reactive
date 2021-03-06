//import React from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";



export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header><img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Reactities</Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities" />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu >
    )
}