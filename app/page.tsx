import hubs from "@/data/hub.json";
import { ProjectCard, type Project } from "@/components/project-card";
import { HeroHeader } from "@/components/hero-header";

export default function Home() {
  const visible = (hubs as Project[]).filter(
    (hub) => hub.status !== "archived"
  );

  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
        <HeroHeader
          kicker="LOCAL HUB"
          title="K-Hub"
          subtitle="Keep links, notes, and repos close. Simple, local-first, and shareable."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
