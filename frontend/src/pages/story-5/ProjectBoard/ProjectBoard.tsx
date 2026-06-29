'use client';

import React from 'react';
import { ProjectBoardProps } from './ProjectBoard.types';

export const ProjectBoard: React.FC<ProjectBoardProps> = ({ 
  columns, 
  isLoading, 
  error,
  onTaskMove 
}) => {
  if (isLoading) {
    return (
      <div className="flex gap-4 p-6 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-80 h-96 bg-gray-200 rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-600 bg-red-50 rounded-lg">
        Error loading board: {error}
      </div>
    );
  }

  return (
    <div className="flex gap-6 p-6 overflow-x-auto min-h-screen bg-[var(--color-bg-secondary)]">
      {columns.map((column) => (
        <div 
          key={column.id} 
          className="flex flex-col w-80 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[var(--color-text-primary)]">{column.title}</h3>
            <span className="px-2 py-1 text-xs bg-[var(--color-bg-tertiary)] rounded-full">
              {column.tasks.length}
            </span>
          </div>
          
          <div className="flex-1 space-y-3">
            {column.tasks.length === 0 ? (
              <div className="h-24 flex items-center justify-center border-2 border-dashed border-[var(--color-border)] rounded text-[var(--color-text-tertiary)] text-sm">
                No tasks
              </div>
            ) : (
              column.tasks.map((task) => (
                <div 
                  key={task.id}
                  className="p-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg shadow-sm hover:border-[var(--color-primary)] transition-colors cursor-grab"
                >
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{task.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
