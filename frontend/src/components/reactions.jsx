import React, { useState } from 'react';

function Reactions({ postId, likes: initialLikes }) {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    return (
        <div style={styles.reactions}>
            <button 
                style={{
                    ...styles.button,
                    color: liked ? '#e91e63' : '#666'
                }} 
                onClick={handleLike}
            >
                {liked ? '❤️' : '🤍'} {likes}
            </button>
            <button style={styles.button}>💬 Comentar</button>
            <button style={styles.button}>🔄 Repostear</button>
            <button style={styles.button}>📤 Compartir</button>
        </div>
    );
}

const styles = {
    reactions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '8px',
    },
    button: {
        background: 'none',
        border: 'none',
        color: '#666',
        cursor: 'pointer',
        fontSize: '0.9rem',
        padding: '4px 8px',
        borderRadius: '4px',
        transition: 'background-color 0.2s',
    },
};

export default Reactions;
