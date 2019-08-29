import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

interface Props {
  darkModeDefault?: boolean;
}

export const App: React.FC<Props> = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main data-testid="application" className={darkMode ? 'darkmode' : undefined}>
          <Header {...{ darkMode, setDarkMode }} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
