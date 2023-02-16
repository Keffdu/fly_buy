import React from 'react'
import AirportCard from './AirportCard'
import { useState, useEffect } from 'react';

function AirportList(){

    const [airports, setAirports] = useState([])
    const [stateFilter, setStateFilter] = useState("all")

    const airportsByState = airports.filter((airport) => {
        if (stateFilter === "all") {
            return airports
        } else {
            return (
                airport.state === stateFilter
            )
        }
    })

    useEffect(() => {
        fetch("/airports").then((r) => {
            if (r.ok) {
                r.json().then((airportData) => {
                    setAirports(airportData)});
                }
            });
        }, [])

  return (
    <div className='airport_homepage'>
        <h1 className='homepage_title'>Browse Airports</h1>
        <div className='airport_dropdown'>
            <p>Select by State </p>
            <select
                onChange={(e) => setStateFilter(e.target.value)}
                value={stateFilter}
                className='dropdown'>
                <option value='all'>All Airports</option>
                <option value='Arizona'>Arizona</option>
                <option value='Michigan'>Michigan</option>
                <option value='Tennessee'>Tennessee</option>
            </select>
        </div>
        <div className='airports'>
            <AirportCard airports={airportsByState}/>
        </div>
    </div>
  )
}

export default AirportList;