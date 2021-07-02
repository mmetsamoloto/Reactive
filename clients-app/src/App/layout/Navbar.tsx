//import React from 'react';
import React from 'react';
import { Menu } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

interface Props {
    openForm: () => void;

}

export default function NavBar({ openForm }: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header><img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Reactities</Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button Onclick={openForm} positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu >
    )
}