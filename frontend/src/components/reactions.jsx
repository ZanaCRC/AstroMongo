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
        <div style={{ ...styles.reactions }}>
        <div style={styles.buttons}>
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
        </div>
    );
}

const styles = {
    reactions: {
        justifyContent: 'center',
        paddingBottom: 0,
        minHeight: '45px',
        margin: 0,
        padding: '3px 0',
        display: 'flex'
    },
    buttons: {
        borderTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        width: '100%',  
        display: 'flex',
        margin:    0,
        lineHeight: 1,
        position: 'relative'
    },
};

export default Reactions;
