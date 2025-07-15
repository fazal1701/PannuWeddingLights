"use client"

import { useState } from "react"
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Camera,
  Lightbulb,
  Sparkles,
  Music,
  TreePine,
  ImageIcon,
  Zap,
  Eye,
  Palette,
  Wind,
  ChevronDown,
  ChevronUp,
  Check,
  Users,
  Heart,
  Calendar,
  Award,
  Shield,
} from "lucide-react"

const PannuWeddingLights = () => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeGallery, setActiveGallery] = useState("all")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    rentalDateFrom: "",
    rentalDateEnd: "",
    venue: "",
    package: "",
    vision: "",
    newsletter: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll be in touch within 24 hours.")
  }

  const faqData = [
    {
      question: "How far in advance should we book your services?",
      answer:
        "We recommend booking 6-12 months in advance for peak season (May-October) and 3-6 months for off-season events. However, we maintain some inventory for last-minute bookings, so don't hesitate to contact us even if your wedding is approaching quickly.",
    },
    {
      question: "Do you provide lighting for both ceremony and reception?",
      answer:
        "Absolutely! We provide comprehensive lighting solutions for your entire wedding day, including ceremony lighting, cocktail hour ambiance, reception uplighting, dance floor lighting, and any other special areas you'd like to highlight.",
    },
    {
      question: "What happens if there's a power outage or technical issue?",
      answer:
        "We come prepared with backup equipment and contingency plans. Our LED uplights are battery-powered and can run for 12+ hours. We also carry backup fixtures and have a 24/7 emergency support line for any technical issues.",
    },
    {
      question: "Can you match our wedding colors exactly?",
      answer:
        "Yes! Our LED lighting systems offer 16 million color options, so we can perfectly match your wedding palette. During our consultation, we'll work with you to program the exact colors and create custom lighting scenes for different parts of your celebration.",
    },
    {
      question: "Do you work with our other wedding vendors?",
      answer:
        "Definitely! We coordinate closely with your wedding planner, florist, photographer, and DJ to ensure our lighting complements all other elements. We're preferred vendors at over 50 GTA venues and work seamlessly with the wedding industry.",
    },
    {
      question: "What's included in the setup and takedown?",
      answer:
        "Our team handles complete professional installation, typically arriving 4-6 hours before your guests. We provide all equipment, rigging, power distribution, and programming. After your celebration, we return to carefully remove all equipment, leaving your venue spotless.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes! We offer flexible payment options including a 20% deposit to secure your date, with the balance due 30 days before your event. We accept credit cards, e-transfer, and can arrange custom payment schedules for larger installations.",
    },
    {
      question: "What makes your lighting different from DIY options?",
      answer:
        "Our professional-grade equipment, technical expertise, and artistic design experience create dramatically better results than DIY options. We provide proper rigging, color-matching, programming, backup systems, and on-site support that ensures flawless execution on your special day.",
    },
  ]

  const packages = [
    {
      name: "Essentials",
      subtitle: "Perfect for Intimate Venues",
      guests: "Ideal for 75-125 guests",
      popular: false,
      features: [
        "12 LED Uplights with color customization",
        "Basic string light installation (300ft)",
        "Professional setup and takedown",
        "Event day monitoring included",
      ],
      includes: ["Contact us for pricing and availability", "Email: pannuprabh7@icloud.com", "Professional Installation"],
    },
    {
      name: "Signature",
      subtitle: "Perfect for Most Venues",
      guests: "Ideal for Most Venues",
      popular: true,
      features: [
        "20 LED Uplights with DMX control",
        "Extensive string lights canopy (600ft)",
        "1 Medium chandelier installation",
        "Dance floor perimeter lighting",
        "Professional photo area lighting",
        "Advanced color programming",
      ],
      includes: ["Contact us for pricing and availability", "Email: pannuprabh7@icloud.com", "Full Service Setup"],
    },
    {
      name: "Luxury",
      subtitle: "For Grand Celebrations",
      guests: "Spectacular for 200+ guests",
      popular: false,
      features: [
        "32 LED Uplights with full programming",
        "Premium string lights (1000ft+)",
        "2-3 Chandeliers of varying sizes",
        "LED Dance floor (16x16)",
        "Ceremony and reception lighting",
        "Custom gobo projections",
        "Dedicated lighting technician",
      ],
      includes: ["Contact us for pricing and availability", "Email: pannuprabh7@icloud.com", "Premium Service"],
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      subtitle: "Complimentary",
      description:
        "Discuss your vision, venue, and budget. Review inspiration photos and mood boards. Receive preliminary recommendations and transparent pricing. We'll answer all your questions and provide expert advice on lighting options best suited for your event.",
      features: [
        "Free consultation",
        "Venue assessment",
        "Preliminary pricing",
        "Expert advice",
        "Flexible scheduling",
      ],
    },
    {
      number: 2,
      title: "Venue Site Visit",
      subtitle: "Complimentary within GTA",
      description:
        "Technical assessment of electrical and rigging capabilities. Precise measurements and planning for optimal fixture placement. Coordination with venue management. We also identify any unique venue challenges and provide creative solutions.",
      features: [
        "Technical assessment",
        "Precise measurements",
        "Venue coordination",
        "Creative solutions",
        "Safety planning",
      ],
    },
    {
      number: 3,
      title: "Custom Design Proposal",
      subtitle: "Detailed Planning",
      description:
        "Comprehensive lighting plot with exact fixture placement. 3D rendering for luxury packages. Itemized quote with transparent pricing and timeline coordination. We include a detailed event timeline and collaborate with your planner for seamless integration.",
      features: [
        "Detailed lighting plot",
        "3D rendering",
        "Transparent pricing",
        "Timeline coordination",
        "Planner collaboration",
      ],
    },
    {
      number: 4,
      title: "Pre-Event Planning",
      subtitle: "Final Coordination",
      description:
        "Final walkthrough 1-2 weeks before your wedding. Coordination with wedding planner, florist, and photographer. Backup plans and contingency preparations. We confirm all logistics and provide a final checklist for your peace of mind.",
      features: [
        "Final walkthrough",
        "Vendor coordination",
        "Backup planning",
        "Logistics confirmation",
        "Final checklist",
      ],
    },
    {
      number: 5,
      title: "Event Day Excellence",
      subtitle: "Flawless Execution",
      description:
        "Early arrival for complete setup (4-6 hours before guests). Professional installation with minimal disruption. On-site technician throughout your event. We monitor all equipment, provide real-time adjustments, and ensure perfect ambiance from ceremony to reception.",
      features: [
        "Early setup",
        "Professional installation",
        "On-site support",
        "Real-time adjustments",
        "Perfect ambiance",
      ],
    },
    {
      number: 6,
      title: "Post-Event Takedown",
      subtitle: "Hassle-Free Wrap-Up",
      description:
        "After your celebration, our team returns to carefully remove all equipment, ensuring your venue is left exactly as found. We handle all cleanup and provide a post-event follow-up to ensure your complete satisfaction.",
      features: [
        "Careful takedown",
        "Venue restoration",
        "No hidden fees",
        "Post-event follow-up",
        "Satisfaction guarantee",
      ],
    },
  ]

  const venues = [
    {
      category: "Luxury Hotels",
      icon: Star,
      venues: ["Royal York Hotel", "Shangri-La Toronto", "King Edward Hotel", "Mississauga Convention Centre"],
    },
    {
      category: "Historic Venues",
      icon: Award,
      venues: ["Casa Loma", "Liberty Grand", "Royal Conservatory", "Estates of Sunnybrook"],
    },
    {
      category: "Outdoor Spaces",
      icon: TreePine,
      venues: ["Kurtz Orchards Estate", "Whistle Bear Golf Club", "Evergreen Brick Works", "Private Estates"],
    },
    {
      category: "Service Area",
      icon: MapPin,
      venues: ["Toronto & Mississauga", "Brampton & Vaughan", "Richmond Hill & Markham", "All GTA Municipalities"],
    },
  ]

  const testimonials = [
    {
      text: "Pannu Wedding Lights made our sangeet and wedding reception lighting was perfect for our Punjabi celebration and the photos are unforgettable!",
      names: "Amanpreet & Raj",
      venue: "Pearson Convention Centre",
      rating: 5,
    },
    {
      text: "The team was so professional and the LED dance floor was a huge hit at our mehendi! Our family and friends loved the vibrant colors and the whole setup. Highly recommended for Indian weddings!",
      names: "Priya & Arjun",
      venue: "Chateau Banquet Hall",
      rating: 5,
    },
    {
      text: "From the first meeting to our Hindu ceremony, everything was flawless. The uplighting matched our decor and the chandeliers added so much elegance. Thank you for making our day so special!",
      names: "Neha & Vikram",
      venue: "The Royalton",
      rating: 5,
    },
  ]

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "95%", label: "Referral Rate" },
    { value: "500+", label: "Happy Couples" },
    { value: "8+", label: "Years Experience" },
  ]

  const services = [
    {
      id: "fairy-lights",
      title: "Fairy Light Canopies",
      subtitle: "String Light Magic",
      description:
        "Create a magical starlit atmosphere with our premium warm white LED string lights. Perfect for both indoor and outdoor venues.",
      features: [
        "Market Light Canopies (20ft-40ft)",
        "Delicate Copper Wire Fairy Lights",
        "Professional Ceiling Installation",
        "Wall & Column Wrapping",
        "Weather-Resistant Outdoor Options",
      ],
      icon: Sparkles,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "uplighting",
      title: "LED Uplighting Systems",
      subtitle: "Custom Ambiance",
      description:
        "Transform your venue's atmosphere with wireless, battery-powered LED uplights. Match your wedding colors perfectly.",
      features: [
        "Soft Gradient Wall Washing",
        "Architectural Feature Highlighting",
        "16 Million Color Options",
        "Wireless Technology (No Cables)",
        "Professional DMX Control",
      ],
      icon: Lightbulb,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "chandeliers",
      title: "Luxury Chandeliers",
      subtitle: "Elegant Hanging Installations",
      description:
        "Add sophistication and elegance with our curated collection of chandeliers, from crystal to rustic designs.",
      features: [
        'Crystal Chandeliers (24"-48" diameter)',
        "Rustic Wood Beam Styles",
        "Modern Geometric Fixtures",
        "Floral Arrangement Integration",
        "Certified Professional Rigging",
      ],
      icon: Star,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "dance-floors",
      title: "LED Dance Floors",
      subtitle: "Unforgettable Dance",
      description:
        "Make your first dance unforgettable with our LED dance floors that respond to music and create stunning visual effects.",
      features: [
        "Multiple Sizes (12x12 to 20x20)",
        "Custom Monogram Projections",
        "Sound-Reactive Technology",
        "Professional Leveling & Safety",
        "Full Setup & Takedown Included",
      ],
      icon: Music,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "outdoor",
      title: "Outdoor & Landscape",
      subtitle: "Ceremony & Garden Lighting",
      description:
        "Illuminate your ceremony and cocktail spaces with elegant outdoor lighting that highlights natural beauty.",
      features: [
        "LED Pathway Stake Lights",
        "Tree & Landscaping Uplighting",
        "Garden Accent Illumination",
        "Ceremony Arch Framing",
        "Tent Interior & Perimeter",
      ],
      icon: TreePine,
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "photography",
      title: "Photography Lighting",
      subtitle: "Picture-Perfect Illumination",
      description:
        "Ensure stunning photos with professional photography lighting that eliminates shadows and creates perfect backdrops.",
      features: [
        "Professional Portrait Lighting",
        "Even Backdrop Illumination",
        "Custom Gobo Projections",
        "Step-and-Repeat Standards",
        "Shadow Elimination Technology",
      ],
      icon: Camera,
      color: "bg-blue-50 border-blue-200",
    },
  ]

  const specialtyEffects = [
    {
      title: "Gobo Projections",
      description: "Custom names, dates, patterns",
      icon: Eye,
    },
    {
      title: "Pin Spotting",
      description: "Highlight special areas",
      icon: Zap,
    },
    {
      title: "Color Sequences",
      description: "Programmed lighting shows",
      icon: Palette,
    },
    {
      title: "Fog Integration",
      description: "Dramatic first dance effects",
      icon: Wind,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Pannu Wedding Lights</h1>
                <p className="text-sm text-gray-500">Illuminating Love Stories</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 font-medium">
                Packages
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium">
                Gallery
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium">
                Reviews
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <a
                href="mailto:pannuprabh7@icloud.com"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:647-564-7656"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (647) 564-7656</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Illuminating Love Stories
            <br />
            <span className="text-blue-600">Across the Greater Toronto</span>
            <br />
            Area
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your wedding into an extraordinary experience with premium lighting design. Over 8 years of
            expertise, 500+ couples served, and countless magical moments created.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:647-564-7656"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Call (647) 564-7656</span>
            </a>
            <a
              href="#gallery"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <ImageIcon className="w-5 h-5" />
              <span>View Gallery</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
              <div className="text-gray-600 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Weddings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">GTA</div>
              <div className="text-gray-600 text-sm">Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-xl text-gray-700 italic mb-4">
              "At Pannu Wedding Lights, we believe that lighting is the foundation of atmosphere—transforming ordinary
              spaces into extraordinary experiences that reflect the unique love story of each couple."
            </blockquote>
            <div className="text-blue-600 font-semibold">Our Mission</div>
            <div className="text-gray-600">Creating magical moments through exceptional lighting design</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate ceremonies to grand celebrations, we provide complete lighting solutions that transform your
              venue into a magical space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.color} rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Effects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialty Lighting Effects</h2>
            <p className="text-gray-600">Advanced techniques to make your celebration truly unique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyEffects.map((effect, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <effect.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{effect.title}</h3>
                <p className="text-sm text-gray-600">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wedding Lighting Packages</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose from our carefully curated packages designed to fit different venue sizes and budgets. All packages
              include professional installation, event monitoring, and complete takedown.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 border-2 hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? "border-yellow-400 ring-4 ring-yellow-100" : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-2">{pkg.subtitle}</p>
                  <p className="text-sm text-gray-500">{pkg.guests}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-medium">What's Included:</p>
                  <ul className="space-y-1">
                    {pkg.includes.map((include, includeIndex) => (
                      <li key={includeIndex} className="text-xs text-gray-500">
                        • {include}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>

          {/* Custom Installations */}
          <div className="bg-white rounded-xl p-8 border-2 border-blue-200 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Installations</h3>
            <p className="text-gray-600 mb-6">
              Need something completely unique? Contact us to discuss your custom installation needs. We offer fully personalized
              lighting design, site-specific installations, and premium equipment.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Discuss Custom Project →
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Pannu Process</h2>
            <p className="text-xl text-gray-600">
              From initial consultation to your magical wedding day, we ensure every detail is perfect.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-blue-600 font-medium text-sm">{step.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">?</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our wedding lighting services.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Pannu Wedding Lights?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8+ years of expertise, 500+ couples served, and countless magical moments created across the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                Industry Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">8+ years specializing</span> exclusively in wedding lighting design
                    and installation
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Certified technicians</span> and professional lighting designers on
                    staff
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Preferred vendor</span> at over 50 prestigious GTA venues
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Active member</span> of Wedding Planners Institute of Canada
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Professional Reliability
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Fully insured and bonded</span> with $2M comprehensive liability
                    coverage
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Professional-grade equipment</span> from industry-leading
                    manufacturers
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Dedicated on-site technician</span> present throughout your entire
                    event
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">24/7 emergency support line</span> available for peace of mind
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Track Record */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Track Record</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600 mb-8">
              See how we've transformed venues across the Greater Toronto Area with our lighting expertise.
            </p>

            {/* Gallery Filter Tabs */}
            <div className="flex justify-center space-x-2 mb-8">
              {["All", "Indoor", "Outdoor", "Luxury", "Intimate"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGallery(filter.toLowerCase())}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeGallery === filter.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { src: "/IMG_2480.jpg", alt: "Wedding Lighting Setup 1" },
              { src: "/IMG_2481.jpg", alt: "Wedding Lighting Setup 2" },
              { src: "/IMG_2482.jpg", alt: "Wedding Lighting Setup 3" },
              { src: "/IMG_2483.jpg", alt: "Wedding Lighting Setup 4" },
              { src: "/img_2485.jpg", alt: "Wedding Lighting Setup 5" },
              { src: "/img_2486.jpg", alt: "Wedding Lighting Setup 6" },
            ].map((img, idx) => (
              <div
                key={img.src}
                className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-video flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Venues We've Transformed</h3>
            <p className="text-gray-600 mb-8">
              We're proud to be preferred lighting partners at over 50 venues across the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venues.map((venueGroup, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <venueGroup.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{venueGroup.category}</h3>
                <ul className="space-y-2">
                  {venueGroup.venues.map((venue, venueIndex) => (
                    <li key={venueIndex} className="text-sm text-gray-600">
                      {venue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Couples Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from the couples whose special days we've illuminated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">"{testimonial.text}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.names}</div>
                  <div className="text-sm text-gray-600">{testimonial.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Illuminate Your Special Day?</h2>
            <p className="text-xl text-gray-600">
              Contact us for a complimentary consultation and let's create something magical together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">647-564-7656</div>
                    <div className="text-gray-600 text-sm">(647) 564-7656</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">info@pannuweddinglights.com</div>
                    <div className="text-gray-600 text-sm">Response within 4 hours during business days</div>
                    <div className="text-gray-600 text-sm">Detailed quotes provided within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp Consultations</div>
                    <div className="text-gray-600 text-sm">(647) 564-7656</div>
                    <div className="text-gray-600 text-sm">Quick questions and photo sharing</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Service Coverage</div>
                    <div className="text-gray-600 text-sm">Primary: Toronto, Mississauga, Brampton,</div>
                    <div className="text-gray-600 text-sm">Extended: All GTA municipalities within 100km</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Booking Timeline</span>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Peak Season (May-Oct): Book 8-12 months ahead</li>
                    <li>• Off Season (Nov-Apr): Book 4-6 months ahead</li>
                    <li>• Last-minute bookings: Contact us for availability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Free Consultation Request</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Schedule your complimentary consultation and receive a detailed quote within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Amanpreet"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Singh"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="sarah@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="647-564-7656"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rental Date From</label>
                    <input
                      type="date"
                      name="rentalDateFrom"
                      value={formData.rentalDateFrom}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rental Date End</label>
                    <input
                      type="date"
                      name="rentalDateEnd"
                      value={formData.rentalDateEnd}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Venue Name & Location</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Pearson Convention Centre, Brampton"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Package Interest</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select package</option>
                    <option value="essentials">Essentials Package - $1,200</option>
                    <option value="signature">Signature Package - $2,400</option>
                    <option value="luxury">Luxury Package - $4,500</option>
                    <option value="custom">Custom Installation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your vision</label>
                  <textarea
                    name="vision"
                    value={formData.vision}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your dream wedding lighting, color preferences, special requirements, or any questions you have..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-600">
                    Subscribe to our newsletter for wedding lighting tips and inspiration
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Schedule Free Consultation
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by Pannu Wedding Lights regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Pannu Wedding Lights</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Illuminating love stories across the Greater Toronto Area with premium wedding lighting design.
              </p>
              <p className="text-xs text-gray-500">
                "Your wedding day deserves lighting that's as unique and beautiful as your love story. Let Pannu Wedding
                Lights illuminate the beginning of your forever."
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fairy Light Canopies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LED Uplighting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Luxury Chandeliers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LED Dance Floors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Outdoor Lighting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Photography Lighting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(647) 564-7556</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@pannuweddinglights.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Greater Toronto Area</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Pannu Wedding Lights. All rights reserved. | Proudly serving the GTA since 2016</p>
            <p className="mt-2">Established 2016 | Proudly Canadian | GTA's Premier Wedding Lighting Specialists</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PannuWeddingLights
