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
      <h3>About Me!</h3>
      <p>Hi! I'm Aryan, a passionate Software Development Engineer graduating in June 2025 from Central Washington University.</p>
      <p>I specialize in full-stack development, API integration, and security testing with experience at CyberDefense.AI and Medal.tv.</p>
      <p>Currently seeking new grad software engineering opportunities where I can leverage my skills in building scalable systems and solving complex problems.</p>
      <p>When I'm not coding, you can find me exploring new technologies, working on VR applications, and contributing to innovative projects.</p>
    </div>
  `,

    skills: () => `
    <div class="command-output">
      <h3>Tech Stack & Skills</h3>
      <p><strong>Languages:</strong> Java, Python, C/C++, C#, MySQL, Spring Boot, REST API</p>
      <p><strong>Frontend:</strong> React, Tkinter, Unity</p>
      <p><strong>Backend:</strong> Flask, Spring Boot, REST API, Memgraph</p>
      <p><strong>Database:</strong> MySQL, Memgraph, PostgreSQL</p>
      <p><strong>DevOps & Tools:</strong> Docker, Git, Linux, WSL, Cloud Services, VS Code, IntelliJ, Eclipse, NetBeans</p>
      <p><strong>Other:</strong> JUnit, Agile, Scrum, JSON, XML, API Penetration Testing, Fernet Encryption</p>
    </div>
  `,

    projects: () => `
    <div class="command-output">
      <h3>Featured Projects</h3>
      <div class="project">
        <p><strong>1. VR Keyboard Research (Capstone Project)</strong></p>
        <p>Built an iOS/Android virtual reality keyboard app using Unity and deprecated Google Cardboard tech. Implemented native file sharing through email, Airdrop, and Google Drive in VR environments with keystroke analytics.</p>
        <p><em>Tech Stack:</em> C#, Unity, Mathematica, Xcode, Google Raycast API</p>
        <p>🔗 <a href="https://github.com/FisherBR6/CS481_Group_New_Repo" target="_blank">GitHub</a></p>
      </div>
      <div class="project">
        <p><strong>2. PassBook</strong></p>
        <p>Built a GUI password generator with user-defined parameters (length, characters, etc.) using Fernet encryption to securely store credentials specific to each user.</p>
        <p><em>Tech Stack:</em> Python, Tkinter, cryptography.fernet, MySQL</p>
        <p>🔗 <a href="https://github.com/ChauAry21/Password-Manager-With-Encryption" target="_blank">GitHub</a></p>
      </div>
      <p style="margin-top: 15px;">Type <span class="cmd">GitHub</span> to see all my projects!</p>
    </div>
  `,

    experience: () => `
    <div class="command-output">
      <h3>Work Experience</h3>
      <div class="experience-item">
        <p><strong>Software Development Engineer Intern @ CyberDefense.AI</strong></p>
        <p><em>August 2024 - Present (Remote)</em></p>
        <ul>
          <li>Developed a graph integrity validation tool using Memgraph and Flask, ensuring consistency in distributed Cloud API systems which led to finding inconsistencies in data up to 15% quicker</li>
          <li>Performed API penetration testing of internal and client tools to identify and fix vulnerabilities, contributing to improved product security</li>
          <li>Led a team of 4 interns from India in a research project regarding Cloud API System analytics for the CEO, directly affecting future projects</li>
        </ul>
      </div>
      <div class="experience-item">
        <p><strong>Software Development Engineer Intern @ Medal.tv</strong></p>
        <p><em>May 2021 - August 2022 (Remote)</em></p>
        <ul>
          <li>Engineered the integration of MedalBot with Discord, enhancing scalability and performance of Medal's social platform by enabling content upload/viewing, leading to a 10% increase in engagement platform-wide</li>
          <li>Collaborated with CTO on specifications and evolving product requirements for MedalBot</li>
          <li>Managed bot deployment and addressed bugs and issues for both main and beta builds</li>
        </ul>
      </div>
      <p style="margin-top: 15px;">Actively seeking new grad software engineering opportunities for June 2025!</p>
    </div>
  `,

    education: () => `
    <div class="command-output">
      <h3>Education</h3>
      <p><strong>Central Washington University, Ellensburg, WA</strong></p>
      <p>Bachelor of Science in Computer Science</p>
      <p><em>Graduated: June 2025</em></p>
      <p><strong>Relevant Coursework:</strong> Data Structures, CyberSecurity, Computer Networking, Advanced Software Engineering, Algorithms, Principles of Language Design II, Database Management</p>
    </div>
  `,

    resume: () => `
    <div class="command-output">
      <p>Opening resume...</p>
      <p><a href="/Aryan_Chauhan_Resume.pdf" target="_blank" download>Click here to download my resume (PDF)</a></p>
      <p style="margin-top: 10px; font-size: 0.9em;"></p>
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
      <h3>Let's Connect! Contact Me Via:</h3>
      <p><strong>Email:</strong> aryanachauhan21@gmail.com</p>
      <p><strong>Phone:</strong> +1 425-902-3200</p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryan-chauhan-35755b210/" target="_blank">linkedin.com/in/aryan-chauhan-35755b210</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/ChauAry21" target="_blank">github.com/ChauAry21</a></p>
      <p><strong>Location:</strong> Washington, USA (US Citizen)</p>
      <p style="margin-top: 15px;">Feel free to reach out for new grad software engineering opportunities, collaborations, or just to chat about tech!</p>
      <p>Available for full-time positions starting June 2025.</p>
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
