import React from 'react'
import HomePage from './HomePage'
import Achievement from '../Achievement/Achievement'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

export default function Home() {

  return (
    <div>
        {/* Add id attributes for smooth scrolling */}
        <div id="home"><HomePage /></div>
        <div id="project"><Project /></div>
        <div id="achievement"><Achievement /></div>
        <div id="contact"><Contact /></div>
    </div>
  )
}
