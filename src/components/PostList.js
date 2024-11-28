import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../services/api';

const PostList = ({ filter, onFilterChange, onEdit }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
  
    const handleDelete = async (id) => {
      await deletePost(id);
      fetchPosts();
    };
  
    const filteredPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Filtro de Nombre" value={filter} onChange={onFilterChange} style={{padding: '5px',marginRight: '10px',borderRadius: '4px',border: '1px solid #ccc',}}/>
        <button style={{padding: '5px 10px',borderRadius: '4px',border: 'none',backgroundColor: '#00aaff',color: '#fff',cursor: 'pointer',}}>
          Buscar
        </button>
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr key={post.id} style={{backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff',}}>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{post.name}</td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{post.description}</td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <button onClick={() => handleDelete(post.id)} style={{padding: '5px 10px',borderRadius: '4px',border: 'none',backgroundColor: '#dc3545',color: '#fff',cursor: 'pointer',}}>
                  Eliminar
                </button>
                <button onClick={() => onEdit(post)} style={{marginLeft: '10px',padding: '5px 10px',borderRadius: '4px',border: 'none',backgroundColor: '#007bff',color: '#fff',cursor: 'pointer',}}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;