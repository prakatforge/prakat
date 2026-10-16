import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="prakat-main">
            <section className="hero">
                <p className="hero-label">WELCOME TO PRAKAT FORGE</p>

                <h1>
                    Build Skills.
                    <br />
                    <span>Forge Your Future.</span>
                </h1>

                <p className="hero-description">
                    Learn programming, web development, and Artificial
                    Intelligence through practical training and real-world
                    projects.
                </p>

                <div className="hero-buttons">
                    <a href="#courses" className="btn-primary">
                        Explore Courses
                    </a>

                    <a href="#contact" className="btn-secondary">
                        Contact Us
                    </a>
                </div>
            </section>

            <section className="services" aria-label="Our services">
                <div className="service-card">
                    <span>01</span>
                    <h2>Web Development</h2>
                    <p>
                        Learn HTML, CSS, JavaScript, React, Node.js, and
                        full-stack development.
                    </p>
                </div>

                <div className="service-card">
                    <span>02</span>
                    <h2>Programming</h2>
                    <p>
                        Strengthen your coding skills with Python, C,
                        C++, and hands-on projects.
                    </p>
                </div>

                <div className="service-card">
                    <span>03</span>
                    <h2>AI & Machine Learning</h2>
                    <p>
                        Explore data science, machine learning, and
                        practical AI applications.
                    </p>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default App
