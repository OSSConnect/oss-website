import { getResources } from "@/app/actions/resources";
import { ExternalLink, FileText, Video, Link as LinkIcon, BookOpen } from "lucide-react";

export const metadata = {
  title: "Resources | OSS Community",
  description: "Helpful resources, guides, and tools for our community.",
};

const DUMMY_RESOURCES = [
  {
    id: 1,
    title: "Git & GitHub Crash Course",
    description: "A comprehensive guide to making your first open-source contribution.",
    type: "Video",
    url: "#",
  },
  {
    id: 2,
    title: "Community Guidelines",
    description: "Read our code of conduct and community rules.",
    type: "Document",
    url: "#",
  },
  {
    id: 3,
    title: "Design System Assets",
    description: "Figma files and brand guidelines for our OSS projects.",
    type: "Design",
    url: "#",
  },
];

const TypeIcon = ({ type }: { type: string }) => {
  switch (type.toLowerCase()) {
    case "video": return <Video size={20} className="text-oss-lime" />;
    case "document": return <FileText size={20} className="text-oss-lime" />;
    case "design": return <BookOpen size={20} className="text-oss-lime" />;
    default: return <LinkIcon size={20} className="text-oss-lime" />;
  }
};

export default async function ResourcesPage() {
  const dbResources = await getResources();
  const resources = dbResources && dbResources.length > 0 ? dbResources : DUMMY_RESOURCES;

  return (
    <main className="pt-24 pb-16 min-h-screen bg-oss-bg">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-display font-bold text-oss-lime mb-4">Resources</h1>
        <p className="text-oss-muted mb-12 max-w-2xl text-lg">
          A curated collection of tools, guides, and files to help you contribute. 
          Upload your resource links to the Supabase database to see them here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a 
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col p-6 bg-oss-panel rounded-2xl border border-oss-border hover:border-oss-lime/50 transition-colors h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-oss-card rounded-xl border border-oss-border group-hover:bg-oss-border transition-colors">
                  <TypeIcon type={resource.type} />
                </div>
                <ExternalLink size={18} className="text-oss-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-semibold text-oss-text mb-2 group-hover:text-oss-lime transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-oss-muted mb-4 flex-grow">
                {resource.description}
              </p>
              
              <div className="text-xs font-mono text-oss-border mt-auto pt-4 border-t border-oss-border/50">
                {resource.type}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
