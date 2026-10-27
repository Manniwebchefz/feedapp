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
            <p>With a focus on quality, convenience, and customer satisfaction, we strive to make every meal memorable. Join us on our journey to explore the world of flavors and indulge in the joy of good food.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
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