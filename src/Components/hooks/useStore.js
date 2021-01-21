import  { useEffect , useState } from 'react';
import { store } from '../firebase';

const useStore = (collection) => {

    const [docs , setdocs] = useState([]);

    useEffect(() => {
        const unsub = store.collection(collection)
        .orderBy('createAt','desc')
        .onSnapshot((snap) => {
            let document = [];
            snap.forEach(doc => {
                document.push({...doc.data(), id : doc.id})
            });
            setdocs(document);
        })

        return () => unsub();
    },[collection]);

    return {docs};
 
}

export default useStore;