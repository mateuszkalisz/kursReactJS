import React from 'react';
import "./Word.css";

const Word = props =>(
<li>
    Słowo po angielsku <strong>{props.english}</strong>.
    Słowo po polsku <strong>{props.polish}</strong>
</li>
)

export default Word;