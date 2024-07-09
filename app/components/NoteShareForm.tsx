import React, { useState } from 'react';
import axios from 'axios';

const NoteShareForm: React.FC = () => {
  const [noteId, setNoteId] = useState('');
  const [email, setEmail] = useState('');

  const handleShareNote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/notes/${noteId}/share`, { email });
      alert('Note shared successfully!');
    } catch (error) {
      console.error('Failed to share note:', error);
      alert('Failed to share note');
    }
  };

  return (
    <form onSubmit={handleShareNote} className="space-y-4">
      <input
        type="text"
        placeholder="Note ID"
        value={noteId}
        onChange={(e) => setNoteId(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <input
        type="email"
        placeholder="Recipient's Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Share Note
      </button>
    </form>
  );
};

export default NoteShareForm;
