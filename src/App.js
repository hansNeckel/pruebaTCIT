import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import EditPostForm from './components/EditPostForm';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const handlePostCreated = () => {
    setRefresh(!refresh);
    setIsModalOpen(false);
  };

  const handlePostUpdated = () => {
    setRefresh(!refresh);
    setIsEditModalOpen(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleEdit = (post) => {
    setPostToEdit(post);
    setIsEditModalOpen(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <PostList key={refresh} filter={filter} onFilterChange={handleFilterChange} onEdit={handleEdit}/>
      <button onClick={toggleModal} style={{display: 'block',margin: '20px auto',padding: '10px 20px',backgroundColor: '#00aaff',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer',}}>
        Crear
      </button>

      {isModalOpen && (
        <div style={{position: 'fixed',top: '0',left: '0',width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
          <div style={{backgroundColor: '#fff',padding: '20px',borderRadius: '10px',width: '400px',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',}}>
            <h2 style={{ textAlign: 'center', color: '#007acc' }}>Crear Post</h2>
            <PostForm onPostCreated={handlePostCreated} />
            <button onClick={toggleModal}style={{display: 'block',margin: '20px auto 0',padding: '10px 20px',backgroundColor: '#dc3545',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer',}}>
              Cancelar
            </button>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div style={{position: 'fixed',top: '0',left: '0',width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
        <div style={{backgroundColor: '#fff',padding: '20px',borderRadius: '10px',width: '400px',boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',}}>
          <h2 style={{ textAlign: 'center', color: '#007acc' }}>Editar Post</h2>
          <EditPostForm post={postToEdit} onPostUpdated={handlePostUpdated} />
          <button onClick={() => setIsEditModalOpen(false)}style={{display: 'block',margin: '20px auto 0',padding: '10px 20px',backgroundColor: '#dc3545',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer',}}>
            Cancelar
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;