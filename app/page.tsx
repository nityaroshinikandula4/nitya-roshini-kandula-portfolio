import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Database, ExternalLink, GitBranch, Layers3, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

const github = 'https://github.com/nityaroshinikandula4';
const projects = [
  { number:'01', title:'Healthcare Claims Management System', category:'Java full stack', status:'Implemented + tested', image:'/projects/claims.png', repo:`${github}/healthcare-claims-management-system`, summary:'A claims operations workspace with Spring Boot APIs, relational persistence, validation, authentication, and role-based access control.', stack:['Java 21','Spring Boot 4','REST APIs','JPA','MySQL-ready','Spring Security'], proof:['Layered controller, service, and repository design','Synthetic claims data only','ANALYST and ADMIN roles'] },
  { number:'02', title:'Employee Management System', category:'Java full stack', status:'Implemented + tested', image:'/projects/employees.png', repo:`${github}/employee-management-system`, summary:'A responsive people directory backed by a validated CRUD and search API with relational persistence.', stack:['Java 21','Spring Boot 4','REST APIs','JPA','MySQL-ready'], proof:['Create, retrieve, update, delete, and search','Case-insensitive name and department search','Synthetic employee records'] },
  { number:'03', title:'SignalGuard', category:'Applied machine learning', status:'In Development', image:'/projects/phishing.png', repo:`${github}/phishing-detection-ml`, summary:'An explainable phishing-analysis prototype combining TF-IDF text classification with URL lexical risk signals.', stack:['Python','Flask','scikit-learn','TF-IDF','Browser extension'], proof:['Hybrid text and URL scoring','Human-readable warning signals','Small synthetic training set disclosed'] },
  { number:'04', title:'WaveVault', category:'Security engineering', status:'Implemented + tested', image:'/projects/wavevault.png', repo:`${github}/secure-data-transmission-dwt`, summary:'A transform-domain data-hiding workflow with authenticated encryption, DWT detail coefficients, and key-seeded recovery.', stack:['Python','PyWavelets','Fernet','NumPy','Flask'], proof:['Deterministic encode/decode round trip','Coefficient-fidelity container','Educational security scope disclosed'] },
  { number:'05', title:'DoorSense', category:'IoT + embedded', status:'Implemented + tested', image:'/projects/doorsense.png', repo:`${github}/arduino-door-monitoring-system`, summary:'HC-SR04 Arduino firmware, threshold-based alert logic, a reproducible simulator, and a live responsive monitoring interface.', stack:['Arduino','Embedded C','HC-SR04','Python','Flask'], proof:['Firmware and serial JSON events','Deterministic sensor simulator','Physical hardware not re-tested in this build'] },
];

