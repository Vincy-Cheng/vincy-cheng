import { ProjectCardProps } from '../components/ProjectCard';

interface ISideBarMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
}
interface IProjectInfo extends ProjectCardProps {
  thumbNailPath?: string;
  description: string;
  link: string;
  screenshot: string[];
}

enum ELevel {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
}

enum ESkillType {
  language = 'Language',
  framework = 'Framework',
  library = 'Library',
  cloudPlatform = 'Cloud Platform',
}

interface IAround {
  year: number;
  type: '<' | '>' | '~';
}

interface ISkillExperienceSet {
  name: string;
  type: ESkillType;
  level: ELevel;
  startTime: Date;
  around: IAround;
}

interface IWorkExperienceSet {
  position: string;
  description: string[];
  company: string;
  startDate: Date;
  endDate: Date;
  tags: string[];
}
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type TColorRed = Range<0, 256>;
type TColorGreen = Range<0, 256>;
type TColorBlue = Range<0, 256>;
interface IRGB {
  red: TColorRed;
  green: TColorGreen;
  blue: TColorBlue;
}

enum EAudioType {
  mp3 = 'mp3',
  m4a = 'm4a',
}

enum EAudioBitRate {
  HIGHEST = '320',
  MEDIUM = '256',
  MEDIUM_LOW = '192',
  LOWEST = '128',
}

export type {
  IProjectInfo,
  ISideBarMenuItem,
  ISkillExperienceSet,
  IWorkExperienceSet,
  TColorRed,
  TColorBlue,
  TColorGreen,
  IRGB,
};

export { ELevel, ESkillType, EAudioType, EAudioBitRate };
