import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  repo: string;
  status: "active" | "done" | "archived";
  tags: string[];
  highlights: string[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const summary =
    project.description.length > 120
      ? `${project.description.slice(0, 117)}...`
      : project.description;

  return (
    <Card className="group flex h-full flex-col border-border/70 bg-gradient-to-br from-background via-background to-muted/40 shadow-sm transition hover:shadow-md">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg leading-tight">
            {project.title}
          </CardTitle>
          <Badge
            className="border border-border/60 bg-background/70"
            variant="outline"
          >
            {project.status}
          </Badge>
        </div>
        <CardDescription className="h-[3.75rem] overflow-hidden text-sm">
          {summary}
        </CardDescription>
      </CardHeader>

      {(project.tags?.length ?? 0) > 0 ? (
        <CardContent className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-muted/70" variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardContent>
      ) : null}

      <Separator className="opacity-60" />

      {(project.highlights?.length ?? 0) > 0 ? (
        <CardContent className="flex-1 pt-2">
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </CardContent>
      ) : (
        <div className="flex-1" />
      )}

      <Separator className="opacity-60" />
      <CardFooter className="justify-end gap-2">
        <Button
          asChild
          size="sm"
          className="text-sm font-semibold transition-colors hover:bg-foreground/80 hover:text-background"
        >
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            Open
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="transition-colors hover:bg-muted hover:text-foreground"
        >
          <Link href={project.repo} target="_blank" rel="noopener noreferrer">
            Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
