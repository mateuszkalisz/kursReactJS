import {useState, useEffect} from 'react';

const data = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
];

export const getData = () =>{
    return data;
};

export const getSingle = id =>{
    return data.find(item => item.id === id);
};

export const useSingleHook = id =>{
    const [data, setData] = useState();

    useEffect(()=>{
        // console.log('useEffect example of Hooks Component - custom hook');
        const setId = getSingle(id);
        setData(setId);

        // console.log('useEffect - component WIll unmount - custom hook');
    },[id])

    return data;
}