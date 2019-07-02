import React from 'react';

import Article from '../components/Article';

const article = [
    {
        id: 1,
        title: 'pierwszy artykul',
        author: 'pierwszy autor',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis voluptate explicabo, assumenda aspernatur perspiciatis temporibus placeat et similique sunt animi quod sit blanditiis exercitationem consequuntur distinctio sequi eius incidunt.'
    },
    {
        id: 2,
        title: 'drugi artykul',
        author: 'drugi autor',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis voluptate explicabo, assumenda aspernatur perspiciatis temporibus placeat et similique sunt animi quod sit blanditiis exercitationem consequuntur distinctio sequi eius incidunt.'
    },
    {
        id: 3,
        title: 'trzeci artykul',
        author: 'trzeci autor',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis voluptate explicabo, assumenda aspernatur perspiciatis temporibus placeat et similique sunt animi quod sit blanditiis exercitationem consequuntur distinctio sequi eius incidunt.'
    }
];


const HomePage = () => {

    const artList = article.map(item =>(
        <Article key={item.id} {...item}/>
    ))

    return ( 
        <div className="homePage">
            {artList}
        </div>
     );
}
 
export default HomePage;