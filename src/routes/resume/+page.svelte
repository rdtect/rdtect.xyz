<script>
  import { onMount } from "svelte";
  import resume from "./resumeData.json";
</script>

<main>
  <div id="left">
    <h1>{resume.name}</h1>
    <!-- You can add SVGs here for your icons -->
    <p>{resume.email}</p>
    <p>{resume.phone}</p>

    <!-- Add more personal data here -->

    <h2>Skills</h2>
    <ul>
      {#each resume.skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>

    <!-- Add more sections here like Toolkit, Education, etc. -->
  </div>

  <div id="right">
    <h2>Profile Summary</h2>
    <p>{resume.profileSummary}</p>
    <h2>Professional Experience</h2>
    {#each resume.professionalExperience as job}
      <div>
        <h3>{job.company}</h3>
        <p>{job.position}</p>
        <ul>
          {#each job.details as details}
            <li>{details}</li>
          {/each}
        </ul>
        <!-- Add more job details here -->
      </div>
    {/each}
    <h2>Other Experience</h2>
    {#each resume.otherExperience as job}
      <div>
        <h3>{job.company}</h3>
        <p>{job.position}</p>
        <ul>
          {#each job.details as details}
            <li>{details}</li>
          {/each}
        </ul>
        <!-- Add more job details here -->
      </div>
    {/each}

    <!-- Add more sections here like Projects, etc. -->
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
    /* center on page */
     
    

  }

  main {
    display: flex;
    justify-content: space-between;
    margin: 3 auto;
    max-width: 1200px;
    padding: 2em;
    background-color: #fff;
    font-family: "Montserrat", sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  #left {
    flex: 0.38; /* Approximately equal to the inverse of the golden ratio (1/1.618 ≈ 0.618) to get the width of the smaller column */
    border-right: 1px solid #ccc;
    padding-right: 2em;
  }

  #right {
    flex: 0.62; /* Equal to the golden ratio minus the size of the smaller column (1.618 - 1 ≈ 0.618) to get the width of the larger column */
    padding-left: 2em;
  }

  h1,
  h2,
  h3 {
    color: #444;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.6em;
  }

  h3 {
    font-size: 1.4em;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
</style>
