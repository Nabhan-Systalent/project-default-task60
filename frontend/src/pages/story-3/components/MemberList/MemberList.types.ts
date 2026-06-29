export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  joinedAt: string;
}

export interface MemberListProps {
  members: WorkspaceMember[];
  isLoading?: boolean;
  onUpdateRole: (memberId: string, role: WorkspaceMember['role']) => void;
  onRemoveMember: (memberId: string) => void;
}
