
const Skills = () => {
    return (
        <div className="skill">
        <h2>Skills</h2>
        <section className="frontend-skills">
                <h3>Frontend Skills</h3>
                <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                    <li>API Integration</li>
                    <li>Tailwind CSS</li>
                </ul>
            </section>

            <section className="backend-skills">
                <h3>Backend Skills</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Authentication (JWT)</li>
                    <li>Database Design</li>
                    <li>Deployment ( Netlify, AWS)</li>
                    <li>Git</li>
                </ul>
            </section>
        </div>
    )
}

export default Skills;