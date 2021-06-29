//import React from 'react';
import React from 'react';
import { Menu } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";


export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header><img src="/assets/logo.png" alt="logo" />
                    Reactities</Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu >
    )
}