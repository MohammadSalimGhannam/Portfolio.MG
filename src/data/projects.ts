import type { Dictionary } from "@/i18n/types";

export type ProjectId = keyof Dictionary["projects"]["items"];
export type ProjectLinkType = keyof Dictionary["projects"]["links"];

export type Project = {
  /** Key of the texts in `dictionary.projects.items`. */
  id: ProjectId;
  tech: string[];
  links: Partial<Record<ProjectLinkType, string>>;
};

const github = "https://github.com";

export const projects: Project[] = [
  {
    id: "ev3Mapping",
    tech: ["Python", "ROS2", "SLAM", "LEGO EV3"],
    links: { code: `${github}/MohammadSalimGhannam/Mapping-Ev3-Infrared` },
  },
  {
    id: "roadEye",
    tech: ["Python", "YOLOv8", "OpenCV", "pandas", "Django", "React"],
    links: {
      app: `${github}/ezAldinWaez/RoadEyeApp`,
      model: `${github}/ezAldinWaez/RoadEyeModel`,
    },
  },
  {
    id: "dentalClinic",
    tech: ["React", "Vite", "JavaScript"],
    links: {
      live: "https://mohammadsalimghannam.github.io/DentalClinicManagement/",
      code: `${github}/MohammadSalimGhannam/DentalClinicManagement`,
    },
  },
  {
    id: "familyTree",
    tech: ["React", "MongoDB", "JavaScript"],
    links: { code: `${github}/ezAldinWaez/family-tree` },
  },
  {
    id: "portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { code: `${github}/MohammadSalimGhannam/Portfolio.MG` },
  },
  {
    id: "knowledge",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://mohammadsalimghannam.github.io/Knowledge/",
      code: `${github}/MohammadSalimGhannam/Knowledge`,
    },
  },
];
