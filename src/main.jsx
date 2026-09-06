import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Code2,
  Database,
  Factory,
  FileSpreadsheet,
  Github,
  GraduationCap,
  HeartPulse,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  PackageSearch,
  Palette,
  PanelsTopLeft,
  Phone,
  RefreshCw,
  Rocket,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UsersRound,
  Workflow,
  Wrench
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['Home', 'home', '/'],
  ['Services', 'services', '/services'],
  ['Solutions', 'solutions', '/solutions'],
  ['Industries', 'industries', '/industries'],
  ['ERP', 'erp', '/erp'],
  ['Projects', 'projects', '/projects'],
  ['About', 'about', '/about'],
  ['Contact', 'contact', '/contact']
];

const serviceCards = [
  ['Custom Software Development', 'Software designed specifically around your business requirements.', Code2],
  ['Software Customization', 'Modify existing software, add modules, change workflows and adapt systems to business needs.', Wrench],
  ['ERP Development', 'Integrated systems for operations, employees, projects, inventory, sales, purchasing, billing and more.', Layers3],
  ['CRM Development', 'Customer, lead, sales and follow-up management built around your sales process.', UsersRound],
  ['HRMS', 'Employee management, attendance, leave, payroll and workforce workflows.', ClipboardList],
  ['Business Automation', 'Convert repetitive manual processes into reliable automated digital workflows.', Workflow],
  ['Dashboard & MIS', 'Management dashboards, KPI reporting and practical business analytics.', ChartNoAxesCombined],
  ['AI Integration', 'Add practical AI capabilities to existing or new business applications.', BrainCircuit],
  ['API & System Integration', 'Connect different applications, services and business systems.', Network],
  ['Web Application Development', 'Modern, responsive full-stack business applications for daily operations.', PanelsTopLeft]
];

const industries = [
  {
    name: 'MEP & Construction',
    icon: Building2,
    items: ['Projects', 'DPR', 'Employees', 'Materials', 'Purchase', 'Subcontractors', 'Billing', 'Payments'],
    workflow: ['Project', 'DPR', 'Material Requirement', 'Purchase', 'Site', 'Billing', 'Payment']
  },
  {
    name: 'Architecture & Interior Design',
    icon: Palette,
    items: ['Clients', 'Projects', 'Design', 'Drawings', 'Revisions', 'BOQ', 'Approvals', 'Vendors', 'Billing'],
    workflow: ['Lead', 'Client', 'Project', 'Design', 'Revision', 'Approval', 'BOQ', 'Billing']
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    items: ['Production', 'Raw Materials', 'Inventory', 'Suppliers', 'Quality', 'Dispatch', 'Sales'],
    workflow: ['Purchase', 'Raw Material', 'Production', 'Quality', 'Inventory', 'Dispatch']
  },
  {
    name: 'Salon & Beauty',
    icon: Scissors,
    items: ['Appointments', 'Customers', 'Staff', 'Services', 'Packages', 'Inventory', 'Billing'],
    workflow: ['Customer', 'Appointment', 'Service', 'Billing', 'Payment', 'Feedback']
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    items: ['Patients', 'Appointments', 'Doctors', 'Billing', 'Records', 'Inventory'],
    workflow: ['Patient', 'Appointment', 'Consultation', 'Records', 'Billing']
  },
  {
    name: 'Education',
    icon: GraduationCap,
    items: ['Students', 'Admissions', 'Courses', 'Batches', 'Attendance', 'Fees', 'Exams'],
    workflow: ['Admission', 'Batch', 'Attendance', 'Fees', 'Exam', 'Report']
  },
  {
    name: 'Retail & Trading',
    icon: ShoppingBag,
    items: ['Products', 'Purchase', 'Inventory', 'Customers', 'Sales', 'Invoices', 'Payments'],
    workflow: ['Purchase', 'Inventory', 'Customer', 'Sale', 'Invoice', 'Payment']
  },
  {
    name: 'Logistics',
    icon: Truck,
    items: ['Orders', 'Vehicles', 'Drivers', 'Dispatch', 'Delivery', 'Tracking'],
    workflow: ['Order', 'Vehicle', 'Dispatch', 'Tracking', 'Delivery', 'Proof']
  },
  {
    name: 'Professional Services',
    icon: BriefcaseBusiness,
    items: ['Clients', 'Projects', 'Employees', 'Tasks', 'Expenses', 'Invoices'],
    workflow: ['Client', 'Project', 'Task', 'Timesheet', 'Invoice', 'Payment']
  }
];

