import { getMembers } from "@/app/actions/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export const metadata = {
  title: "Members | OSS Community",
  description: "Meet the contributors and core team of our open-source community.",
};

// Fallback data to show the design before DB is populated
const DUMMY_MEMBERS = [
  { id: 1, name: "Alice Hacker", role: "Core Maintainer", avatar_url: null, github_url: "#", linkedin_url: "#" },
  { id: 2, name: "Bob Builder", role: "Contributor", avatar_url: null, github_url: "#", linkedin_url: "#" },
  { id: 3, name: "Charlie Code", role: "Community Lead", avatar_url: null, github_url: "#", linkedin_url: "#" },
  { id: 4, name: "Diana Dev", role: "Contributor", avatar_url: null, github_url: "#", linkedin_url: "#" },
  { id: 5, name: "Eve Engineer", role: "Designer", avatar_url: null, github_url: "#", linkedin_url: "#" },
];

export default async function MembersPage() {
  const dbMembers = await getMembers();
  const members = dbMembers && dbMembers.length > 0 ? dbMembers : DUMMY_MEMBERS;

  return (
    <main className="pt-24 pb-16 min-h-screen bg-oss-bg">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-display font-bold text-oss-lime mb-4">Our Community</h1>
        <p className="text-oss-muted mb-12 max-w-2xl text-lg">
          Meet the builders, designers, and contributors who make this open-source community thrive. 
          Upload your member photos to the Supabase database to see them appear here.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col items-center p-6 bg-oss-panel rounded-2xl border border-oss-border hover:border-oss-lime/50 transition-colors"
            >
              <Avatar className="w-24 h-24 mb-4 border-2 border-oss-border">
                {member.avatar_url ? (
                  <AvatarImage src={member.avatar_url} alt={member.name} className="object-cover" />
                ) : (
                  <AvatarFallback className="bg-oss-bg text-oss-muted text-xl">
                    <User size={32} />
                  </AvatarFallback>
                )}
              </Avatar>
              
              <h3 className="text-lg font-semibold text-oss-text text-center">{member.name}</h3>
              <span className="text-sm text-oss-lime mb-4 font-mono">{member.role}</span>
              
              <div className="flex gap-3 mt-auto">
                {member.github_url && (
                  <a href={member.github_url} target="_blank" rel="noreferrer" className="text-oss-muted hover:text-oss-text">
                    <GithubIcon size={18} />
                  </a>
                )}
                {member.linkedin_url && (
                  <a href={member.linkedin_url} target="_blank" rel="noreferrer" className="text-oss-muted hover:text-oss-text">
                    <LinkedinIcon size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
