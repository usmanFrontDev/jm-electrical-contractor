export const headerMenu = [
  {
    label: 'About us',
    path: '/about',
  },
  {
    label: 'Why choose us',
    path: '/whyus',
  },
  {
    label: 'Service',
    children: [
      { label: 'General Electrical Services', path: '/service' },
      { label: 'EV Chargers', path: '/service-2' },
      { label: 'New Construction & Remodeling', path: '/service-3' },
      { label: 'Lighting & Control Systems', path: '/service-4' },
      { label: 'Installations & Replacements', path: '/service-5' },
      { label: 'Emergency Electrical Services', path: '/service-6' },
    ],
  },
  {
    label: 'Photo Gallery',
    children: [
      { label: 'Gallery', path: '/gallery' },
      { label: 'Blog', path: '/blog' },
      { label: 'FAQs', path: '/faqs' },
    ],
  },
];
