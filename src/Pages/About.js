import React from 'react';
import Layout from "../Components/Layout";

const About = () => {
    return (
        <Layout>

            <div className="wrapper">
                <h1>My Team</h1>
                <div className="team">
                    <div className="team_member">
                        <div className="team_img">
                            <img src="images/about1.png" alt="Team_image"/>
                        </div>
                        <h3>Paul Doe</h3>
                        <p className="role">UI developer</p>
                        <p>CEO</p>
                    </div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src="images/about2.png" alt="Team_image"/>
                        </div>
                        <h3>Rosie Meg</h3>
                        <p className="role">Tester</p>
                        <p>CHIP ENG.</p></div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src="images/about3.png" alt="Team_image"/>
                        </div>
                        <h3>Alex Wood</h3>
                        <p className="role">Support Lead</p>
                        <p>HEAD DEVELOPER</p>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default About;