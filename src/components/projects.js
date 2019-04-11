import React,{ Component } from 'react';
import catnannyvid from './images/catnannyexpress.mov';
import drinkup from './images/Drinkup.mov';
import gitwise from './images/gitwise.mov';

class Projects extends Component {
    render() {
        return (
            <div id="projects"class="notification">
            <p class="title has-text-centered">Featured Projects</p>
            <div class="columns">
                <div class="column is-4">
                    <div class="card">
                        <div class="card-image">
                                <video autoplay="" loop="" muted="">
                                        <source media="(min-width: 640px)" src={catnannyvid} />
                                </video>
                        </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content has-text-centered">
                                        <p class="title is-4">Cat Nanny Express</p>
                                        <p class="subtitle is-6 has-text-primary"><a href="http://cat-nanny-express.surge.sh/">Live Demo</a> | <a href="https://github.com/ashleysouvannaraj/Cat-Nanny-Express"> GitHub</a></p>
                                    </div>
                            </div>
                            <div class="content has-text-justified">
                                An interactive, single-player game where you play as a pet nanny with 60 seconds to figure out what the cat or dog on the screen needs in order to go home happy! Ultimate goal is to get the highest score on the leaderboard. We used cat & dog API's to call pet images to the screen. All the user data was stored in & retreived through Firebase's database. On the front end, we used HTML, CSS & Bootstrap.
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                                <video autoplay="" loop="" muted="">
                                        <source media="(min-width: 640px)" src={drinkup} />
                                </video>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content has-text-centered">
                                    <p class="title is-4">Drink Up</p>
                                        <p class="subtitle is-6 has-text-primary"><a href="https://github.com/ashleysouvannaraj/DrinkUp">GitHub</a></p>
                                    </div>
                                </div>
                                <div class="content has-text-justified">
                                    Learn mixology and become the perfect bartender! There is a study tab to help you memorize drink recipes with flip cards and images that were created on Adobe Illustrator, by yours truly, before you start the game. In this project, we used React/Redux along with Bootstrap on the front end. Node.js was used as our back end which stored users and highscores into PostgresSQL database. 
                                </div>
                            </div>
                        </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <video autoplay="" loop="" muted="">
                                    <source media="(min-width: 640px)" src={gitwise} />
                            </video>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content has-text-centered">
                                    <p class="title is-4">GitWise</p>
                                    <p class="subtitle is-6 has-text-primary"><a href="https://gitwise.herokuapp.com/">Live Demo</a> | <a href="https://github.com/ashleysouvannaraj/GitWise">GitHub</a></p>
                                </div>
                            </div>
                            <div class="content has-text-justified">
                                This is a great website to search through GitHub's repositories in a nicer way! You're able to favorite any repo you like & it'll store them in your profile. We challenged ourselves on this project and used GraphQL, which was not taught in class, along with GitHub's API to be able to search. Firebase was used to store the most recent searches to display on the home page. We also used GitHub's Oauth for users to sign in. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Projects;