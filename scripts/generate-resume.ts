import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  convertInchesToTwip,
  ExternalHyperlink,
  PageBreak,
  LevelFormat,
} from 'docx';

const PHONE_PLACEHOLDER = '+91-XXXXX-XXXXX';

const resumeContent = {
  name: 'Mohd Faizan Khan',
  title: 'Lead Software Engineer | Solution Architect | Technical Manager',
  contact: {
    email: 'khanfaizan1196@gmail.com',
    phone: PHONE_PLACEHOLDER,
    linkedin: 'linkedin.com/in/faizan~khan',
    location: 'Gurugram, Haryana, India',
  },
  summary: `Senior engineering leader with 7+ years of experience architecting and building enterprise-scale platforms across pharmaceutical, telecommunications, and enterprise IT domains. Proven track record of leading cross-functional teams, designing distributed systems, and delivering products from zero to production. Expertise in Java, Spring Boot, microservices architecture, and solution design. Led a team of 8 engineers and successfully onboarded multiple enterprise clients to SaaS platforms.`,

  experience: [
    {
      company: 'ZS Associates',
      roles: [
        {
          title: 'Lead Software Engineer',
          period: 'July 2025 – Present',
          highlights: [
            'Leading architecture decisions and engineering execution for ZAIDYN, an AI-powered life sciences commercial platform',
            'Managing a team of 8 engineers across feature development, code reviews, and platform reliability',
            'Architected multi-tenant platform design supporting 4+ enterprise pharma clients with different configurations',
            'Driving performance optimization initiatives resulting in 60% reduction in API latency',
            'Owning solution architecture and client-facing technical solutioning for territory optimization and incentive compensation modules',
          ],
        },
        {
          title: 'Senior Software Engineer',
          period: 'October 2022 – June 2025',
          highlights: [
            'Built and stabilized the ZAIDYN Application Studio (ZAS) — a low-code platform enabling pharma teams to compose data-driven applications',
            'Onboarded 5 enterprise clients with 30+ applications to the ZAS platform from ground up',
            'Engineered architectural workflows for multi-client isolation, tenant configuration, and scalable data pipelines',
            'Led security hardening initiatives including authentication, input validation, and OWASP-compliant patterns',
            'Delivered performance improvements and product design for first-client adoption strategy',
          ],
        },
      ],
      technologies: 'Java, Spring Boot, Python, Flask, Angular, PostgreSQL, AWS Lambda, Docker',
    },
    {
      company: 'Amdocs',
      role: {
        title: 'Software Developer',
        period: 'July 2021 – October 2022',
        highlights: [
          'Contributed to the Real-Time Billing platform — a cloud-native, AI-powered billing engine replacing batch processing for global communications service providers',
          'Developed core billing engine features including real-time charge calculation and event processing flows',
          'Introduced common architectural workflows enabling support for 4+ CSP client configurations',
          'Worked across distributed microservices in a Kubernetes-native environment',
          'Enabled real-time anomaly detection flows within the billing pipeline',
        ],
      },
      technologies: 'Java, Spring Boot, Couchbase, Kubernetes, Docker, Microservices',
    },
    {
      company: 'Infosys Limited',
      roles: [
        {
          title: 'Senior System Engineer',
          period: 'October 2020 – June 2021',
          highlights: [
            'Enhanced InTAP (Infosys Talent Acquisition Platform) with advanced recruiter features supporting Infosys-scale hiring',
            'Built reusable common services adopted by multiple product teams across the organization',
            'Led on-premise server integration and system reliability improvements',
          ],
        },
        {
          title: 'System Engineer',
          period: 'September 2018 – September 2020',
          highlights: [
            'Built InTAP from scratch to production — the platform now handles complete Infosys recruitment across India',
            'Designed core platform architecture for enterprise-scale search performance and reliability',
            'Created foundational services enabling rapid feature development and org-wide adoption',
          ],
        },
      ],
      technologies: 'Java, Spring Boot, Angular, PostgreSQL, REST APIs, On-Premise Infrastructure',
    },
  ],

  skills: {
    languages: 'Java, Python, TypeScript, SQL',
    frameworks: 'Spring Boot, Flask, Angular, Hibernate/JPA',
    databases: 'PostgreSQL, Oracle SQL, Couchbase',
    devops: 'Kubernetes, Docker, AWS Lambda, TeamCity, Git, Linux',
    architecture: 'Microservices Architecture, Distributed Systems, API Design & Governance, Multi-Tenant SaaS Platforms, System Design, Performance Engineering, Security Hardening',
    methodologies: 'Agile/Scrum, CI/CD, Solution Architecture',
  },

  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Bundelkhand University, Jhansi',
    period: '2014 – 2018',
  },

  projects: [
    {
      name: 'ZAIDYN Application Studio (ZAS)',
      description: 'Low-code platform for pharma teams to build data-driven applications without rebuilding the wheel',
      impact: 'Onboarded 5 clients with 30+ applications; 60% API latency reduction',
    },
    {
      name: 'ZAIDYN Field Deployment',
      description: 'AI-powered life sciences commercial platform for territory optimization and incentive compensation',
      impact: 'Supports 4+ enterprise pharma clients with different configurations',
    },
    {
      name: 'Real-Time Billing (RTB)',
      description: 'Cloud-native billing engine replacing batch processing for telecom CSPs',
      impact: 'Enabled 4+ client configurations with real-time charge processing',
    },
    {
      name: 'InTAP',
      description: 'Talent acquisition platform built from zero to production',
      impact: 'Powers complete Infosys recruitment process as of current date',
    },
  ],
};

