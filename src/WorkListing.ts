export default interface WorkListing {
  jobTitle: string;
  start: Date;
  end: Date | null;
  tags: string[];
  company: string;
  description_translation_key: string;
}
