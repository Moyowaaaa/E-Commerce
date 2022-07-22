import { useEffect,useState } from "react";
import axios from 'axios'




const useFetch = ({url}) => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

   
        async function showCase() {
            try{
                const reponse = await axios.get(url)
             
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