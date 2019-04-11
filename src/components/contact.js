import React,{ Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact" class="notification is-primary is-bold has-text-centered">
            <p class="title has-text-centered">
                CONTACT
            </p>
            <i class="fas fa-phone"></i> 
            (404) 661-9401 <br />
            <a href="mailto:asouvannaraj@gmail.com" alt="email"><i class="far fa-envelope"></i></a> &nbsp; 
            <a href="https://www.linkedin.com/in/ashleysouvannaraj/" alt="linkedin"><i class="fab fa-linkedin"></i></a> &nbsp; 
            <a href="https://github.com/ashleysouvannaraj" alt="github"><i class="fab fa-github"></i></a> &nbsp; 
            
    
    
            <br /><br />
            <footer>
                <span class="copyright">&copy; 2019 Ashley Souvannaraj</span> 
                <br />
                <a href="https://bulma.io">
                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="115" height="20" />
                </a>
            </footer>
        </div>
        )
    }
}

export default Contact;