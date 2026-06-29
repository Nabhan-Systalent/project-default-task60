import { Column } from './types';

export interface ProjectBoardProps {
  columns: Column[];
  isLoading?: boolean;
  error?: string | null;
  onTaskMove?: (taskId: string, targetColumnId: string) => void;
}
