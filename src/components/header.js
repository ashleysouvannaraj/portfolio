import React,{ Component } from 'react';
import resume from './images/Resume 1 (1).pdf'

class Header extends Component {
    render() {
        return (
            <div>
            <nav class="navbar has-fixed-top hero is-primary is-bold has-text-centered">
            <div class="hero-body">
              <p class="title">
                ASHLEY SOUVANNARAJ
              </p>
              <p class="subtitle">
                FULL-STACK DEVELOPER
              </p>
            </div>
            <div class="tabs is-centered is-medium">
                <ul>
                  <li class="is-active"><a href="#projects">Projects</a></li>
                  <li><a href="#graphic">Graphic Design</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href={resume}>Resume</a></li>
                </ul>
              </div>
            </nav>
            </div>
        )
    }
}

export default Header;