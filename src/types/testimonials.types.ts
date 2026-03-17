export interface Recommendationn {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  avatarColor: string;
}

export interface Testimonial {
  sectionName: string;
  heading: string;
  testimonials: Recommendationn[];
}
