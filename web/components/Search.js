import React,{useState} from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Search = () => {
    const[serch,setserch]=useState("");
    const handleSubmit=()=>{
        setserch(serch)
        console.log(serch);

    }
  return (
    <div style={{}}>
      <Input placeholder='Basic usage'  onChange={(event)=> setserch(event.target.value)}  value={serch}/>
      <br />
     <Button onClick={handleSubmit}></Button>
    </div>
  )
}

export default Search
