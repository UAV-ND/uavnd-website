# UAV ND Website

A modern, responsive website for the University of Notre Dame's Unmanned Aerial Vehicle (UAV) Club. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🚁 **Modern Design**: Blends the academic aesthetic of IrishSat with the sleek tech style of Anduril
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with React and optimized for speed
- 🎨 **Beautiful UI**: Custom animations and smooth transitions
- 🔧 **TypeScript**: Full type safety and better development experience

## Sections

- **Hero**: Eye-catching landing section with mission statement (video background)
- **Projects**: Showcase of current UAV projects and initiatives
- **About**: Club history and mission
- **Team**: Leadership team and member information (with photos)
- **Sponsors**: Current partners and sponsorship levels
- **Outcomes**: Where our alumni work (simplified company tiles with logos)
- **Contact**: Contact form and club information (video background)

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd uav-nd-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If port 3000 is in use, you can choose another port (e.g., 3001):

```bash
PORT=3001 npm start
```

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animations (ready to use)

## Design Philosophy

The website combines:

- **IrishSat's Academic Style**: Clean, professional design with Notre Dame branding
- **Anduril's Tech Aesthetic**: Modern dark theme with high contrast and sleek typography

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- `nd-gold`: Notre Dame gold (#D4AF37)
- `nd-blue`: Notre Dame blue (#0C2340)
- `nd-navy`: Notre Dame navy (#1B365D)
- `dark-bg`: Dark background (#0A0A0A)
- `dark-surface`: Dark surface (#1A1A1A)

### Content

Update the content in each component file:
- `src/components/Hero.tsx` - Hero section content and background video
- `src/components/Projects.tsx` - Project information
- `src/components/About.tsx` - About section content
- `src/components/Team.tsx` - Team member information and photos
- `src/components/Sponsors.tsx` - Sponsors content
- `src/components/Outcomes.tsx` - Alumni companies (logos, colored tiles)
- `src/components/Contact.tsx` - Contact information and background video

### Media Assets

- Place images in `src/img/` and import them directly in components.
- Place videos in `public/videos/` and reference them with `getPublicVideo()` from `src/utils/media.ts`.
- Videos are tracked with Git LFS. After cloning, run `git lfs pull` so local files are real media, not pointer stubs.
- Before deploying, ensure LFS objects are on GitHub: `git lfs push --all origin`.
- Large videos may impact performance; consider compressing or trimming for production.

### SVG Notes

- Some SVGs with XML namespaces (e.g., `xmlns:bx`) may fail to compile in CRA by default. If an SVG fails, either sanitize it (remove non-standard namespaces/attributes) or convert it to PNG.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about this website or the UAV ND club, contact:
- Email: uav.nd@nd.edu
- Location: Fitzpatrick Hall of Engineering, University of Notre Dame