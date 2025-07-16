import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faGear, faBell, faImage } from '@fortawesome/free-solid-svg-icons'

const DevTools = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const fileInputRef = useRef(null);

  // Función para manejar la subida de imagen
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      console.log('📸 Imagen seleccionada:', file.name);
      // Aquí puedes agregar la lógica para subir la imagen
    }
  };

  // Función para crear post
  const handleCreatePost = () => {
    
  };

  // Función para ir a configuraciones
  const handleSettings = () => {

  };

  return (
    <div style={styles.devTools}>
        
        {/* Botón Crear Post */}
        <button
          onClick={handleCreatePost}
          disabled={isCreatingPost}
          style={styles.iconButton}
        >
          {isCreatingPost ? (
            <div style={styles.spinner}></div>
          ) : (
             <FontAwesomeIcon icon={faPlus} size="sm" style={{ color: "#ffffff" }} />
          )}
        </button>

        {/* Separador */}
        <div style={styles.separator}></div>

        {/* Botón Subir Imagen */}
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            style={styles.iconButton}
          >
            <FontAwesomeIcon icon={faImage} size="lg" style={{ color: "#ffffff" }} />
          </label>
          {selectedImage && (
            <div style={styles.notification}>
              <span style={styles.notificationText}>1</span>
            </div>
          )}
        </div>

        {/* Separador */}
        <div style={styles.separator}></div>

        {/* Botón Lista/Dashboard */}
        <button
          style={styles.iconButton}
        >
          <FontAwesomeIcon icon={faBell} size="lg" style={{ color: "#ffffff" }} />
        </button>

        {/* Separador */}
        <div style={styles.separator}></div>

        {/* Botón Configuraciones */}
        <button
          onClick={handleSettings}
          style={styles.iconButton}
        >
          <FontAwesomeIcon icon={faGear} size="lg" style={{ color: "#ffffff" }} />
        </button>

      </div>
    
  );
};


const styles = {
    devTools: {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        background: '#1a1a1a',
        borderRadius: '24px',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        height: '48px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid #333'
    },

    separator: {
        width: '1px',
        height: '20px',
        backgroundColor: '#444',
        margin: '0 4px'
    },

    iconButton: {
        height: '32px',
        width: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        background: 'transparent',
        color: '#ffffff',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#333'
        }
    },

    spinner: {
        width: '16px',
        height: '16px',
        border: '2px solid #ffffff',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    },

    notification: {
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        width: '16px',
        height: '16px',
        backgroundColor: '#ff4444',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    notificationText: {
        color: 'white',
        fontSize: '10px',
        fontWeight: 'bold'
    }
}

export default DevTools;
