import React, { useState } from 'react';
import { updatePost } from '../services/api';

const EditPostForm = ({ post, onPostUpdated }) => {
  const [name, setName] = useState(post.name);
  const [description, setDescription] = useState(post.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(post.id, { name, description });
    onPostUpdated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginTop: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Actualizar
      </button>
    </form>
  );
};

export default EditPostForm;