import { ReactNode } from 'react';
import { Col, Row, TabPane } from 'reactstrap';

interface ITabPanelProps {
  children: ReactNode;
  tabId: string;
}

export function TabPanel({ children, tabId }: ITabPanelProps) {
  return (
    <TabPane tabId={tabId}>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </TabPane>
  );
}
