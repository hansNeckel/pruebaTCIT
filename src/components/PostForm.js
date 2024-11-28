import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostForm = ({ onPostCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ name, description });
    onPostCreated();
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre</label>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required style={{width: '100%',padding: '8px',marginTop: '5px',borderRadius: '5px',border: '1px solid #ccc',}}/>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Descripción</label>
        <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} style={{width: '100%',padding: '8px',marginTop: '5px',borderRadius: '5px',border: '1px solid #ccc',resize: 'none',}}/>
      </div>
      <button type="submit" style={{width: '100%',padding: '10px',backgroundColor: '#00aaff',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer',}}>
        Crear
      </button>
    </form>
  );
};

export default PostForm;