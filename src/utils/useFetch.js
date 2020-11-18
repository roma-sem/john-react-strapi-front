import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, resultObjPropName) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                if ( resultObjPropName ) {
                    setData(res.data[resultObjPropName]);
                } else {
                    setData(res.data);
                }
                setLoading(false);
                // console.log("[ useFetch ]: res.data = ", res.data);
                console.log("[ useFetch ]: res = ", res);
                // setData(res.data);
            })
            .catch(error => {
                console.warn(error);
                setLoading(false);
                // setError(error.response.data);
            })
    }, [url, resultObjPropName]);

    return {
        // data: Object.entries({...data}),
        data: data,
        loading: loading,
        error: error
    }
}
