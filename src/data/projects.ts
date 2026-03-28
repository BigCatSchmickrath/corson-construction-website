export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Remodel',
    category: 'Kitchen',
    tagline: 'The kitchen your family deserves',
    description:
      'Imagine hosting dinner in a kitchen that turns heads — custom dark cabinetry, a gold mosaic backsplash that catches the light, quartz countertops, and statement pendant lighting.',
    image: '/images/kitchen.jpg',
  },
  {
    id: '2',
    title: 'Elevated Deck with Metal Balusters',
    category: 'Decks',
    tagline: 'Expand your living space outdoors',
    description:
      'Why stay inside when you could be relaxing on a second-story deck with views of your entire backyard?',
    image: '/images/deck.jpg',
  },
  {
    id: '3',
    title: 'Timber Frame Pavilion',
    category: 'Outdoor',
    tagline: 'Your own backyard destination',
    description:
      "Rain or shine, this heavy timber pavilion with a standing-seam metal roof gives you an outdoor space you'll use year-round.",
    image: '/images/pavilion.jpg',
  },
  {
    id: '4',
    title: 'Basement Home Theater',
    category: 'Basement',
    tagline: 'Turn unused space into your favorite room',
    description:
      'That unfinished basement? It could be a full home theater with reclining seats, a custom built-in entertainment wall, and room for a pool table.',
    image: '/images/basement.jpg',
  },
  {
    id: '5',
    title: 'Covered Patio Build',
    category: 'Outdoor',
    tagline: 'Outdoor living, rain or shine',
    description: "A covered patio extends your home's usable space and adds instant curb appeal.",
    image: '/images/patio.jpg',
  },
  {
    id: '6',
    title: 'Spa Bathroom Renovation',
    category: 'Bathroom',
    tagline: 'Your personal retreat at home',
    description: 'Start and end every day in a bathroom that feels like a spa.',
    image: '/images/bathroom.jpg',
  },
  {
    id: '7',
    title: 'Concrete Pad Pour',
    category: 'Concrete',
    tagline: "The foundation for what's next",
    description: 'Every great structure starts with a solid foundation.',
    image: '/images/concrete.jpg',
  },
  {
    id: '8',
    title: 'Custom Outbuilding',
    category: 'New Build',
    tagline: 'Extra space, built your way',
    description: 'Need a workshop, extra garage bay, or storage building?',
    image: '/images/outbuilding.jpg',
  },
];
