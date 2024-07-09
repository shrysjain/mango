import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesManager: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">My Notes</h2>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-gray-600">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesManager;
