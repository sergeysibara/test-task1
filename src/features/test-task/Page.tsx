// import React, { ReactNode, useState } from 'react';
import {
  // TabContent,
  // TabPane,
  // // Nav,
  // // NavItem,
  // // NavLink,
  // Card,
  // CardTitle,
  // CardText,
  Row,
  Col,
  Container,
} from 'reactstrap';
// @ts-ignore
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab1Content } from './Tab1Content';

export function Page() {
  return (
    <Container fluid>
      <br />
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <Row>
            <Col>
              <Tab1Content />
            </Col>
          </Row>
        </TabPanel>
        <TabPanel>
          <Row>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
            </Col>
          </Row>
        </TabPanel>
        <TabPanel>
          <Row>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing 2 ...</p>
            </Col>
          </Row>
        </TabPanel>
      </Tabs>
    </Container>
  );
}