const portfolio = [
  {
    title: 'MEP Business Management',
    industry: 'MEP / Construction',
    problem: 'Disconnected project, material, attendance and billing processes.',
    solution: 'A connected management system for DPR, inventory, purchase and MIS visibility.',
    modules: ['Projects', 'DPR', 'Inventory', 'Purchase', 'Billing', 'MIS'],
    tech: ['React', 'Node.js', 'SQL', 'REST API'],
    status: 'Prototype'
  },
  {
    title: 'Architecture & Interior Management',
    industry: 'Architecture',
    problem: 'Design revisions, BOQ approvals and vendor coordination become difficult to track.',
    solution: 'A workflow-led ERP concept for clients, drawings, versions, BOQ and billing.',
    modules: ['Clients', 'Drawings', 'BOQ', 'Approvals', 'Vendors'],
    tech: ['React', 'Node.js', 'MongoDB'],
    status: 'Concept'
  },
  {
    title: 'HRMS',
    industry: 'Multi-industry',
    problem: 'Employee records, attendance and leave approvals are handled manually.',
    solution: 'A practical HRMS foundation for employee workflows and payroll-ready data.',
    modules: ['Employees', 'Attendance', 'Leave', 'Payroll', 'Reports'],
    tech: ['React', 'Express.js', 'SQL'],
    status: 'In Development'
  },
  {
    title: 'Inventory Management',
    industry: 'Retail / Manufacturing',
    problem: 'Stock visibility, purchase tracking and dispatch updates are scattered.',
    solution: 'A centralized inventory system with purchase, stock movement and reports.',
    modules: ['Products', 'Purchase', 'Stock', 'Dispatch', 'Reports'],
    tech: ['React', 'Node.js', 'MongoDB'],
    status: 'Prototype'
  },
  {
    title: 'CRM',
    industry: 'Sales Teams',
    problem: 'Leads and customer follow-ups are tracked across chats and spreadsheets.',
    solution: 'A CRM workflow for enquiries, leads, follow-ups and conversion visibility.',
    modules: ['Leads', 'Customers', 'Follow-ups', 'Pipeline'],
    tech: ['React', 'REST API', 'SQL'],
    status: 'Concept'
  },
  {
    title: 'Business Dashboard',
    industry: 'Management',
    problem: 'Decision-makers need quick visibility across departments.',
    solution: 'Role-based dashboards and MIS reporting for daily business visibility.',
    modules: ['KPIs', 'Reports', 'Analytics', 'Alerts'],
    tech: ['Power BI', 'Excel', 'Google Sheets', 'APIs'],
    status: 'Prototype'
  },
  {
    title: 'AI Business Assistant',
    industry: 'Operations',
    problem: 'Teams spend time searching data and summarizing reports manually.',
    solution: 'AI-assisted search, report summaries and workflow suggestions for business apps.',
    modules: ['Q&A', 'Summaries', 'Search', 'Notifications'],
    tech: ['AI APIs', 'LLM Integration', 'Automation'],
    status: 'Concept'
  },
  {
    title: 'Custom Web Applications',
    industry: 'Different Business Needs',
    problem: 'Standard software does not match the company’s process.',
    solution: 'Full-stack applications designed around specific workflows and roles.',
    modules: ['Custom Modules', 'APIs', 'Dashboards', 'Admin Tools'],
    tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
    status: 'Completed'
  }
];

const approach = [
  ['01', 'Understand', 'Understand the company and requirements.'],
  ['02', 'Analyze', 'Study existing processes and identify inefficiencies.'],
  ['03', 'Design', 'Design the right workflow and user experience.'],
  ['04', 'Develop', 'Build or customize the software.'],
  ['05', 'Integrate', 'Connect APIs, systems and business tools.'],
  ['06', 'Automate', 'Reduce repetitive manual work.'],
  ['07', 'Improve', 'Continuously optimize the system as the business grows.']
];

function routeFromPath(pathname) {
  const match = navItems.find(([, page, path]) => path === pathname || `/${page}` === pathname);
  return match?.[1] || 'home';
}

function pathForPage(page) {
  return navItems.find(([, id]) => id === page)?.[2] || '/';
}

