import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const About = () => {

  useEffect(async() => {
    let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    let response =await fetch(API_URL)
    let data=await response.json()
    console.log(data)
  }, [])
  
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About;