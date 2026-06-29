import React from 'react';
import { MemberList } from './components/MemberList/MemberList';

/**
 * Page for story-3 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    members: [],
    isLoading: false,
    onUpdateRole: () => {},
    onRemoveMember: () => {},
  };
  return (
    <div>
      <h1>Story 3</h1>
      <MemberList {...props} />
    </div>
  );
}
