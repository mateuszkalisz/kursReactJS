import React, {useState} from 'react';
import {useQuery} from 'react-query';
import fetchPokemon from './fetchPokemon';


const Pokemon = () =>{

    const [id, setId] = useState(1);

    // let pokemon;

    const {data,error} = useQuery(["pokemon", {id}], fetchPokemon);

    let pokemon = data;

    return(
        <>
        <button onClick={()=>setId(id ===200 ? 1 : id+1)}>Next pokemon</button>
        <button onClick={()=>setId(id === 1 ? 200 : id-1)}>Previous pokemon</button>
        <pre>
    {!pokemon ? <div>{error}</div>: <h2>{pokemon.name}</h2>}
        </pre>
        </>
    )
};

export default Pokemon;