import React from "react";
import "./style.css";

export default function FeedContent() {
  return (
    <div className="IntroBox">
      <p>
        My name is Alex, I am a backend developer specialising in distributed,
        serverless systems. I care about strong unit testing, scalability and
        data driven approaches.
      </p>
      <p>
        I'm currently working in a Full Stack role at
        <a href="https://www.reachplc.com/home"> Reach Plc </a>inside the
        Emerging Products team. More specifically, I'm in the Labs where we're
        trying to find innovative ways to make news assets profitable.
      </p>
      <p>
        I am happy to code in any language, although in my experiences so far
        I've been finding it easiest to write Typescript applications using
        Serverless Framework. My favourite aspect is just how easy it is to
        write durable unit tests, which is essential for something that's not
        got static types.
      </p>
      <p>
        People often talk about engineering values, now there's plenty I could
        talk about but the most important ones I hold on to are:
        <ul>
          <li>
            <b>Whatever works, that also works for the team.</b> Sure, let's use
            the right tool for the job and not shoehorn in preferred
            technologies, but let's also think about what resource we have, who
            is going to maintain the solution, who is going to maintain it in a
            year's time? How much learning does it take?
          </li>
          <li style={{ "padding-top": "20px" }}>
            <b>Flexibility</b>, if we run into roadblocks, how easy is it to go
            around? How easy is it to do a full reverse and take a different
            road. We should avoid the single points of failure, we should build
            for redundancy and expect systems to fail. If we're flexible we can
            react to issues easily.
          </li>
          <li style={{ "padding-top": "20px" }}>
            <b>Automation</b>, solid CI/CD pipelines which don't require upkeep
            and unit tests that are strong enough and reliable enough, testing
            outside in and avoiding stubbing/mocking our own code. This
            principle extends to Infrastructure as Code.
          </li>
        </ul>
      </p>
      <p>
        Outside of work, I'm into my sport and gym, but mostly to work off all
        the time spent indulging around London with my fiancee.
      </p>
    </div>
  );
}
