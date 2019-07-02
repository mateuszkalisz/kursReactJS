import React from 'react';

const Article = (props) => {
    
    const styles = {
        marginTop: 50,
    }

    return (
        <div style={styles}>
            <h3
            style={{
                marginBottom: 3,
                textTransform: "uppercase",
            }} 
            >{props.title}</h3>
            <span>{props.author}</span>
            <p style={{fontSize: 16}}>{props.content}</p>
        </div>
    );
}
 
export default Article;