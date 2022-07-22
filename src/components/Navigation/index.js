import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <div>
            <h3 class="float-md-start mb-0" id="full-name">Richard Brian Santos</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link" href="#projects">Projects</a>
                <a class="nav-link" href="https://github.com/rbsantos-code">GitHub</a>
                <a class="nav-link" href="#contact">Contact</a>
                <a class="nav-link" href="Revised2.html">Resume</a>
            </nav>
        </div>
    )
}