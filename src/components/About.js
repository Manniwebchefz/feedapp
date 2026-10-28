import Profile from "./Profile";
import UserCount from "./UserCount";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor Called");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }
    render() {
        console.log("Parent Render Called");
        return (
        <div className="about-container container"> 
         <h1>About Us</h1>
            <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
            <UserCount  />
            <Profile  />    
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
          <p>We are a team of passionate food lovers dedicated to bringing you the best dining experiences. Our mission is to connect people with their favorite restaurants and help them discover new culinary delights.</p>
            <h2>Our Team</h2>
            <ul>
                <li>John Doe - Founder & CEO</li>
                <li>Jane Smith - Marketing Director</li>
                <li>Mike Johnson - Operations Manager</li>
            </ul>
            <h2>Our Mission</h2>
            <p>At our core, we believe that great food brings people together. We are committed to providing a platform that not only connects diners with exceptional restaurants but also supports local businesses and promotes culinary diversity.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or inquiries, please feel free to reach out to us at</p>
        </div>
    );
}
};

export default About;