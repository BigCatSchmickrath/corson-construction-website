export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'basement',
    title: 'Basement Finishing',
    description: 'Turn your basement into the best room in the house. From custom home theaters to game rooms and guest suites, we handle framing, drywall, flooring, and every finishing touch.',
    features: ['Home Theaters', 'Game Rooms & Bars', 'Guest Suites', 'Custom Lighting'],
    icon: 'Building2',
  },
  {
    id: 'decks',
    title: 'Decks & Patios',
    description: 'Expand your outdoor living with custom decks and patios built to last. Wood, composite, or concrete options designed for the way you live.',
    features: ['Deck Building', 'Covered Patios', 'Composite & Wood', 'Railings & Stairs'],
    icon: 'Home',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living',
    description: 'Create your dream backyard with pavilions, pergolas, and outdoor entertainment areas. Built to withstand Kansas weather and designed for year-round enjoyment.',
    features: ['Pavilions & Pergolas', 'Outdoor Kitchens', 'Fire Pits', 'Covered Structures'],
    icon: 'Hammer',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description: 'Create your spa-like bathroom retreat with updated fixtures, tiling, and layouts tailored to your style.',
    features: ['Vanities', 'Tile Work', 'Fixtures', 'Lighting'],
    icon: 'Droplets',
  },
  {
    id: 'concrete',
    title: 'Concrete & Fencing',
    description: 'Concrete pads, driveways, and quality fencing solutions. Built to withstand Kansas weather and add lasting value to your property.',
    features: ['Concrete Pours', 'Driveway Work', 'Fencing', 'Repairs'],
    icon: 'Layers',
  },
  {
    id: 'custom',
    title: 'Custom Builds',
    description: 'From outbuildings and workshops to unique additions, we bring your custom vision to life with quality craftsmanship and attention to detail.',
    features: ['Outbuildings', 'Workshops', 'Additions', 'Storage Solutions'],
    icon: 'Utensils',
  },
];
