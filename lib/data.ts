export type Testimonial = {
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Avinash", quote: "Everyone is so kind and humble here. I love to talk to them." },
  {
    name: "Ankit Ram",
    quote:
      "An absolute gem of a group with great people who are up for any kind of help — literally the best thing in the India OSS community.",
  },
  {
    name: "Vijay Fulwariya",
    quote:
      "It took me around 20 days of effort to see my first PR merged, and that moment was truly special. Still learning, still contributing, just getting started.",
  },
  {
    name: "Mohammad Sakib",
    quote:
      "The people here helped me understand how to approach open source, choose the right projects, and contribute more effectively.",
  },
  {
    name: "Atishay Jain",
    quote:
      "The meets, the insights, the people around, and the mentorship — not just from the mods but the entire community — helped me a lot. Exactly like OSS!",
  },
  {
    name: "Mithul Nama",
    quote:
      "There is no unnecessary hierarchy. Anyone can ask questions, share their thoughts, or help others — that makes the community very welcoming.",
  },
  {
    name: "Akshita Singh",
    quote:
      "Being able to see how the community works together made all the difference. Thanks to that support, I merged my very first PR in Meshery!",
  },
  {
    name: "Suyog Habbu",
    quote:
      "I came to know about the Headlamp project from this community and now I'm an active contributor there. This community helped me get there.",
  },
  {
    name: "Krishna Garg",
    quote:
      "I've got 4 PRs merged on pandas-stubs and pandas — slow but steady, thanks to such good mentors and the weekly meets.",
  },
  {
    name: "Neel Kumar",
    quote:
      "This was my first time being in a community that truly feels like one — people here are so active and genuine.",
  },
  {
    name: "Rishi Singh",
    quote:
      "I had 3 merged PRs before submitting my LFX proposal, all guided from that very first offline meet. It all started there.",
  },
  {
    name: "Gaurav Patil",
    quote:
      "The community spread awareness about open source when it was still a niche sector — beginners now have a space to ask doubts without hesitation.",
  },
  {
    name: "Jitendra Rewar",
    quote:
      "My journey started with GSSoC, then Apicurio Registry as part of the LFX project. Getting PRs merged and reviewing others' PRs has been a great learning experience.",
  },
  {
    name: "Shivam Singh",
    quote:
      "The community feels like a family — serious talks, funny chats, and learning sessions. Helpful not just for open source but for becoming a good software dev.",
  },
  {
    name: "Chandan Sahoo",
    quote:
      "After joining I felt a positive peer pressure — in 2-3 weeks I made 3-4 PRs, real bugs and features, not just docs. It made me believe I could contribute meaningfully.",
  },
  {
    name: "Siri",
    quote:
      "Our admin's advice to find the 'why' behind the code genuinely helped. Currently I'm focused on trying to contribute to LLVM.",
  },
  {
    name: "Ashish Tomer",
    quote:
      "For the last month I've been contributing to Rucio, a CERN-based data management system — 2 merged PRs so far. If I want to know something, I just ping the group.",
  },
  {
    name: "Aaysha Sinha",
    quote:
      "The team guided us at every step, and there was never such a thing as a stupid doubt. Really grateful to have found such a supportive community.",
  },
  {
    name: "Ritu Raj",
    quote:
      "Even though I didn't participate in LFX or GSoC, this group motivated me to start contributing — I've got around 6-7 PRs merged since joining.",
  },
  {
    name: "Tushar Motwani",
    quote:
      "The discussions about open source gave me a lot of insight and motivation to contribute with real value. Just got my first PR merged in a workflow builder SaaS.",
  },
];

export const testimonialsSheetUrl =
  "https://docs.google.com/spreadsheets/d/1YyJwAqBSvlx1HkpZDNJRHQCWN8ImTPPxwpXt2PCDeBI/edit?usp=sharing";

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
