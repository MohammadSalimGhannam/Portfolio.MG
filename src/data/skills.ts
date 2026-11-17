import type { Dictionary } from "@/i18n/types";

export type SkillGroupId = keyof Dictionary["skills"]["groups"];

/** Technology names are the same in every language, so they live here. */
export const skills: Record<SkillGroupId, string[]> = {
  programming: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "SQL",
    "MATLAB",
    "Assembly",
  ],
  web: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Bootstrap",
    "Django",
    "Express.js",
    "MongoDB",
    "Responsive design",
  ],
  ai: [
    "NumPy",
    "pandas",
    "Matplotlib",
    "Seaborn",
    "scikit-learn",
    "OpenCV",
    "YOLOv8",
    "Machine learning",
    "Deep learning (MLP, CNN)",
    "Jupyter",
  ],
  robotics: ["ROS2", "SLAM", "RViz", "Gazebo", "LEGO EV3"],
  foundations: ["OOP", "Data structures", "Algorithms", "Git", "GitHub"],
};
