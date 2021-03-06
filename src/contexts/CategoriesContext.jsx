import React, { useState, createContext, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})


export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = {categoriesMap}

  useEffect(() => {
    const getCartegoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
  
    getCartegoriesMap()
  }, [])

  return <CategoriesContext.Provider value={value}>
    {children}
  </CategoriesContext.Provider>
}