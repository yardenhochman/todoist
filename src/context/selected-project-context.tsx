import React, { createContext, useContext, useState } from 'react';

export const SelectedProjectContext = createContext({} as ProjectContext);

export const SelectedProjectProvider: React.FC<Props> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('INBOX');

  return (
    <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue: ContextGetter = () => useContext(SelectedProjectContext);

interface Props {
  children: any;
}

interface ProjectContext {
  selectedProject: string;
  setSelectedProject(project: string): void;
}

interface Context {}
interface ContextGetter {
  (): ProjectContext;
}