function scrollToId(id) {
  const page = navItems.find(([, route]) => route === id)?.[1];
  if (page) {
    window.dispatchEvent(new CustomEvent('monika:navigate', { detail: page }));
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="MONIKA.DEV home" onClick={(event) => { event.preventDefault(); onNavigate('home'); setOpen(false); }}>
        <span className="brand-mark">M</span>
        <span>MONIKA.DEV</span>
      </a>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <button className={currentPage === id ? 'active' : ''} key={id} onClick={() => { onNavigate(id); setOpen(false); }}>{label}</button>
        ))}
        <button className="nav-cta" onClick={() => { onNavigate('contact'); setOpen(false); }}>Discuss Your Requirement</button>
      </nav>
    </header>
  );
}

function PageHero({ kicker, title, copy, children }) {
  return (
    <section className="page-hero" id="top">
      <div>
        <div className="eyebrow">{kicker}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      {children || (
        <div className="page-hero-visual" aria-hidden="true">
          <span />
          <span />
          <span />
          <strong>Requirement → Workflow → Software → Growth</strong>
        </div>
      )}
    </section>
  );
}

function EcosystemVisual() {
  const disconnected = ['Excel', 'WhatsApp', 'Paper', 'Email', 'Separate Software'];
  const connected = ['CRM', 'ERP', 'HRMS', 'Projects', 'Inventory', 'Finance', 'Analytics', 'AI'];
  return (
    <div className="ecosystem" aria-label="Visualization of disconnected tools becoming one connected business system">
      <div className="orbit-grid">
        {disconnected.map((item, index) => (
          <span className="tool-chip" style={{ '--i': index }} key={item}>{item}</span>
        ))}
      </div>
      <div className="system-core">
        <Network size={30} aria-hidden="true" />
        <strong>One Connected Business System</strong>
        <small>People, processes and data working together</small>
      </div>
      <div className="module-ring">
        {connected.map((item, index) => (
          <span className="module-dot" style={{ '--i': index }} key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function BusinessEngine() {
  const nodes = ['People', 'Processes', 'Customers', 'Projects', 'Inventory', 'Finance', 'Data', 'AI'];
  return (
    <section className="engine-section" aria-labelledby="engine-title">
      <div className="section-kicker">Visual Signature</div>
      <h2 id="engine-title">The Business Engine</h2>
      <p className="section-lead">Software connects the moving parts of your company so everyday work becomes easier to see, manage and improve.</p>
      <div className="business-engine">
        <div className="engine-core">
          <BriefcaseBusiness size={32} aria-hidden="true" />
          <strong>Your Business</strong>
        </div>
        {nodes.map((node, index) => (
          <span className="engine-node" style={{ '--i': index }} key={node}>{node}</span>
        ))}
      </div>
      <div className="engine-flow">
        {['Connected Business', 'Smooth Operations', 'Better Decisions', 'Continuous Growth'].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">Custom Software Development</div>
        <h1>Your Business Is Unique. Your Software Should Be Too.</h1>
        <p>I build and customize business software around your requirements, connecting people, processes and data so your company can operate more smoothly and grow with confidence.</p>
        <div className="keyword-strip">
          {['Custom Software', 'ERP', 'CRM', 'HRMS', 'Automation', 'Dashboards', 'AI Integration', 'Web Applications'].map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => scrollToId('contact')}>Start a Project <ArrowRight size={18} /></button>
          <button className="secondary-button" onClick={() => scrollToId('services')}>See What I Build</button>
        </div>
      </div>
      <EcosystemVisual />
    </section>
  );
}

function CoreMessage() {
  const cards = [
    ['Understand', 'First understand how the business actually works.', FileSpreadsheet],
    ['Build', 'Design and develop software around those requirements.', Blocks],
    ['Improve', 'Continuously optimize workflows, automate repetitive work and prepare the business for growth.', Rocket]
  ];
  return (
    <section className="section" id="solutions">
      <div className="section-kicker">The Philosophy</div>
      <h2>I Don’t Just Build Software. I Solve Business Problems.</h2>
      <div className="three-grid">
        {cards.map(([title, body, Icon]) => (
          <article className="large-card" key={title}>
            <Icon size={28} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="process-line">
        {['Business Problem', 'Digital Solution', 'Better Operations', 'Growth'].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section tinted">
      <div className="section-kicker">Services</div>
      <h2>What I Can Build For Your Business</h2>
      <div className="services-grid">
        {serviceCards.map(([title, body, Icon]) => (
          <article className="service-card" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Customization() {
  const improvements = ['Add new features', 'Create new modules', 'Change workflows', 'Improve UI/UX', 'Fix functionality', 'Connect APIs', 'Automate tasks', 'Improve dashboards', 'Add reporting', 'Integrate AI', 'Improve performance', 'Modernize older apps'];
  return (
    <section className="split-section">
      <div>
        <div className="section-kicker">Customization</div>
        <h2>Already Have Software? Let’s Make It Work Better.</h2>
        <p className="section-lead">You don’t always need a completely new system. Sometimes the right move is to improve what already exists and reshape it around the workflow your team actually follows.</p>
        <div className="pill-list">
          {improvements.map((item) => <span key={item}>{item}</span>)}
        </div>
        <button className="text-button" onClick={() => scrollToId('contact')}>Tell Me What You Want to Improve <ArrowRight size={17} /></button>
      </div>
      <div className="transform-visual" aria-label="Existing software transforming into improved software">
        <div className="mini-app muted-app">
          <span>Existing Application</span>
          <div />
          <div />
          <div />
        </div>
        <RefreshCw className="transform-icon" aria-hidden="true" />
        <div className="mini-app improved-app">
          <span>Improved Workflow</span>
          <div />
          <div />
          <div />
          <small>New modules • Better reports • Automation</small>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const [selected, setSelected] = useState(industries[0]);
  return (
    <section className="section">
      <div className="section-kicker">Industries</div>
      <h2>One Development Approach. Different Business Needs.</h2>
      <div className="industry-layout">
        <div className="industry-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                className={selected.name === industry.name ? 'industry-card active' : 'industry-card'}
                key={industry.name}
                onClick={() => setSelected(industry)}
              >
                <Icon size={22} aria-hidden="true" />
                <strong>{industry.name}</strong>
                <small>{industry.items.slice(0, 4).join(' • ')}</small>
              </button>
            );
          })}
        </div>
        <div className="workflow-panel" aria-live="polite">
          <span className="panel-label">{selected.name} Workflow</span>
          <h3>Customized Around The Actual Process</h3>
          <div className="workflow-steps">
            {selected.workflow.map((step) => <span key={step}>{step}</span>)}
          </div>
          <div className="module-tags">
            {selected.items.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ErpSection() {
  const modules = ['HRMS', 'CRM', 'Inventory', 'Purchase', 'Sales', 'Projects', 'Attendance', 'Billing', 'Payments', 'Reports', 'Analytics'];
  return (
    <section className="section dark-section">
      <div className="section-kicker">ERP Solutions</div>
      <h2>When Your Business Needs Everything Connected.</h2>
      <p className="section-lead">Custom ERP solutions that bring your business processes together in one place.</p>
      <div className="erp-map">
        {modules.map((module) => <span key={module}>{module}</span>)}
      </div>
      <div className="truth-note">
        <strong>ERP is not one-size-fits-all.</strong>
        <p>Every company has different processes, approvals, roles and reporting requirements. I customize the system around those requirements.</p>
      </div>
    </section>
  );
}

function ConceptExamples() {
  const examples = [
    {
      title: 'Architecture & Interior Design Management',
      label: 'ERP Concept / Demo',
      workflow: ['Lead', 'Client', 'Project', 'Concept', 'Design', 'Revision', 'Approval', 'BOQ', 'Vendor', 'Execution', 'Billing', 'Payment'],
      modules: ['Clients', 'Projects', 'Drawings', 'Versions', 'Approvals', 'BOQ', 'Estimation', 'Quotations', 'Tasks', 'Site Visits', 'Vendors', 'Invoices', 'Payments']
    },
    {
      title: 'MEP / Construction Management',
      label: 'Prototype / Demo',
      workflow: ['Project', 'DPR', 'Material Requirement', 'Indent', 'Purchase', 'Dispatch', 'Site', 'Billing', 'Payment'],
      modules: ['Project Management', 'Employee Management', 'Attendance', 'DPR', 'Inventory', 'Purchase', 'Indent', 'Dispatch', 'Billing', 'Payments', 'MIS']
    },
    {
      title: 'Salon & Beauty Business Management',
      label: 'Concept / Demo',
      workflow: ['Customer', 'Appointment', 'Service', 'Billing', 'Payment', 'Feedback'],
      modules: ['Appointments', 'Customers', 'Staff', 'Services', 'Packages', 'Memberships', 'Inventory', 'Billing', 'Reports']
    },
    {
      title: 'Manufacturing Management',
      label: 'Concept / Demo',
      workflow: ['Purchase', 'Raw Material', 'Production', 'Quality', 'Finished Goods', 'Inventory', 'Dispatch', 'Customer'],
      modules: ['Production', 'Inventory', 'Purchase', 'Suppliers', 'Quality', 'Sales', 'Dispatch', 'Customers', 'Reports']
    }
  ];
  return (
    <section className="section">
      <div className="section-kicker">Product Concepts</div>
      <h2>Business Systems Shaped Around Real Workflows.</h2>
      <div className="concept-grid">
        {examples.map((example) => (
          <article className="concept-card" key={example.title}>
            <span className="status-badge">{example.label}</span>
            <h3>{example.title}</h3>
            <div className="compact-flow">
              {example.workflow.map((step) => <span key={step}>{step}</span>)}
            </div>
            <div className="module-tags">
              {example.modules.map((module) => <span key={module}>{module}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RequirementsSection() {
  return (
    <section className="requirements-band">
      <div>
        <div className="section-kicker">Requirements First</div>
        <h2>You Tell Me What You Need. We Figure Out How To Build It.</h2>
        <p>Maybe you are running your business through Excel. Maybe you have an old application that no longer fits your workflow. Maybe you use several disconnected systems. Maybe you need one custom application built from scratch. Whatever the situation, the first step is understanding the requirement.</p>
      </div>
      <button className="primary-button" onClick={() => scrollToId('contact')}>Discuss My Requirement <ArrowRight size={18} /></button>
    </section>
  );
}

function GrowthSection() {
  const flow = ['Manual Work', 'Digital Workflow', 'Automation', 'Better Visibility', 'Better Decisions', 'Efficient Operations', 'Scalable Growth'];
  return (
    <section className="section growth-section">
      <div className="section-kicker">Business Growth</div>
      <h2>Software Is Not The Destination. Better Business Is.</h2>
      <p className="section-lead">My objective is not simply to deliver another application. The objective is to create a system that helps the business operate better today and remain ready for tomorrow.</p>
      <div className="growth-flow">
        {flow.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function AiSection() {
  const aiItems = [
    ['AI Business Assistant', 'Prototype'],
    ['Automated Report Summaries', 'Available'],
    ['Document Processing', 'Prototype'],
    ['Invoice Data Extraction', 'Prototype'],
    ['Intelligent Search', 'Prototype'],
    ['Customer Enquiry Classification', 'Available'],
    ['Business Q&A', 'Prototype'],
    ['Predictive Insights', 'Coming Soon'],
    ['Workflow Suggestions', 'Coming Soon'],
    ['Automated Notifications', 'Available']
  ];
  return (
    <section className="section tinted">
      <div className="section-kicker">AI Integration</div>
      <h2>Make Your Software Smarter.</h2>
      <p className="section-lead">AI can be integrated into business applications where it is genuinely useful, such as summarizing reports, extracting information, improving search and helping teams act faster.</p>
      <div className="ai-grid">
        {aiItems.map(([item, status]) => (
          <article className="ai-card" key={item}>
            <Bot size={22} aria-hidden="true" />
            <strong>{item}</strong>
            <span className={`status ${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState(portfolio[0]);
  return (
    <section className="section">
      <div className="section-kicker">Portfolio</div>
      <h2>Selected Work & Product Concepts</h2>
      <div className="portfolio-layout">
        <div className="portfolio-list">
          {portfolio.map((project) => (
            <button
              className={active.title === project.title ? 'portfolio-tab active' : 'portfolio-tab'}
              key={project.title}
              onClick={() => setActive(project)}
            >
              <span>{project.title}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>
        <article className="case-study">
          <span className="status-badge">{active.status}</span>
          <h3>{active.title}</h3>
          <div className="case-grid">
            <div><strong>Industry</strong><p>{active.industry}</p></div>
            <div><strong>The Challenge</strong><p>{active.problem}</p></div>
            <div><strong>Proposed Solution</strong><p>{active.solution}</p></div>
            <div><strong>Business Value</strong><p>Less manual work, better visibility, centralized data, faster reporting, improved coordination and scalable workflow.</p></div>
          </div>
          <div className="module-tags">{active.modules.map((module) => <span key={module}>{module}</span>)}</div>
          <div className="tech-row">{active.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </article>
      </div>
    </section>
  );
}

function Technology() {
  const stacks = {
    Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'REST APIs'],
    Database: ['MongoDB', 'SQL'],
    Analytics: ['Power BI', 'Excel', 'Google Sheets'],
    Other: ['Git', 'GitHub', 'Cloud Deployment', 'API Integration'],
    AI: ['AI APIs', 'LLM Integration', 'Automation']
  };
  return (
    <section className="section dark-section">
      <div className="section-kicker">Technology</div>
      <h2>Modern Technology. Practical Solutions.</h2>
      <div className="stack-grid">
        {Object.entries(stacks).map(([group, items]) => (
          <article className="stack-card" key={group}>
            <Database size={22} aria-hidden="true" />
            <h3>{group}</h3>
            <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section">
      <div className="section-kicker">My Approach</div>
      <h2>Understand The Business. Build The Right Solution. Keep Improving.</h2>
      <div className="approach-timeline">
        {approach.map(([number, title, body]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyWork() {
  const reasons = [
    ['Business-Focused', 'I focus on how the software helps the business operate.'],
    ['Flexible', 'Build from scratch or customize existing software.'],
    ['Requirement-Driven', 'The solution starts with the client’s actual requirements.'],
    ['Scalable', 'Build with future growth and additional modules in mind.'],
    ['Practical', 'Focus on useful features rather than unnecessary complexity.'],
    ['Continuous Improvement', 'Software should evolve as the business evolves.']
  ];
  return (
    <section className="section tinted">
      <div className="section-kicker">Why Work With Me</div>
      <h2>Built Around Practical Business Outcomes.</h2>
      <div className="reason-grid">
        {reasons.map(([title, body]) => (
          <article className="reason-card" key={title}>
            <CheckCircle2 size={22} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="split-section about-section" id="about">
      <div>
        <div className="section-kicker">About MONIKA.DEV</div>
        <h2>I Build Technology Around Real Business Needs.</h2>
        <p className="section-lead">I combine business process understanding with software development, automation, analytics and modern web technologies to design systems that match how teams actually work.</p>
        <p>My work includes React, Node.js, databases, APIs, dashboards, MIS, business automation, ERP, CRM, HRMS and AI integration. The aim is simple: understand the business, build the right solution, make work smoother and keep growing.</p>
      </div>
      <div className="about-panel">
        {['Business process understanding', 'Software development', 'Automation', 'Analytics', 'Modern web technologies'].map((item) => (
          <span key={item}><BadgeCheck size={18} aria-hidden="true" />{item}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const industriesList = ['MEP / Construction', 'Architecture', 'Manufacturing', 'Salon / Beauty', 'Healthcare', 'Education', 'Retail', 'Trading', 'Logistics', 'Professional Services', 'Other'];
  const requirementList = ['New Software', 'ERP', 'CRM', 'HRMS', 'Customization', 'Automation', 'Dashboard', 'AI Integration', 'API Integration', 'Existing Software Improvement', 'Other'];
  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <div className="section-kicker">Contact</div>
        <h2>Have A Business Problem? Let’s Turn It Into A Solution.</h2>
        <p>Whether you need software from scratch, want to customize an existing system, or simply want to automate a manual process, let’s start with the requirement.</p>
        <div className="contact-links">
          <a href="mailto:your-email@example.com"><Mail size={18} /> Email placeholder</a>
          <a href="https://wa.me/0000000000"><MessageCircle size={18} /> WhatsApp placeholder</a>
          <a href="tel:+0000000000"><Phone size={18} /> Phone placeholder</a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>Name<input required name="name" autoComplete="name" /></label>
          <label>Company<input name="company" autoComplete="organization" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" /></label>
          <label>Phone / WhatsApp<input name="phone" autoComplete="tel" /></label>
          <label>Industry<select name="industry">{industriesList.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Requirement<select name="requirement">{requirementList.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Current Software / Process<input name="currentProcess" /></label>
          <label>Budget<input name="budget" /></label>
        </div>
        <label>What problem are you trying to solve?<textarea required name="problem" rows="3" /></label>
        <label>What would you like to build or customize?<textarea name="build" rows="3" /></label>
        <label>Message<textarea name="message" rows="3" /></label>
        <div className="form-actions">
          <button className="primary-button" type="submit">Discuss My Requirement <ArrowRight size={18} /></button>
          <button className="secondary-button" type="button" onClick={() => scrollToId('top')}>Request a Consultation</button>
        </div>
        {sent && <p className="form-note" role="status">Thank you. Your requirement summary is ready to be connected to your preferred email or form backend.</p>}
      </form>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('home'); }}>
          <span className="brand-mark">M</span>
          <span>MONIKA.DEV</span>
        </a>
        <p>Custom Software • Business Automation • ERP • AI</p>
        <small>Building software that helps businesses run better and grow continuously.</small>
      </div>
      <div className="footer-links">
        {navItems.map(([label, id]) => <button key={id} onClick={() => onNavigate(id)}>{label}</button>)}
      </div>
      <div className="social-links">
        <a href="https://github.com/your-profile" aria-label="GitHub placeholder"><Github /></a>
        <a href="https://linkedin.com/in/your-profile" aria-label="LinkedIn placeholder"><Linkedin /></a>
        <a href="https://wa.me/0000000000" aria-label="WhatsApp placeholder"><MessageCircle /></a>
        <a href="mailto:your-email@example.com" aria-label="Email placeholder"><Mail /></a>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="brand-position">
        <div className="section-kicker">MONIKA.DEV</div>
        <h2>Software Built Around Your Business.</h2>
        <p>I design, develop and customize software around the way your business actually works, helping companies simplify operations, improve efficiency and build a stronger foundation for growth.</p>
      </section>
      <CoreMessage />
      <BusinessEngine />
      <RequirementsSection />
      <GrowthSection />
      <WhyWork />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Build, Customize, Automate And Improve Business Software."
        copy="Choose the exact kind of help your business needs: a new application, ERP module, dashboard, automation, API connection or practical AI feature."
      />
      <Services />
      <Customization />
      <AiSection />
      <Technology />
      <Approach />
    </>
  );
}

function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Tell Me How Your Business Works. I’ll Shape The Software Around It."
        copy="This page explains the core approach: understand the workflow, remove friction, connect departments and keep improving the system as the business grows."
      >
        <EcosystemVisual />
      </PageHero>
      <CoreMessage />
      <BusinessEngine />
      <RequirementsSection />
      <GrowthSection />
      <AiSection />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Different Businesses Need Different Workflows."
        copy="The same development approach can support construction, architecture, manufacturing, salons, healthcare, education, retail, logistics and professional services."
      />
      <Industries />
      <ConceptExamples />
      <RequirementsSection />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Selected Work And Product Concepts, Clearly Labeled."
        copy="Explore completed work, prototypes and concepts without fake clients, fake results or inflated claims."
      />
      <Portfolio />
      <ConceptExamples />
      <Technology />
    </>
  );
}

function ErpPage() {
  return (
    <>
      <PageHero
        kicker="ERP & Business Systems"
        title="When Your Business Needs Everything Connected."
        copy="Custom ERP is one important part of the work: HRMS, CRM, inventory, purchase, projects, attendance, billing, payments, reports and analytics shaped around your process."
      />
      <ErpSection />
      <ConceptExamples />
      <Customization />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Business Understanding Plus Practical Software Development."
        copy="MONIKA.DEV is positioned around requirement-driven software, business automation, dashboards, ERP, CRM, HRMS and useful AI integration."
      />
      <About />
      <Approach />
      <WhyWork />
      <Technology />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Start The Conversation"
        title="Have A Business Problem? Let’s Turn It Into A Solution."
        copy="Share what you want to build, customize, automate or improve. The first step is understanding the requirement clearly."
      />
      <Contact />
    </>
  );
}

function CurrentPage({ page }) {
  switch (page) {
    case 'services':
      return <ServicesPage />;
    case 'solutions':
      return <SolutionsPage />;
    case 'industries':
      return <IndustriesPage />;
    case 'projects':
      return <ProjectsPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'erp':
      return <ErpPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [page, setPage] = useState(() => routeFromPath(window.location.pathname));

  function navigate(pageId) {
    const nextPath = pathForPage(pageId);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const onPopState = () => setPage(routeFromPath(window.location.pathname));
    const onNavigate = (event) => navigate(event.detail);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('monika:navigate', onNavigate);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('monika:navigate', onNavigate);
    };
  }, []);

  return (
    <>
      <Header currentPage={page} onNavigate={navigate} />
      <main>
        <CurrentPage page={page} />
      </main>
      <Footer onNavigate={navigate} />
      <div className="copyright">© {year} MONIKA.DEV. Placeholder links and contact details should be replaced with actual URLs.</div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
