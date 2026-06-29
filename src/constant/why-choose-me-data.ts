export interface SkillRow {
  id: number;
  skill: string;
  me: boolean;
  other: boolean;
}

export const whyChooseMeData = {
  title: "Why Choose Me",
  tabs: ["Skill", "Me", "Other"],
  skills: [
    { id: 1, skill: "React Expert", me: true, other: false },
    { id: 2, skill: "Perfect Pixel", me: true, other: false },
    { id: 3, skill: "TypeScript Proficiency", me: true, other: false },
    { id: 4, skill: "Clean, Maintainable Code", me: true, other: false },
    { id: 5, skill: "Performance Optimization", me: true, other: false },
    { id: 6, skill: "Responsive Website", me: true, other: false },
    { id: 7, skill: "UI Design Proficiency (Figma)", me: true, other: false },
  ] as SkillRow[],
};