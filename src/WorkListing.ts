export default interface WorkListing {
  jobTitle: string;
  jobDescription: string;
  start: Date;
  end: Date | null;
  tags: string[];
  company: string
}