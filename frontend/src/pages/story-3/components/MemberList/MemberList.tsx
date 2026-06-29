import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({ 
  members, 
  isLoading, 
  onUpdateRole, 
  onRemoveMember 
}) => {
  if (isLoading) {
    return <div className="p-4 animate-pulse">Loading members...</div>;
  }

  if (!members.length) {
    return <div className="p-4 text-center text-slate-500">No members found.</div>;
  }

  return (
    <div className="overflow-hidden bg-white border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600 font-medium">
          <tr>
            <th className="p-4">Member</th>
            <th className="p-4">Role</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-slate-50/50">
              <td className="p-4">
                <div className="font-medium">{member.name}</div>
                <div className="text-slate-500">{member.email}</div>
              </td>
              <td className="p-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="bg-transparent border border-slate-300 rounded px-2 py-1 outline-none focus:border-blue-500"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
