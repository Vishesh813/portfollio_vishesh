import { Cell, Grid } from "react-mdl";
import lowesLogo from "../../img/logo-lowes.png";
import principalLogo from "../../img/pricipal-logo.jpg";
import tcsLogo from "../../img/tcs-logo.png";
import WorkExperience from "./WorkExperience";

const principalDetails = [
    "Improved operation teams experience for tracking transaction and viewing the reports based on conditions on UI ",
    "Developed Spring Batch application for processing records in batch ",
    "Created Jira error notification component using AWS services like AWS SQS, AWS CloudWatch, AWS Lambda and email notification module using AWS services like AWS SES,Lambda",
    "Migrated spring web application components written in event-driven architecture using AWS services.",
    "Performed proof of concepts for creating approval requests for executing AWS stack steps using Github action",
    "Experienced in infrastructure as Code to deliver a stable environment rapidly and scale using AWS CDK",
    "Fixing issues/bugs in disbursement payment related products ",
    "Developing ,maintaining phases of Java application",
    "Trained new joiners on domain knowledge as well agile practices,Git and other framework"
]

const tcsDetails = [
    "Developed a web-based application which helps to find active mainframe jobs script based on a search condition using Spring boot for backend and Bootstrap for frontend development",
    "Design and developed web applications using  Java EE 8 technologies like Servlets,JSP,JDBC follows MVC.",
    "Developing Java REST Web services and improving front-end using jQuery,HTML,CSS,AJAX. ",
    "Automated different manual test cases using. Tools used by HP LeanFT similar to Selenium. Worked on Integration Java with the LeanFT tool."
]

const lowesDetails = [
    "Spearheaded the creation of Promo Central Applications, the central hub to create diverse types of promotions in a generic way.",
    "Empowered promo specialists to effortlessly create a wide range of promotions.",
    "Collaborated with Promo Central team to utilize JAVA, Springboot, React.",
    "Architected applications, executed integration test cases, and managed CI/CD with Jenkins and Docker.",
    "Optimized search operations over millions of data with appropriate strategies, enhancing read and write operations efficiency.",  
]

const WorkExperienceSection = () => {
    return (
        <div className="about-me-rightcol">
            <Grid>
                <Cell col={12}>
                    <WorkExperience startYear='February 2023' endYear='present'
                        orgName='Lowes'
                        position='Senior Software Engineer'
                        city='Banglore'
                        image={lowesLogo}
                        details={''}
                        points={lowesDetails}
                    />
                    <WorkExperience startYear='January 2022' endYear='February 2023'
                        orgName='Principal Global Services'
                        position='Software Engineer'
                        city='Pune'
                        image={principalLogo}
                        details={''}
                        points={principalDetails}
                    />
                    <WorkExperience startYear='June 2019' endYear='January 2022'
                        orgName='Tata Consultancy Searvice'
                        position='System Engineer'
                        city='Pune'
                        image={tcsLogo}
                        details={''}
                        points={tcsDetails}
                    />
                </Cell>
            </Grid>
        </div>
    )
}

export default WorkExperienceSection;