export default function Home() {
  return <main>
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Nitya Roshini Kandula, home"><span>NR</span><b>Nitya Roshini Kandula</b></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
      <a className="nav-cta" href="mailto:nityaroshinikandula412@gmail.com">Let&apos;s connect <ArrowUpRight size={15}/></a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow live"><span/> Java full stack developer</p>
        <h1>Building dependable software from <em>API</em> to interface.</h1>
        <p className="lede">I&apos;m Nitya, a Java developer with enterprise healthcare application experience and a focus on Spring Boot, REST APIs, relational data, authentication, and thoughtful web interfaces.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore selected work <ArrowDown size={17}/></a><a className="button secondary" href={github}>View GitHub <GitBranch size={17}/></a></div>
        <div className="availability"><MapPin size={15}/>Flagstaff, Arizona <span>•</span> Open to relocate across the United States</div>
      </div>
      <aside className="hero-console" aria-label="Technical profile summary">
        <div className="console-bar"><i/><i/><i/><span>nitya.dev / profile</span></div>
        <div className="console-body">
          <div className="code-line"><b>01</b><span className="code-key">developer</span><span>:</span><span className="code-value">&quot;Java Full Stack&quot;</span></div>
          <div className="code-line"><b>02</b><span className="code-key">focus</span><span>:</span><span className="code-value">[&quot;APIs&quot;, &quot;Data&quot;, &quot;UX&quot;]</span></div>
          <div className="code-line"><b>03</b><span className="code-key">principles</span><span>:</span><span className="code-value">&quot;clear, secure, maintainable&quot;</span></div>
          <div className="console-divider"/>
          <div className="signal-grid"><div><Code2/><strong>Full stack</strong><span>Backend-first delivery</span></div><div><Database/><strong>Data aware</strong><span>Relational workflows</span></div><div><ShieldCheck/><strong>Security minded</strong><span>Authentication + RBAC</span></div></div>
        </div>
      </aside>
    </section>

    <section className="skills-strip" aria-label="Core skills"><div><span>Core</span><b>Java</b><b>Spring Boot</b><b>REST APIs</b></div><div><span>Data</span><b>SQL</b><b>MySQL</b><b>Python</b></div><div><span>Delivery</span><b>Git</b><b>Maven</b><b>Agile</b></div></section>

    <section className="section-heading" id="work"><div><p className="eyebrow">Selected work</p><h2>Systems designed around real workflows.</h2></div><p>Five portfolio projects spanning Java services, applied security, machine learning, and connected devices. Every case study separates implemented work from work still in development.</p></section>
    <div className="project-list">
      {projects.map((project,index)=><article className={`project ${index%2?'reverse':''}`} key={project.title}>
        <div className="project-visual"><img src={project.image} alt={`${project.title} interface screenshot`}/><div className="visual-meta"><span>{project.number} / 05</span><span>{project.category}</span></div></div>
        <div className="project-copy"><div className={`status ${project.status==='In Development'?'progress':''}`}><i/>{project.status}</div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.proof.map(item=><li key={item}><CheckCircle2 size={14}/>{item}</li>)}</ul><div className="tag-row">{project.stack.map(item=><span key={item}>{item}</span>)}</div><a className="text-link" href={project.repo}>Explore repository <ArrowUpRight size={16}/></a></div>
      </article>)}
    </div>

    <section className="experience" id="experience">
      <div className="experience-title"><p className="eyebrow">Experience</p><h2>Enterprise foundations,<br/>portfolio proof.</h2><p>The public projects show current implementation ability. The employment history stays concise and evidence-based.</p></div>
      <div className="timeline">
        <article><div className="timeline-date">Aug 2023 — Dec 2024</div><div><h3>Associate Software Engineer 1</h3><p className="company">Carelon Global Solutions (Elevance Health) · Hyderabad, India</p><p>Developed and supported Java and Spring Boot backend services, REST APIs, SQL-backed workflows, HTML views, authentication changes, testing, debugging, and Agile delivery for healthcare insurance applications.</p><div className="tag-row"><span>Java</span><span>Spring Boot</span><span>SQL</span><span>REST APIs</span><span>UAT</span></div></div></article>
        <article><div className="timeline-date">Aug 2022 — Sep 2022</div><div><h3>Software Development Intern</h3><p className="company">Karunadu Technologies Pvt. Ltd. · India</p><p>Prepared and analyzed structured datasets with Python, supported data-cleaning and machine-learning workflows, and documented observations for iterative development.</p><div className="tag-row"><span>Python</span><span>Data preprocessing</span><span>ML workflows</span></div></div></article>
      </div>
    </section>

    <section className="about" id="about">
      <div className="about-card"><Sparkles/><p className="eyebrow">How I work</p><h2>Make the workflow clear. Make the evidence visible.</h2><p>I like software that tells the truth about its state: validated inputs, explicit permissions, readable interfaces, and documentation that distinguishes a tested build from future work.</p></div>
      <div className="about-facts"><div><Layers3/><span>Education</span><strong>M.S. Information Technology</strong><p>Northern Arizona University · May 2026</p></div><div><ShieldCheck/><span>Engineering focus</span><strong>Reliable application workflows</strong><p>APIs, authentication, relational data, testing, and debugging</p></div><div><MapPin/><span>Location</span><strong>Flagstaff, Arizona</strong><p>Open to relocate across the United States</p></div></div>
    </section>

    <section className="contact" id="contact"><p className="eyebrow">Start a conversation</p><h2>Looking for a Java developer who can connect backend logic to a polished user experience?</h2><div><a className="button light" href="mailto:nityaroshinikandula412@gmail.com">Email Nitya <ArrowUpRight size={17}/></a><a href="https://www.linkedin.com/in/nitya-roshini-kandula-a44335283/"><ExternalLink size={16}/>LinkedIn</a><a href={github}><GitBranch size={16}/>GitHub</a></div></section>
    <footer><div className="wordmark"><span>NR</span><b>Nitya Roshini Kandula</b></div><p>Java Full Stack Developer · Portfolio projects use synthetic demo data.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
