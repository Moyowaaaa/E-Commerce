import { useEffect,useState } from "react";
import axios from 'axios'




const useFetch = ({url}) => {
    // const [data, setData] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

   
        async function showCase() {
            try{
                const reponse = await axios.get(url)
                // setData(reponse.data)
                setProducts(reponse.data)
                setLoading(true)
            }catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            showCase()
        },[url])
        return {loading, products}
    }


export default useFetch