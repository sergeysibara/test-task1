import { Container } from 'reactstrap';
import { TabsContainer } from 'components/tabs/TabsContainer';
import { TabPanel } from 'components/tabs/TabPanel';
import { Tab1Content } from './Tab1Content';

const tabs = [
  { key: 'tab1', text: 'Tab 1' },
  { key: 'tab2', text: 'Tab 2' },
  { key: 'tab3', text: 'Tab 3' },
];

export function Page() {
  return (
    <Container fluid>
      <br />
      <TabsContainer tabs={tabs}>
        <br />
        <TabPanel tabId={tabs[0].key}>
          <Tab1Content />
        </TabPanel>

        <TabPanel tabId={tabs[1].key}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
        </TabPanel>

        <TabPanel tabId={tabs[2].key}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing 2 ...</p>
        </TabPanel>
      </TabsContainer>
    </Container>
  );
}
