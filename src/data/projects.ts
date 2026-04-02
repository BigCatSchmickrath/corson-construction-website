export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  // === BASEMENTS ===
  {
    id: '4',
    title: 'Basement Home Theater',
    category: 'Basement',
    tagline: 'Turn unused space into your favorite room',
    description:
      "That unfinished basement? It could be a full home theater with reclining seats, a custom built-in entertainment wall, and room for a pool table.",
    image: '/images/basement.jpg',
  },
  {
    id: 'b2',
    title: 'Finished Basement Hallway',
    category: 'Basement',
    tagline: 'Polished lower level with professional finishes',
    description:
      "Quality tile flooring, fresh paint, recessed lighting, and professional door installations — every detail matters when finishing a basement you'll actually want to spend time in.",
    image: '/images/basement-hallway.jpg',
  },
  {
    id: 'b3',
    title: 'Basement Media Room',
    category: 'Basement',
    tagline: 'Professional entertainment space below grade',
    description:
      "Cove ceiling lighting, recessed fixtures, carpet, and walls prepped for your dream home theater setup. This basement went from empty concrete to premium entertainment space.",
    image: '/images/theater_room.jpg',
  },

  // === OUTDOOR LIVING ===
  {
    id: '3',
    title: 'Timber Frame Pavilion',
    category: 'Outdoor Living',
    tagline: 'Your own backyard destination',
    description:
      "Rain or shine, this heavy timber pavilion with a standing-seam metal roof gives you an outdoor space you'll use year-round.",
    image: '/images/pavilion.jpg',
  },
  {
    id: '5',
    title: 'Covered Patio Build',
    category: 'Outdoor Living',
    tagline: 'Outdoor living, rain or shine',
    description: "A covered patio extends your home's usable space and adds instant curb appeal.",
    image: '/images/patio-build.jpg',
  },
  {
    id: 'ol1',
    title: 'Outdoor Entertainment Patio',
    category: 'Outdoor Living',
    tagline: 'Spacious entertaining under a solid roof',
    description:
      "Beautiful wood-framed covered patio with sturdy support beams, creating a welcoming outdoor space perfect for entertaining or relaxing with the family year-round.",
    image: '/images/covered-patio-wood.jpg',
  },
  {
    id: 'ol2',
    title: 'Screened Patio Room',
    category: 'Outdoor Living',
    tagline: 'Bug-free outdoor living',
    description:
      "Enjoy the outdoors without the bugs. This screened patio with black mesh on a wood frame gives you protected outdoor living space for any season.",
    image: '/images/screened-patio.jpg',
  },
  {
    id: 'ol3',
    title: 'Screened Veranda',
    category: 'Outdoor Living',
    tagline: 'Built to last through every Kansas season',
    description:
      "Substantial wood-framed pavilion with metal roof and concrete foundation — built to handle Kansas weather while providing a lasting outdoor entertaining space.",
    image: '/images/backyard-pavilion.jpg',
  },
  {
    id: 'ol4',
    title: 'Modern Farmhouse Porch',
    category: 'Outdoor Living',
    tagline: 'Curb appeal meets functionality',
    description:
      "This front porch extension with solid wood framing and clean lines adds both square footage and serious curb appeal to any home.",
    image: '/images/farmhouse-porch.jpg',
  },
  {
    id: 'ol5',
    title: 'Wooden Patio Shelter',
    category: 'Outdoor Living',
    tagline: 'All-season outdoor retreat',
    description:
      "Warm wood interior, black mesh screening, and room for furnishings — this screened deck is an outdoor living room you can use from spring through fall.",
    image: '/images/screened-deck-wood.jpg',
  },
  {
    id: 'ol6',
    title: 'Wood Ceiling Patio',
    category: 'Outdoor Living',
    tagline: 'Elegant covered entertaining',
    description:
      "Beautiful tongue-and-groove wood ceiling with exposed beams, ceiling fan, and concrete floor — a semi-enclosed space that feels as refined as any indoor room.",
    image: '/images/wood-ceiling-patio.jpg',
  },

  // === DECKS ===
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
    id: 'd1',
    title: 'Modern Covered Deck',
    category: 'Decks',
    tagline: 'Elegant outdoor living with stunning views',
    description:
      "Spacious composite deck with warm wood tones, overhead pergola structure, and sturdy post-and-beam construction. An inviting outdoor space with panoramic views.",
    image: '/images/deck-multilevel-pergola.jpg',
  },
  {
    id: 'd2',
    title: 'Screened Deck',
    category: 'Decks',
    tagline: 'Premium screening for your deck',
    description:
      "High-quality screened deck with glass entry doors and wood frame construction. Extends your living space while keeping out insects and debris.",
    image: '/images/screened-deck-glass.jpg',
  },
  {
    id: 'd3',
    title: 'Large Composite Entertaining Deck',
    category: 'Decks',
    tagline: 'Room for the whole neighborhood',
    description:
      "This oversized composite deck with multi-level design and sturdy railings creates the ultimate outdoor gathering space for family and friends.",
    image: '/images/composite-deck-large.jpg',
  },
  {
    id: 'd4',
    title: 'Composite Deck with Steps',
    category: 'Decks',
    tagline: 'Clean lines from door to yard',
    description:
      "Quality composite decking with substantial wooden entry steps and sturdy railings — durable materials with a classic, inviting look.",
    image: '/images/composite-deck-steps.jpg',
  },
  {
    id: 'd6',
    title: 'Wooden Deck with Metal Balusters',
    category: 'Decks',
    tagline: 'Complete backyard transformation',
    description:
      "Large residential deck with multiple levels integrated with a patio below — one project that completely transforms how you use your backyard.",
    image: '/images/deck-patio-combo.jpg',
  },

  // === SHOWERS & TILE ===
  {
    id: '6',
    title: 'Custom Tub Surround & Tile Backsplash',
    category: 'Showers & Tile',
    tagline: 'Detailed tile work around a jetted tub',
    description: 'Hexagonal marble tile backsplash, custom wood panel surround, and glass block window — precision tile work that elevates the entire bathroom.',
    image: '/images/bathroom.jpg',
  },
  {
    id: 'ba2',
    title: 'Marble Tile Shower with Accent Strip',
    category: 'Showers & Tile',
    tagline: 'Large format tile with decorative detail',
    description:
      "Gray marble-look large format tile with a mosaic accent strip, recessed niche, and matte black rain shower head. Clean lines and quality craftsmanship throughout.",
    image: '/images/bathroom-geometric-floor.jpg',
  },
  {
    id: 'ba3',
    title: 'Geometric Pattern Floor Tile',
    category: 'Showers & Tile',
    tagline: 'Statement flooring that turns heads',
    description:
      "Striking black and white ornate patterned floor tile paired with classic white subway tile walls and a marble vanity top. Bold design with timeless appeal.",
    image: '/images/bathroom-black-accent.jpg',
  },
  {
    id: 'ba4',
    title: 'Glass Door Shower Remodel',
    category: 'Showers & Tile',
    tagline: 'Clean and modern shower upgrade',
    description:
      "Sliding glass door shower enclosure with built-in shelving, new vanity, and updated fixtures. A practical, polished shower remodel from top to bottom.",
    image: '/images/spa-bathroom.jpg',
  },
  {
    id: 'ba5',
    title: 'Herringbone Floor Tile & Dark Vanity',
    category: 'Showers & Tile',
    tagline: 'Sophisticated tile pattern work',
    description:
      "Dark herringbone floor tile, dark vanity cabinetry with chrome hardware, and marble countertop — a refined tile installation that anchors the entire room.",
    image: '/images/bathroom-dark-vanity.jpg',
  },
  {
    id: 'ba6',
    title: 'Subway Tile Shower Surround',
    category: 'Showers & Tile',
    tagline: 'Clean lines, quality tile work',
    description:
      "Light gray subway tile with a recessed niche and matching floor tile. Simple, clean, and built to last — the kind of quality you can see in every grout line.",
    image: '/images/shower-tile-surround.jpg',
  },
  {
    id: 'ba7',
    title: 'Navy Accent Wall & Vanity Install',
    category: 'Showers & Tile',
    tagline: 'Big impact in a small space',
    description:
      "Bold navy accent wall, floating white vanity with black hardware, and pendant lighting — a compact space with a complete facelift.",
    image: '/images/bathroom-navy-accent.jpg',
  },
  {
    id: 'ba8',
    title: 'Square Tile Shower with Niche',
    category: 'Showers & Tile',
    tagline: 'Classic tile in a bold setting',
    description:
      "White square tile shower surround with recessed niche, oil-rubbed bronze fixtures, and a teal accent wall. Timeless tile work with a pop of color.",
    image: '/images/bathroom-pink-tile.jpg',
  },
  {
    id: 'ba9',
    title: 'Custom Kitchen Backsplash',
    category: 'Showers & Tile',
    tagline: 'Statement tile that transforms the space',
    description:
      "Gold-toned decorative tile backsplash with precision cuts around cabinetry and outlets — detailed tile work that turns a kitchen wall into a showpiece.",
    image: '/images/backsplash.jpg',
  },

  // === CONCRETE ===
  {
    id: '7',
    title: 'Concrete Pad Pour',
    category: 'Concrete',
    tagline: "The foundation for what's next",
    description: 'Every great structure starts with a solid foundation.',
    image: '/images/concrete-pad.jpg',
  },
  {
    id: 'c1',
    title: 'Patio Concrete Foundation',
    category: 'Concrete',
    tagline: 'Built right from the ground up',
    description:
      "Finished concrete base prepped for a deck or outdoor addition — the structural work that makes everything else possible.",
    image: '/images/concrete-patio-base.jpg',
  },

  // === CUSTOM BUILDS ===
  {
    id: '8',
    title: 'Custom Outbuilding',
    category: 'Custom Build',
    tagline: 'Extra space, built your way',
    description: 'Need a workshop, extra garage bay, or storage building?',
    image: '/images/outbuilding.jpg',
  },
  {
    id: 'cb1',
    title: 'Custom Garden Shed',
    category: 'Custom Build',
    tagline: 'Stylish storage with modern design',
    description:
      "Metal roof, board-and-batten siding, glass doors, and a covered entry porch — this garden shed looks as good as it functions.",
    image: '/images/garden-shed.jpg',
  },

  // === INTERIOR ===
  {
    id: 'i1',
    title: 'Modern Fireplace Installation',
    category: 'Interior',
    tagline: 'A focal point that transforms the room',
    description:
      "Sleek electric fireplace insert on an accent wall with a wooden mantel shelf, complemented by contemporary flooring and ceiling fan. The kind of upgrade that changes how a room feels.",
    image: '/images/modern-fireplace.jpg',
  },
  {
    id: 'i2',
    title: 'Master Bedroom Suite',
    category: 'Interior',
    tagline: 'Your personal sanctuary',
    description:
      "Bold blue accent walls, quality carpet, modern ceiling fan, and large windows flooding the room with natural light. A professionally finished master retreat.",
    image: '/images/master-bedroom.jpg',
  },
  {
    id: 'i3',
    title: 'Custom Closet System',
    category: 'Interior',
    tagline: 'Organization meets craftsmanship',
    description:
      "Custom-built closet with light wood cabinetry, glass-front display options, and open shelving. Functional storage that looks as good as the rest of the house.",
    image: '/images/custom-closet.jpg',
  },
];
