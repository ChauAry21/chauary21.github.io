const commands = {
    help: () => `
    <div class="command-output">
      <p>Available commands:</p>
      <ul>
        <li><span class="cmd">about</span> - Learn about me!</li>
        <li><span class="cmd">skills</span> - View my tech stack</li>
        <li><span class="cmd">projects</span> - See my projects</li>
        <li><span class="cmd">experience</span> - View my work experience</li>
        <li><span class="cmd">education</span> - See my education background</li>
        <li><span class="cmd">resume</span> - Download my resume</li>
        <li><span class="cmd">github</span> - Visit my GitHub</li>
        <li><span class="cmd">linkedin</span> - Connect on LinkedIn</li>
        <li><span class="cmd">contact</span> - Get my contact info</li>
        <li><span class="cmd">clear</span> - Clear the terminal</li>
      </ul>
    </div>
  `,

    about: () => `
    <div class="command-output">
      <h3>About Me</h3>
      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Aryan Chauhan</p>
            <p class="card-subtitle">Software Engineer · AI Engineering Student</p>
            <p class="card-date">Washington, USA · US Citizen</p>
          </div>
        </div>
        <p class="card-desc">BS Computer Science graduate (CWU, June 2025) currently deepening expertise in AI &amp; Data Science at Flatiron School. I build backend services, automation tools, and security-focused systems — from a graph integrity validator used in production at CyberDefense.AI to a containerized job scraper shipped with Docker and GitHub Actions CI/CD.</p>
        <p class="card-desc">Strong in Java, Python, and REST APIs. Comfortable owning a project end-to-end: design docs, implementation, testing, and deployment.</p>
        <p class="card-desc" style="margin-top:10px;">
          <a href="https://github.com/ChauAry21" target="_blank">github.com/ChauAry21</a> &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/aryan-chauhan-35755b210/" target="_blank">LinkedIn</a> &nbsp;|&nbsp;
          aryanachauhan21@gmail.com
        </p>
      </div>
    </div>
  `,

    skills: () => `
    <div class="command-output">
      <h3>Tech Stack &amp; Skills</h3>
      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Languages &amp; Frameworks</p>
          </div>
        </div>
        <p class="card-desc"><strong>Languages:</strong> Java, Python, C/C++, C#, SQL</p>
        <p class="card-desc"><strong>Backend:</strong> REST APIs, Spring Boot, Flask</p>
        <p class="card-desc"><strong>Data:</strong> Relational Databases (MySQL/PostgreSQL), NoSQL/Graph (Memgraph)</p>
      </div>
      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">AI / ML</p>
          </div>
        </div>
        <p class="card-desc">Scikit-Learn, NLP, Neural Networks, Regression, PySpark, Generative AI, LLMs, Prompt Engineering</p>
      </div>
      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">DevOps &amp; Tooling</p>
          </div>
        </div>
        <p class="card-desc"><strong>Testing:</strong> JUnit, API smoke testing (curl/bash)</p>
        <p class="card-desc"><strong>DevOps:</strong> Git, GitHub Actions (CI/CD), Docker, Linux, WSL, VS Code, IntelliJ</p>
        <p class="card-desc"><strong>Other:</strong> OOP, Multi-threaded Programming, Design Documentation, Cloud APIs, JSON, XML, Agile/Scrum</p>
      </div>
    </div>
  `,

    projects: () => `
    <div class="command-output">
      <h3>Featured Projects</h3>

      <div class="project">
        <div class="project-title-row">
          <strong>1. Jobright Job Scraper</strong>
          <span class="badge automation">Automation</span>
          <span class="badge python">Python</span>
        </div>
        <p>Automated job recommendation retrieval via authenticated session state + API calls; exports structured results to JSON. Containerized and shipped tagged releases with GitHub Releases and Docker image (GHCR) for reproducible installs.</p>
        <p><em>Tech Stack:</em> Python, Playwright, Docker, GitHub Actions</p>
        <p>🔗 <a href="https://github.com/ChauAry21/Jobright_Job_Scraper" target="_blank">github.com/ChauAry21/Jobright_Job_Scraper</a></p>
      </div>

      <div class="project">
        <div class="project-title-row">
          <strong>2. Cloud Graph Validator</strong>
          <span class="badge security">Security</span>
        </div>
        <p>Proof of concept for work at CyberDefense.AI. Validates graph database integrity by comparing cloud API sources against Memgraph storage using checksum-based reconciliation to detect missing nodes/edges and inconsistent state.</p>
        <p><em>Tech Stack:</em> Java, Spring Boot, Python, Flask, Memgraph</p>
        <p>🔗 <a href="https://github.com/ChauAry21/GraphValidator" target="_blank">github.com/ChauAry21/GraphValidator</a></p>
      </div>

      <div class="project">
        <div class="project-title-row">
          <strong>3. Loyalty App Backend</strong>
          <span class="badge research">Private</span>
        </div>
        <p>Backend service with REST endpoints for businesses, locations, customers, and visit tracking. Added idempotent request handling for safe retries and a repeatable bash/curl smoke test script for local API validation.</p>
        <p><em>Tech Stack:</em> Java, Spring Boot</p>
      </div>

      <div class="project">
        <div class="project-title-row">
          <strong>4. MoneyMate</strong>
          <span class="badge python">Java</span>
        </div>
        <p>Personal finance tracker with auth, expense CRUD, and reporting. Persists data to a relational database.</p>
        <p><em>Tech Stack:</em> Java</p>
        <p>🔗 <a href="https://github.com/ChauAry21/MoneyMate" target="_blank">github.com/ChauAry21/MoneyMate</a></p>
      </div>

      <p style="margin-top: 15px;">Type <span class="cmd">github</span> to see all my repos!</p>
    </div>
  `,

    experience: () => `
    <div class="command-output">
      <h3>Work Experience</h3>

      <div class="experience-item">
        <div class="card-header" style="margin-bottom:6px;">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">AI Engineering Apprentice</p>
            <p class="card-subtitle">Flatiron School · Apprenticeship</p>
            <p class="card-date">April 2026 – Present</p>
          </div>
        </div>
        <ul>
          <li>Immersive AI &amp; Data Science program covering ML, NLP, neural networks, and LLMs</li>
          <li>Building AI powered lesson planner internally</li>
        </ul>
      </div>

      <div class="experience-item">
        <div class="card-header" style="margin-bottom:6px;">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Software Development Engineer Intern</p>
            <p class="card-subtitle">CyberDefense.AI · Remote</p>
            <p class="card-date">August 2024 – Present</p>
          </div>
        </div>
        <ul>
          <li>Built a graph integrity validation service (Flask, Memgraph) that reconciles Cloud API sources vs. stored asset relationships to detect missing nodes/edges and inconsistent state</li>
          <li>Performed security testing on internal and client-facing tools; documented findings, supported remediation, and verified fixes</li>
          <li>Led a 4-person intern team on Cloud API analytics research; delivered written summary and recommendations to engineering leadership</li>
        </ul>
      </div>

      <div class="experience-item">
        <div class="card-header" style="margin-bottom:6px;">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Software Development Engineer Intern</p>
            <p class="card-subtitle">Medal.tv · Remote</p>
            <p class="card-date">May 2021 – August 2022</p>
          </div>
        </div>
        <ul>
          <li>Integrated MedalBot with Discord to enable content upload/viewing; improved scalability and contributed to a 10% platform-wide engagement increase</li>
          <li>Partnered with the CTO to define specs and iterate on requirements; owned deployment and production bug triage across main/beta builds</li>
        </ul>
      </div>
    </div>
  `,

    education: () => `
    <div class="command-output">
      <h3>Education</h3>

      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Flatiron School</p>
            <p class="card-subtitle">AI Engineering Immersive · Data Science</p>
            <p class="card-date">April 2026 – May 2027</p>
          </div>
        </div>
        <p class="card-desc"><strong>Coursework:</strong> Introduction to Python, Introduction to Data Science, Introduction to SQL, Cloud Computing &amp; Generative AI, Inferential Statistics, Regression, Introduction to Machine Learning, Machine Learning with Scikit-Learn, NLP / Time Series / Neural Networks, Neural Networks &amp; Similar Models, Large Language Models, Data Science Capstone</p>
      </div>

      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Central Washington University</p>
            <p class="card-subtitle">Bachelor of Science in Computer Science · Ellensburg, WA</p>
            <p class="card-date">September 2021 – June 2025</p>
          </div>
        </div>
        <p class="card-desc"><strong>Relevant Coursework:</strong> Data Structures, CyberSecurity, Computer Networking, Advanced Software Engineering, Algorithms, Database Management, Principles of Language Design</p>
      </div>
    </div>
  `,

    resume: () => `
    <div class="command-output">
      <p>Opening resume...</p>
      <p><a href="/Aryan_Chauhan_Resume.pdf" target="_blank" download>Click here to download my resume (PDF)</a></p>
    </div>
  `,

    github: () => {
        window.open('https://github.com/ChauAry21', '_blank');
        return `<div class="command-output"><p>Opening GitHub profile in new tab...</p></div>`;
    },

    linkedin: () => {
        window.open('https://www.linkedin.com/in/aryan-chauhan-35755b210/', '_blank');
        return `<div class="command-output"><p>Opening LinkedIn profile in new tab...</p></div>`;
    },

    contact: () => `
    <div class="command-output">
      <h3>Let's Connect!</h3>
      <div class="info-card">
        <div class="card-header">
          <span class="card-icon">//</span>
          <div class="card-body">
            <p class="card-title">Aryan Chauhan</p>
            <p class="card-subtitle">Washington, USA · US Citizen</p>
          </div>
        </div>
        <p class="card-desc"><strong>Email:</strong> aryanachauhan21@gmail.com</p>
        <p class="card-desc"><strong>Phone:</strong> +1 425-902-3200</p>
        <p class="card-desc"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryan-chauhan-35755b210/" target="_blank">linkedin.com/in/aryan-chauhan-35755b210</a></p>
        <p class="card-desc"><strong>GitHub:</strong> <a href="https://github.com/ChauAry21" target="_blank">github.com/ChauAry21</a></p>
      </div>
    </div>
  `,

    clear: () => 'CLEAR_TERMINAL',

    default: (cmd) => `
    <div class="command-output error">
      <p>bash: ${cmd}: command not found</p>
      <p>Type <span class="cmd">help</span> to see available commands.</p>
    </div>
  `
};

export const executeCommand = (input) => {
    const cmd = input.toLowerCase().trim();

    if (commands[cmd]) {
        return commands[cmd]();
    }

    return commands.default(input);
};
