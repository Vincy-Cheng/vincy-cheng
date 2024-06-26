'use client';
import { useState, useEffect } from 'react';
import { Search, X } from 'tabler-icons-react';

import ProjectCard from '../components/ProjectCard';
import ScrollRow from '../components/ScrollRow';
import {
  webProjects,
  appProjects,
  otherProjects,
} from '../_hard-code.data.ts/project-info';
import { IProjectInfo } from '../_types';

type Props = {};

enum EProjectType {
  web = 'Web development',
  app = 'App development',
  other = 'Other Project',
}

const Project = (props: Props) => {
  const originalProjects: { type: EProjectType; content: IProjectInfo[] }[] = [
    { type: EProjectType.web, content: webProjects },
    { type: EProjectType.app, content: appProjects },
    { type: EProjectType.other, content: otherProjects },
  ];
  const [projects, setProjects] =
    useState<{ type: EProjectType; content: IProjectInfo[] }[]>(
      originalProjects,
    );

  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    setProjects(
      originalProjects.map((project) => ({
        type: project.type,
        content: project.content.filter((p) =>
          p.tags.some((tag) => tag.includes(searchInput)),
        ),
      })),
    );
  }, [searchInput]);

  return (
    <div className="w-full">
      <div className="flex items-center p-2 w-fit">
        {/* Search bar */}
        <div className="flex items-center space-x-2 grow">
          <Search className="text-secondary-50 p-1" />
          <input
            type="text"
            className="outline-none bg-transparent text-secondary-100 placeholder:text-secondary-200 placeholder:text-sm dark:placeholder:text-secondary-400"
            placeholder="Searching tag"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        {searchInput && (
          <X
            className="p-1 text-secondary-100 cursor-pointer rounded-full hover:bg-secondary-300 dark:hover:bg-secondary-700"
            onClick={() => {
              setSearchInput('');
            }}
          />
        )}
      </div>

      <div className="pt-5 sm:pl-0 pl-2">
        {projects.map((project, index) => (
          <div key={project.type + index}>
            {project.content.length > 0 && (
              <>
                <div className="border-b border-primary-500 text-lg ">
                  {project.type}
                </div>
                <ScrollRow>
                  <>
                    {project.content.map((projectDetail) => (
                      <ProjectCard
                        key={project.type + '-key-' + projectDetail.name}
                        name={projectDetail.name}
                        tags={projectDetail.tags}
                      />
                    ))}
                  </>
                </ScrollRow>
              </>
            )}
          </div>
        ))}

        {projects.every((project) => project.content.length === 0) &&
          'Sorry no result found :('}
      </div>
    </div>
  );
};

export default Project;
