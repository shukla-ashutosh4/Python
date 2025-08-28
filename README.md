# PrismDx - AI-Powered Healthcare Platform

A modern, responsive website for PrismDx, featuring glass morphism design and AI-powered healthcare solutions.

## Features

### 🎨 Design
- **Glass Morphism Effects**: Modern Apple-inspired glass design with backdrop blur
- **Healthcare Theme**: Professional gradient colors and medical iconography
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Engaging scroll effects and interactive elements

### 🚀 Functionality
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **AI Chatbot**: Intelligent assistant with predefined responses
- **Contact Form**: Waitlist signup with validation and notifications
- **Health Dashboard**: Animated metrics display
- **Progress Tracking**: Visual representation of health improvements

### 📱 Interactive Elements
- **Animated Counters**: Statistics that count up on scroll
- **Parallax Effects**: Background orbs with scroll-based movement
- **Hover Effects**: Interactive cards and buttons
- **Mobile Menu**: Responsive hamburger navigation
- **Scroll to Top**: Convenient page navigation

## File Structure

```
/workspace/
├── index.html          # Main HTML structure
├── styles.css          # CSS with glass morphism effects
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Sections

1. **Hero Section**: Eye-catching introduction with health dashboard preview
2. **Problem Section**: Healthcare challenges with statistics
3. **Solution Section**: AI-driven approach with visual elements
4. **Features Section**: Detailed platform capabilities
5. **Roadmap Section**: Future expansion plans
6. **Contact Section**: Waitlist signup form
7. **Footer**: Company information and links

## Key Technologies

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Advanced styling with:
  - CSS Grid and Flexbox layouts
  - Custom properties (CSS variables)
  - Backdrop filters for glass effects
  - Keyframe animations
  - Media queries for responsiveness

- **Vanilla JavaScript**: Interactive features including:
  - Intersection Observer for scroll animations
  - Form validation and submission
  - Chatbot with keyword matching
  - Smooth scrolling navigation
  - Performance optimizations

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## Getting Started

### Basic Setup
1. Open `index.html` in a web browser
2. No build process required - pure HTML/CSS/JS
3. For local development, serve files through a local server

### AI Chatbot Setup (Groq API)

The chatbot uses Groq's API for intelligent responses. To enable full AI functionality:

1. **Get a Groq API Key:**
   - Visit [https://console.groq.com/](https://console.groq.com/)
   - Create an account and get your API key
   - Groq offers free tier with generous limits

2. **Configure the API Key (Choose one method):**

   **Method 1: Direct Configuration**
   - Open `script.js`
   - Replace `'YOUR_GROQ_API_KEY'` with your actual API key

   **Method 2: Config File (Recommended)**
   - Copy `config.js` to `my-config.js`
   - Edit `my-config.js` and add your API key
   - Rename `my-config.js` to `config.js`

   **Method 3: Environment Variables**
   - Set `GROQ_API_KEY` environment variable
   - Modify script to read from environment

3. **Test the Chatbot:**
   - Open the website
   - Click the chat icon in the bottom right
   - Green indicator = AI is working
   - Yellow/Red indicator = Using fallback responses

### Available Models
- **llama3-8b-8192**: Fast, good for general conversations (default)
- **llama3-70b-8192**: More accurate, slower responses
- **mixtral-8x7b-32768**: Good balance of speed and quality

### API Features
- ✅ Conversation memory (maintains context)
- ✅ Healthcare-focused responses
- ✅ Fallback responses when API is unavailable
- ✅ Typing indicators and smooth animations
- ✅ Error handling and status indicators
- ✅ Rate limiting protection

## Customization

### Colors
Modify CSS custom properties in `:root` selector:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### Content
Update text content directly in `index.html` or modify JavaScript responses in `script.js`.

### Animations
Adjust animation timing and effects in the CSS animations section.

## Performance Features

- Debounced and throttled scroll events
- Intersection Observer for efficient animations
- Optimized CSS with hardware acceleration
- Lazy loading considerations for future images

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators for interactive elements
- High contrast color schemes

## Future Enhancements

- Service Worker for PWA capabilities
- Real backend integration for forms
- Advanced chatbot with NLP
- User authentication system
- Health data visualization charts

---

Built with ❤️ for PrismDx - Transforming healthcare through AI-powered personalization.