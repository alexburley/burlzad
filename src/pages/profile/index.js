import React from "react";
import styled from "styled-components";
import Timeline from "../../components/timeline";

const Wrapper = styled.div`
  display: flex;
`;

const SideColumn = styled.div`
  flex: 1 0 160px;
  max-width: 35%;
  display: flex;
  padding: 36px;
`;

const MainContent = styled.div``;

const roles = [
  { date: new Date(2021, 10), label: "Senior Full Stack Engineer" },
  { date: new Date(2020, 10), label: "Full Stack Engineer" },
  { date: new Date(2019, 7), label: "Solutions Engineer" },
  { date: new Date(2018, 9), label: "SDE II" },
  { date: new Date(2017, 9), label: "Tesco Technology Graduate" },
  { date: new Date(2017, 7), label: "Graduate - Computer Science MComp 1st" },
  { date: new Date(2013, 9), label: "Student" },
];

export default function ProfilePage() {
  return (
    <Wrapper>
      <SideColumn>
        <Timeline items={roles} />
      </SideColumn>
      <MainContent></MainContent>
    </Wrapper>
    // <div className="IntroBox">
    //   <p>
    //     My name is Alex, I am a backend developer specialising in distributed,
    //     serverless systems. I care about strong unit testing, scalability and
    //     data driven approaches.
    //   </p>
    //   <p>
    //     I'm currently working in a Full Stack role at
    //     <a href="https://www.reachplc.com/home"> Reach Plc </a>inside the
    //     Emerging Products team. More specifically, I'm in the Labs where we're
    //     trying to find innovative ways to make news assets profitable.
    //   </p>
    //   <p>
    //     I am happy to code in any language, although in my experiences so far
    //     I've been finding it easiest to write Typescript applications using
    //     Serverless Framework. My favourite aspect is just how easy it is to
    //     write durable unit tests, which is essential for something that's not
    //     got static types.
    //   </p>
    //   <p>
    //     People often talk about engineering values, now there's plenty I could
    //     talk about but the most important ones I hold on to are:
    //     <ul>
    //       <li>
    //         <b>Whatever works, that also works for the team.</b> Sure, let's use
    //         the right tool for the job and not shoehorn in preferred
    //         technologies, but let's also think about what resource we have, who
    //         is going to maintain the solution, who is going to maintain it in a
    //         year's time? How much learning does it take?
    //       </li>
    //       <li style={{ "padding-top": "20px" }}>
    //         <b>Flexibility</b>, if we run into roadblocks, how easy is it to go
    //         around? How easy is it to do a full reverse and take a different
    //         road. We should avoid the single points of failure, we should build
    //         for redundancy and expect systems to fail. If we're flexible we can
    //         react to issues easily.
    //       </li>
    //       <li style={{ "padding-top": "20px" }}>
    //         <b>Automation</b>, solid CI/CD pipelines which don't require upkeep
    //         and unit tests that are strong enough and reliable enough, testing
    //         outside in and avoiding stubbing/mocking our own code. This
    //         principle extends to Infrastructure as Code.
    //       </li>
    //     </ul>
    //   </p>
    //   <p>
    //     Outside of work, I'm into my sport and gym, but mostly to work off all
    //     the time spent indulging around London with my fiancee.
    //   </p>
    //   <Container className="SkillsContent" maxWidth="sm">
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Node.js
    //         </Typography>
    //         <Typography variant="body2" component="p" color="90ee90">
    //           <ul>
    //             <li>
    //               Built multiple backend services over four years, emphasising
    //               ES6 and FP patterns.
    //             </li>
    //             <li>
    //               Depth of experience building out API's that are both lamba
    //               based with API Gateway routing or using Fastify framework.
    //             </li>
    //             <li>
    //               Huge advocate of automated unit testing using Jest and
    //               building out internal frameworks for unit testing projects.
    //             </li>
    //             <li>
    //               Confident in working on open source projects in order to fix
    //               production issues.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Java
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>Comfortable working on Java based projects.</li>
    //             <li>
    //               Previous experience includes writing a Micronaut based API to
    //               be deployed on Tesco Tills, in addition to working with third
    //               party drivers to enable a receipt printing system.
    //             </li>
    //             <li>
    //               I have completed a course on Functional Programming in Scala
    //               and feel comfortable with Scala patterns.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Distributed Design and Microservices
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>
    //               Confident in applying RESTful API best practices to enable
    //               user discoverability and a smooth developer experience.
    //             </li>
    //             <li>
    //               Plenty of experience in disecting domain and establishing
    //               dependable microservices.
    //             </li>
    //             <li>Experience in building out GraphQL clients</li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Continuous Integration
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>
    //               Proponent of automatic releases backed up by automated testing
    //               and canary deployments.
    //             </li>
    //             <li>Experience building out CI/CD Pipelines using AWS CDK.</li>
    //             <li>
    //               Experience in writing pipelines to run on a Jenkins CI/CD
    //               server.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Web Development
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>
    //               Comfortable working with HTML and CSS to build simple
    //               websites.
    //             </li>
    //             <li>
    //               Working knowledge of React.js to build out basic components.
    //             </li>
    //             <li>
    //               Previous experience include working on{" "}
    //               <a href="www.memorylane.co.uk">MemoryLane.co.uk</a> and
    //               building basic websites such as{" "}
    //               <a href="www.burleywedding.co.uk">www.burleywedding.co.uk</a>{" "}
    //               (React based) and{" "}
    //               <a href="www.burlzad.com">www.burlzad.com</a> (Express based)
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Cloud and Infrastructure
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>
    //               In depth experience of utilising AWS technologies (too many to
    //               list)
    //             </li>
    //             <li>
    //               Confident in using CloudFormation and Serverless framework to
    //               deploy cloud applications.
    //             </li>
    //             <li>
    //               Big advocate of serverless technologies and event based
    //               system, including Lambda/SQS/SNS stacks and leveraging log
    //               aggregation to produce metrics and dashboards via Cloudwatch.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Databases
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>
    //               Confident in utilising NoSQL patterns to design data
    //               structures on MongoDB and in particular DynamoDB.
    //             </li>
    //             <li>
    //               Working knowledge of SQL based databases and using SQL
    //               workbench and some experience analysing queries.
    //             </li>
    //             <li>
    //               I enjoy thinking about data access patterns and how data will
    //               relate to one another.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //     <Card className="Card">
    //       <CardContent className="CardContent">
    //         <Typography variant="h5" component="h2">
    //           Misc.
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           <ul>
    //             <li>Confident using the CLI to optimise workflow.</li>
    //             <li>
    //               Generally don't mind using whatever language is needed. I
    //               would always be happy working with whatever language is
    //               needed.
    //             </li>
    //             <li>
    //               Experienced GIT user comfortable with managing commits,
    //               branching strategies and GitHub repositories.
    //             </li>
    //           </ul>
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   </Container>
    // </div>
  );
}
