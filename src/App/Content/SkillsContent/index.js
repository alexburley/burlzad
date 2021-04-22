import React from "react";
import {
  Card,
  Container,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import "./SkillsContent.css";

export default function SkillsContent() {
  return (
    <Container className="SkillsContent" maxWidth="sm">
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Node.js
          </Typography>
          <Typography variant="body2" component="p" color="90ee90">
            <ul>
              <li>
                Built multiple backend services over four years, emphasising ES6
                and FP patterns.
              </li>
              <li>
                Depth of experience building out API's that are both lamba based
                with API Gateway routing or using Fastify framework.
              </li>
              <li>
                Huge advocate of automated unit testing using Jest and building
                out internal frameworks for unit testing projects.
              </li>
              <li>
                Confident in working on open source projects in order to fix
                production issues.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Java
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>Comfortable working on Java based projects.</li>
              <li>
                Previous experience includes writing a Micronaut based API to be
                deployed on Tesco Tills, in addition to working with third party
                drivers to enable a receipt printing system.
              </li>
              <li>
                I have completed a course on Functional Programming in Scala and
                feel comfortable with Scala patterns.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Distributed Design and Microservices
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>
                Confident in applying RESTful API best practices to enable user
                discoverability and a smooth developer experience.
              </li>
              <li>
                Plenty of experience in disecting domain and establishing
                dependable microservices.
              </li>
              <li>Experience in building out GraphQL clients</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Continuous Integration
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>
                Proponent of automatic releases backed up by automated testing
                and canary deployments.
              </li>
              <li>Experience building out CI/CD Pipelines using AWS CDK.</li>
              <li>
                Experience in writing pipelines to run on a Jenkins CI/CD
                server.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Web Development
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>
                Comfortable working with HTML and CSS to build simple websites.
              </li>
              <li>
                Working knowledge of React.js to build out basic components.
              </li>
              <li>
                Previous experience include working on{" "}
                <a href="www.memorylane.co.uk">MemoryLane.co.uk</a> and building
                basic websites such as{" "}
                <a href="www.burleywedding.co.uk">www.burleywedding.co.uk</a>{" "}
                (React based) and <a href="www.burlzad.com">www.burlzad.com</a>{" "}
                (Express based)
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Cloud and Infrastructure
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>
                In depth experience of utilising AWS technologies (too many to
                list)
              </li>
              <li>
                Confident in using CloudFormation and Serverless framework to
                deploy cloud applications.
              </li>
              <li>
                Big advocate of serverless technologies and event based system,
                including Lambda/SQS/SNS stacks and leveraging log aggregation
                to produce metrics and dashboards via Cloudwatch.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Databases
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>
                Confident in utilising NoSQL patterns to design data structures
                on MongoDB and in particular DynamoDB.
              </li>
              <li>
                Working knowledge of SQL based databases and using SQL workbench
                and some experience analysing queries.
              </li>
              <li>
                I enjoy thinking about data access patterns and how data will
                relate to one another.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Card className="Card">
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Misc.
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              <li>Confident using the CLI to optimise workflow.</li>
              <li>
                Generally don't mind using whatever language is needed. I would
                always be happy working with whatever language is needed.
              </li>
              <li>
                Experienced GIT user comfortable with managing commits,
                branching strategies and GitHub repositories.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
