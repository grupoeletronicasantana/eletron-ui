import React, { useState, createContext, useContext, ReactNode } from "react";
import {
  TabsContainer,
  TabTrigger,
  TabsListContainer,
  TabContent,
} from "./styles";

interface TabsContextType {
  activeTab: string;
  variant: "line" | "enclosed";
  setActiveTab: (value: string) => void;
}

interface TabsProps {
  defaultValue?: string;
  variant?: "line" | "enclosed";
  children: [
    React.ReactElement<TabsListProps>,
    ...React.ReactElement<TabsContentProps>[]
  ];
}

interface TabsListProps {
  children: React.ReactElement<TabsTriggerProps>[];
}

interface TabsTriggerProps {
  value: string;
  children: string;
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

const Tabs = ({ variant = "line", defaultValue, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultValue || children[1].props.value
  );

  return (
    <TabsContext.Provider value={{ variant, activeTab, setActiveTab }}>
      <TabsContainer>{children}</TabsContainer>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: TabsListProps) => {
  const { variant } = useTabsContext();
  return <TabsListContainer $variant={variant}>{children}</TabsListContainer>;
};

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { activeTab, setActiveTab, variant } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <TabTrigger
      $variant={variant}
      $isActive={isActive}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </TabTrigger>
  );
};

const TabsContent = ({ value, children }: TabsContentProps) => {
  const { activeTab } = useTabsContext();
  return activeTab === value ? <TabContent>{children}</TabContent> : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
