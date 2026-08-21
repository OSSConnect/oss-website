export const heroStats = [
  { value: "800+", label: "Members", detail: "Contributors across borders" },
  { value: "500+", label: "Students Supported", detail: "Through first OSS milestones" },
  { value: "20+", label: "Projects", detail: "Across the OSS ecosystem" },
  { value: "10", label: "Knowledge Sessions", detail: "Shared in the first months" },
];

export const gapSteps = [
  { number: "01", title: "Discover", question: "Where do I start?" },
  { number: "02", title: "Contribute", question: "How do real projects actually work?" },
  { number: "03", title: "Collaborate", question: "How do I work with maintainers and communities professionally?" },
  { number: "04", title: "Grow", question: "How do I turn a first contribution into long-term impact?" },
];

export const impactSteps = [
  { number: "01", title: "Understand Open Source", detail: "Projects, communities, Git & GitHub, contribution workflows" },
  { number: "02", title: "Make a First Contribution", detail: "Find issues, improve docs or code, and open a real PR" },
  { number: "03", title: "Experience Real Review", detail: "Learn PR etiquette, feedback, iteration and maintainer collaboration" },
  { number: "04", title: "Keep Growing", detail: "Build confidence, contribute consistently and help peers" },
];

export const impactPillars = ["Real-world skills", "Collaborative mindset", "Give-back culture"];

export type Achiever = {
  name: string;
  tags: string[];
};

export const achievers: Achiever[] = [
  { name: "Sumit Goyal", tags: ["Member @ Kubernetes", "GSoC @ JSON Schema", "LFX @ Kmesh", "LFX Mentor"] },
  { name: "Shubhang Sinha", tags: ["GSoC @ DeepChem", "LFX @ Talent Angels"] },
  { name: "Krishna Gupta", tags: ["GSoC @ Kubeflow", "Member @ Kubeflow"] },
  { name: "Yash Israni", tags: ["Maintainer @ Kmesh", "Member @ Volcano-sh", "LFX Mentor", "OSSP'25 Kmesh"] },
  { name: "Lakshit Verma", tags: ["GSoC '26", "LiFT '26", "C4GT '25"] },
  { name: "Krrish Biswas", tags: ["GSoC '26 @ Fossology", "LFX '26 @ Minder", "Minder Maintainer", "2× Research Papers"] },
  { name: "Om", tags: ["GSoC '26 @ OpenAstronomy"] },
  { name: "Rahul Shendre", tags: ["LFX '26 @ PipeCD", "C4GT '25 @ PlanetRead"] },
  { name: "Suhani", tags: ["CNCF KubeCon + CloudNativeCon", "North America '26 Speaker"] },
  { name: "Agnivesh", tags: ["GSoC Mentor @ JSON Schema"] },
  { name: "Atharv Yadav", tags: ["Maintainer @ Kiwix", "GSoC @ Kiwix"] },
  { name: "Paras", tags: ["GSoC '26 @ Catrobat"] },
  { name: "Mithul Nama", tags: ["President, TES", "GitMCP & LFDT Contributor", "Fully Funded OSS Attendee", "OSS Writer"] },
  { name: "Sapnil Biswas", tags: ["GSoC '26", "Drupal Association Mentee"] },
  { name: "Atharva Mhaske", tags: ["GSoC @ OpenScienceLabs"] },
  { name: "Avinash Kumar Deepak", tags: ["GSoC '26 @ Alaska", "Member @ Volcano"] },
  { name: "Shutosh Mishra", tags: ["GSoC '26 @ MOFA"] },
  { name: "Jaydeep Pokhariya", tags: ["LFX '26 @ SBOMit", "Minder Member", "DarnIt Maintainer (OSSF)"] },
  { name: "Nitin Awari", tags: ["GSoC '26 @ OWASP"] },
  { name: "Kartik Angiras", tags: ["GSoC '26 @ JBoss / Red Hat"] },
  { name: "Vaibhav", tags: ["Creator & Maintainer @ MDHero"] },
  { name: "Krishiv Mahajan", tags: ["LFX '26 @ Karmada"] },
  { name: "Satwik Sai Prakash", tags: ["GSoC '26 @ NumFOCUS"] },
  { name: "Ayush Kumar", tags: ["LFX '26 @ KRKN-Chaos"] },
];

export const values = [
  { title: "Open", detail: "Learn openly" },
  { title: "Useful", detail: "Create value" },
  { title: "Respectful", detail: "Respect people" },
  { title: "Consistent", detail: "Keep showing up" },
];

export const sessionTopics = [
  { number: "01", title: "Getting Started in OSS", detail: "Projects, communities & contribution basics" },
  { number: "02", title: "GSoC & LFX Strategy", detail: "Programs, preparation & contribution paths" },
  { number: "03", title: "CNCF Project Discovery", detail: "Finding projects that match skills and interests" },
  { number: "04", title: "Contribution Etiquette", detail: "Issues, PRs, reviews & maintainer communication" },
  { number: "05", title: "Maintainer Communication", detail: "Ask better questions and reduce review friction" },
  { number: "06", title: "Proposals & Engagement", detail: "Show up, communicate and contribute consistently" },
];

export const sessionFeedback = [
  "Learned much more about LFX.",
  "Got to know what's going on in open source.",
];

export const ecosystemOrgs = [
  "CNCF",
  "Kubernetes",
  "Kubeflow",
  "Headlamp",
  "Jaeger",
  "Kiwix",
  "JSON Schema",
  "Meshery",
  "PipeCD",
  "DeepChem",
  "Fossology",
  "Kmesh",
  "OpenWISP",
  "SugarLabs",
  "NumFOCUS",
  "Open Science Labs",
  "OpenSSF",
  "Flare",
  "C2SI",
];

export const roadmapStats = [
  { value: "5,000+", label: "Members" },
  { value: "50+", label: "Campus Communities" },
  { value: "25+", label: "College Partnerships" },
  { value: "10+", label: "Industry / OSS Partners" },
];

export const roadmapSteps = [
  { number: "01", title: "Scale the Community", detail: "Grow a high-trust contributor network across campuses and regions." },
  { number: "02", title: "Deepen Contributor Learning", detail: "100+ technical sessions · Contributor cohorts · Maintainer office hours" },
  { number: "03", title: "Connect the Ecosystem", detail: "College partnerships · Industry & OSS collaboration · Cross-campus network" },
  { number: "04", title: "Build Flagship Programs", detail: "Multi-city OSS meetups · National OSS hackathon · Annual community conference · Contributor → maintainer track" },
];

export const contact = {
  phone: "+91-9460357477",
  linkedin: "https://linkedin.com/company/oss-connected",
  email: "harshpopatk5@gmail.com",
  location: "Kota, Rajasthan",
};
