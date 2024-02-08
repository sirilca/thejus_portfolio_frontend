import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'


const datacontext = createContext()
const useData = () => {
    return useContext(datacontext)
}


const DataContext = ({ children }) => {

    const [alldata, setAlldata] = useState(null)

    const geteverydata = async () => {
        await axios.get('https://thejus-joseph.onrender.com').then((res) => {
            setAlldata(res.data[0]);
            console.log(res.data[0])
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });

    }

    return (
        <datacontext.Provider value={{
            geteverydata,
            alldata,
            setAlldata

        }}>
            {children}
        </datacontext.Provider>
    )
}

export default DataContext
export { useData }
