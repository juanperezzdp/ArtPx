import React, {useState,useEffect} from 'react'

export function useFetch(url) {
    const [datab, setDatab] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res=> res.json())
        .then(data => setDatab(data.hits))
        .finally(()=>setLoading(false))
        .catch((err)=>{throw err})
    }, []);
  return { datab, loading }
}

