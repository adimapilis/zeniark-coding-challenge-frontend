import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { MainContext } from '../contexts/MainContext'

const PersistentComponent = () => {

  const { questions } = useContext(MainContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!questions.length) {
      navigate('/')
    }
  }, [])
  
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default PersistentComponent