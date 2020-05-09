import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {getSingle, useSingleHook} from '../utils';

const HookComponent = ({id}) =>{

    const [data, setData] = useState();
    const [dummyData, setDummyData] = useState(0);
    const hookData = useSingleHook(id);

    useEffect(()=>{
        // console.log('useEffect example of Hooks Component');
        const setId = getSingle(id);
        setData(setId);

        // return console.log('useEffect - component WIll unmount')
    },[id])

    const memoData = useMemo(()=>{
        // console.log('usememo runs')
        return getSingle(id);
    }, [id]);

    const handleClick = useCallback(() =>{
        setDummyData(dummyData+1);
    }, [dummyData]);

    return(
        <div>
            <pre>
            HookComponent Example:
            {JSON.stringify({data}, null, 2)}
            {JSON.stringify({memoData}, null, 2)}
            {JSON.stringify({hookData}, null, 2)}
            </pre>
            <Button onClick={handleClick}>Change dummy data</Button>
        </div>
    )
};

export default HookComponent;


const Button = React.memo(({onClick, children})=>{
    console.log('renderuje sie button');
return <button onClick={onClick}>{children}</button>
});