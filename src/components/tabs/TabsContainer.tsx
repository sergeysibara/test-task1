import { ReactNode, useState } from 'react';
import classnames from 'classnames';
import {
  Nav,
  NavItem,
  NavLink, TabContent,
} from 'reactstrap';

export type TabsType = { key: string, text: string }[];

interface ITabsHeaderProps {
  tabs: TabsType;
  children: ReactNode;
}

export function TabsContainer({ tabs, children }: ITabsHeaderProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Nav tabs>
        {
          tabs.map((tab) => {
            return (
              <NavItem key={tab.key} role="button">
                <NavLink
                  className={classnames({ active: activeTab === tab.key })}
                  onClick={() => {
                    toggle(tab.key);
                  }}
                >
                  {tab.text}
                </NavLink>
              </NavItem>
            );
          })
        }
      </Nav>

      <TabContent activeTab={activeTab}>
        {children}
      </TabContent>
    </>
  );
}
