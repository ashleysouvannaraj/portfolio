import React,{ Component } from 'react';
import face from './images/IMG_0580.png'

class About extends Component {
    render() {
        return (
            <div id="about" class="about">
                <div class="is-centered">
                <div class="container is-centered">
                    <div class="columns">
                        <div class="column is-one-quarter">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src= {face} />
                            </figure>
                        </div>
                        <div class="column has-text-weight-light has-text-justified">
                            Hi! I'm a nail tech turned Full-Stack Developer living in Atlanta, GA. I attended DigitalCrafts in their 26-week flex class while also working full-time (seven days a week) at a salon, that I own. I've always had an interest in coding and I'm so glad I decided to take the program!  I've progressed so much and I only want to get better. I'm proud of where I've come in this field. As a developer, I enjoy learning new languages and frameworks. I'm always up for a good challenge! <br /><br />
                            <p class="title is-5 has-text-centered">"One of my most productive days was throwing away 1000 lines of code." </p> <p class="subtitle is-6 has-text-right">- Ken Thompson&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                            
                            
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;