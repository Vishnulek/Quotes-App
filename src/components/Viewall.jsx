import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [quotesData,changeQuotesData]=useState(
        {
            "quotes": [],
            "total": 1454,
            "skip": 0,
            "limit": 30
          }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuotesData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl.no</th>
      <th scope="col">Quotes</th>
      <th scope="col">Authors</th>
    </tr>
  </thead>
  <tbody>
   {quotesData.quotes.map(
    (value, index)=>{
        return  <tr>
        <th scope="row">{value.id}</th>
        <td>{value.quote}</td>
        <td>{value.author}</td>
       
      </tr>
    }
   )}
   
  </tbody>
</table>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
