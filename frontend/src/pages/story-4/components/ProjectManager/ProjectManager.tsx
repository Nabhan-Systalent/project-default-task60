'use client';

import React from 'react';
import { ProjectListProps } from './ProjectManager.types';

export const ProjectManager: React.FC<ProjectListProps> = ({
  projects,
  isLoading = false,
  error,
  onCreateProject,
}) => {
  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center p-8 text-[var(--color-text-secondary)]">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-[var(--color-error)] bg-[var(--color-error-bg)] p-4 text-[var(--color-error)]">
        Error loading projects: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
        <button
          onClick={onCreateProject}
          className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-white hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[var(--color-border)] p-12 text-center">
          <p className="text-[var(--color-text-secondary)]">No projects found. Start by creating one.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
              <p className="mt-2 flex-grow text-sm text-[var(--color-text-secondary)]">
                {project.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
                <span>{project.memberCount} members</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