// Helper function to create a section heading
function createSectionHeading(text: string): Paragraph {
  return new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 100 },
    border: {
      bottom: {
        color: '000000',
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    style: 'sectionHeading',
  });
}

// Helper function to create normal text
function createText(text: string, options: { bold?: boolean; size?: number } = {}): TextRun {
  return new TextRun({
    text,
    bold: options.bold || false,
    size: options.size || 22, // 11pt
    font: 'Calibri',
  });
}

// Helper function for bullet points
function createBullet(text: string): Paragraph {
  return new Paragraph({
    text: text,
    spacing: { after: 60 },
    indent: { left: convertInchesToTwip(0.25) },
    style: 'listBullet',
  });
}

function createSubBullet(text: string): Paragraph {
  return new Paragraph({
    text: text,
    spacing: { after: 40 },
    indent: { left: convertInchesToTwip(0.5) },
    style: 'listBullet',
  });
}

export async function generateResume(): Promise<Document> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 22, // 11pt default
          },
          paragraph: {
            spacing: { line: 276 }, // 1.15 line spacing
          },
        },
      },
      paragraphStyles: [
        {
          id: 'sectionHeading',
          name: 'Section Heading',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            font: 'Calibri',
            size: 24, // 12pt
            bold: true,
            allCaps: true,
          },
          paragraph: {
            spacing: { before: 200, after: 80 },
          },
        },
        {
          id: 'listBullet',
          name: 'List Bullet',
          basedOn: 'Normal',
          run: {
            font: 'Calibri',
            size: 22,
          },
          paragraph: {
            spacing: { after: 40 },
          },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: 'default-bullets',
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: '•',
              style: {
                paragraph: {
                  indent: {
                    left: convertInchesToTwip(0.25),
                    hanging: convertInchesToTwip(0.25),
                  },
                },
              },
            },
            {
              level: 1,
              format: LevelFormat.BULLET,
              text: '○',
              style: {
                paragraph: {
                  indent: {
                    left: convertInchesToTwip(0.5),
                    hanging: convertInchesToTwip(0.25),
                  },
                },
              },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.7),
              bottom: convertInchesToTwip(0.7),
              left: convertInchesToTwip(0.75),
              right: convertInchesToTwip(0.75),
            },
          },
        },
        children: [
          // HEADER - Name
          new Paragraph({
            children: [createText(resumeContent.name, { bold: true, size: 36 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
          }),

          // Title
          new Paragraph({
            children: [createText(resumeContent.title, { size: 24 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),

          // Contact info
          new Paragraph({
            children: [
              createText(resumeContent.contact.email, { size: 20 }),
              createText('  |  ', { size: 20 }),
              createText(resumeContent.contact.phone, { size: 20 }),
              createText('  |  ', { size: 20 }),
              createText(resumeContent.contact.linkedin, { size: 20 }),
              createText('  |  ', { size: 20 }),
              createText(resumeContent.contact.location, { size: 20 }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),

          // SUMMARY
          createSectionHeading('Professional Summary'),
          new Paragraph({
            children: [createText(resumeContent.summary)],
            spacing: { after: 200 },
          }),

          // EXPERIENCE
          createSectionHeading('Professional Experience'),

          // ZS Associates
          new Paragraph({
            children: [
              createText('ZS Associates', { bold: true, size: 24 }),
              createText('  —  Gurugram, Haryana', { size: 22 }),
            ],
            spacing: { before: 150, after: 60 },
          }),

          // Lead role
          new Paragraph({
            children: [
              createText('Lead Software Engineer', { bold: true, size: 22 }),
              createText('  |  July 2025 – Present', { size: 22, bold: false }),
            ],
            spacing: { after: 40 },
          }),
          ...resumeContent.experience[0].roles[0].highlights.map((h) =>
            new Paragraph({
              text: h,
              numbering: { reference: 'default-bullets', level: 0 },
              spacing: { after: 40 },
            })
          ),

          // Senior role
          new Paragraph({
            children: [
              createText('Senior Software Engineer', { bold: true, size: 22 }),
              createText('  |  October 2022 – June 2025', { size: 22, bold: false }),
            ],
            spacing: { before: 120, after: 40 },
          }),
          ...resumeContent.experience[0].roles[1].highlights.map((h) =>
            new Paragraph({
              text: h,
              numbering: { reference: 'default-bullets', level: 0 },
              spacing: { after: 40 },
            })
          ),
          new Paragraph({
            children: [
              createText('Technologies: ', { bold: true, size: 20 }),
              createText(resumeContent.experience[0].technologies, { size: 20 }),
            ],
            spacing: { before: 60, after: 150 },
          }),

          // Amdocs
          new Paragraph({
            children: [
              createText('Amdocs', { bold: true, size: 24 }),
              createText('  —  Pune, Maharashtra', { size: 22 }),
            ],
            spacing: { before: 100, after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Software Developer', { bold: true, size: 22 }),
              createText('  |  July 2021 – October 2022', { size: 22, bold: false }),
            ],
            spacing: { after: 40 },
          }),
          ...resumeContent.experience[1].role.highlights.map((h) =>
            new Paragraph({
              text: h,
              numbering: { reference: 'default-bullets', level: 0 },
              spacing: { after: 40 },
            })
          ),
          new Paragraph({
            children: [
              createText('Technologies: ', { bold: true, size: 20 }),
              createText(resumeContent.experience[1].technologies, { size: 20 }),
            ],
            spacing: { before: 60, after: 150 },
          }),

          // Infosys
          new Paragraph({
            children: [
              createText('Infosys Limited', { bold: true, size: 24 }),
              createText('  —  Chandigarh, India', { size: 22 }),
            ],
            spacing: { before: 100, after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Senior System Engineer', { bold: true, size: 22 }),
              createText('  |  October 2020 – June 2021', { size: 22, bold: false }),
            ],
            spacing: { after: 40 },
          }),
          ...resumeContent.experience[2].roles[0].highlights.map((h) =>
            new Paragraph({
              text: h,
              numbering: { reference: 'default-bullets', level: 0 },
              spacing: { after: 40 },
            })
          ),

          new Paragraph({
            children: [
              createText('System Engineer', { bold: true, size: 22 }),
              createText('  |  September 2018 – September 2020', { size: 22, bold: false }),
            ],
            spacing: { before: 120, after: 40 },
          }),
          ...resumeContent.experience[2].roles[1].highlights.map((h) =>
            new Paragraph({
              text: h,
              numbering: { reference: 'default-bullets', level: 0 },
              spacing: { after: 40 },
            })
          ),
          new Paragraph({
            children: [
              createText('Technologies: ', { bold: true, size: 20 }),
              createText(resumeContent.experience[2].technologies, { size: 20 }),
            ],
            spacing: { before: 60, after: 200 },
          }),

          // PAGE BREAK for page 2
          new Paragraph({ children: [new PageBreak()] }),

          // KEY PROJECTS
          createSectionHeading('Key Projects'),
          ...resumeContent.projects.map((project) => [
            new Paragraph({
              children: [createText(project.name, { bold: true, size: 22 })],
              spacing: { before: 100, after: 40 },
            }),
            new Paragraph({
              children: [createText(project.description, { size: 22 })],
              spacing: { after: 40 },
            }),
            new Paragraph({
              children: [
                createText('Impact: ', { bold: true, size: 20 }),
                createText(project.impact, { size: 20 }),
              ],
              spacing: { after: 100 },
            }),
          ]).flat(),

          // SKILLS
          createSectionHeading('Technical Skills'),
          new Paragraph({
            children: [
              createText('Programming Languages: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.languages, { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Frameworks & Libraries: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.frameworks, { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Databases: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.databases, { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('DevOps & Cloud: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.devops, { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Architecture & System Design: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.architecture, { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Methodologies: ', { bold: true, size: 22 }),
              createText(resumeContent.skills.methodologies, { size: 22 }),
            ],
            spacing: { after: 200 },
          }),

          // EDUCATION
          createSectionHeading('Education'),
          new Paragraph({
            children: [
              createText(resumeContent.education.degree, { bold: true, size: 22 }),
              createText(' in ' + resumeContent.education.field, { size: 22 }),
            ],
            spacing: { after: 40 },
          }),
          new Paragraph({
            children: [
              createText(resumeContent.education.institution, { size: 22 }),
              createText('  |  ' + resumeContent.education.period, { size: 22 }),
            ],
            spacing: { after: 200 },
          }),

          // ADDITIONAL INFO
          createSectionHeading('Additional Information'),
          new Paragraph({
            children: [
              createText('Leadership: ', { bold: true, size: 22 }),
              createText('Led team of 8 engineers; mentor to junior developers; cross-functional collaboration with product and QA', { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Open to Roles: ', { bold: true, size: 22 }),
              createText('Full Stack Developer, Solution Architect, Technical Manager, Lead Software Engineer, Principal Engineer', { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [
              createText('Industry Experience: ', { bold: true, size: 22 }),
              createText('Pharmaceutical Technology (3+ years), Telecommunications (1+ year), Enterprise IT / HR Tech (3+ years)', { size: 22 }),
            ],
            spacing: { after: 60 },
          }),
        ],
      },
    ],
  });

  return doc;
}

export async function main() {
  const { Packer } = await import('docx');
  const fs = await import('fs');
  const path = await import('path');

  const doc = await generateResume();
  const buffer = await Packer.toBuffer(doc);

  const outputPath = path.join(process.cwd(), 'Faizan_Khan_Resume.docx');
  fs.writeFileSync(outputPath, buffer);

  console.log(`Resume generated: ${outputPath}`);
}

main().catch(console.error);
