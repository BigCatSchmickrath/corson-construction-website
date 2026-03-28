export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'Professional roofing services including installation, repair, and replacement. We work with shingles, metal, and specialty materials.',
    features: ['New Installation', 'Repairs & Maintenance', 'Inspections', 'Storm Damage'],
    icon: 'Hammer',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen with custom cabinetry, countertops, and modern appliances. From design to installation.',
    features: ['Custom Design', 'Cabinetry', 'Countertops', 'Backsplash'],
    icon: 'Utensils',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description: 'Create your spa-like bathroom retreat with updated fixtures, tiling, and layouts tailored to your style.',
    features: ['Vanities', 'Tile Work', 'Fixtures', 'Lighting'],
    icon: 'Droplets',
  },
  {
    id: 'decks',
    title: 'Decks & Patios',
    description: 'Expand your outdoor living with custom decks and patios built to last. Wood, composite, or concrete options.',
    features: ['Deck Building', 'Patio Design', 'Materials', 'Maintenance'],
    icon: 'Home',
  },
  {
    id: 'basement',
    title: 'Basement Finishing',
    description: 'Turn your basement into a usable space. We handle framing, drywall, flooring, and finishing touches.',
    features: ['Framing', 'Insulation', 'Flooring', 'Lighting'],
    icon: 'Building2',
  },
  {
    id: 'concrete',
    title: 'Concrete & Fencing',
    description: 'Concrete pads, driveways, and quality fencing solutions. Built to withstand Kansas weather.',
    features: ['Concrete Pours', 'Driveway Work', 'Fencing', 'Repairs'],
    icon: 'Layers',
  },
];
