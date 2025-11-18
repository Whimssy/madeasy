import React, { useState } from 'react';
import './ourservices.css';

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Standard Cleaning',
      description: 'Regular maintenance cleaning to keep your space fresh and tidy. Perfect for weekly or bi-weekly visits.',
      features: [
        'Dusting all surfaces',
        'Vacuuming & mopping floors',
        'Kitchen & bathroom sanitization',
        'Trash removal',
        'Surface wiping'
      ],
      price: 'From $99',
      duration: '2-3 hours',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: '🧹',
      popular: true
    },
    {
      id: 2,
      title: 'Deep Cleaning',
      description: 'Thorough, intensive cleaning for move-in/move-out or seasonal deep cleans. Every corner covered.',
      features: [
        'Inside appliances cleaning',
        'Window track cleaning',
        'Baseboard wiping',
        'Cabinet organization',
        'Grout scrubbing'
      ],
      price: 'From $199',
      duration: '4-6 hours',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: '✨',
      popular: false
    },
    {
      id: 4,
      title: 'Custom Service',
      description: 'Tailored cleaning solutions designed specifically for your unique needs and preferences.',
      features: [
        'Customized cleaning plan',
        'Special requests accommodated',
        'Flexible scheduling',
        'Specific focus areas',
        'Recurring plans available'
      ],
      price: 'Custom Quote',
      duration: 'Flexible',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: '⭐',
      popular: false,
      featured: true
    },
    {
      id: 3,
      title: 'Laundry Services',
      description: 'Professional laundry and folding service. We handle your clothes with care and attention.',
      features: [
        'Wash & fold service',
        'Stain treatment',
        'Ironing & steaming',
        'Special fabric care',
        'Eco-friendly detergents'
      ],
      price: 'From $49',
      duration: '24-48 hours',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: '👕',
      popular: false
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Services Header */}
        <div className="services-header">
          <h2 className="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="services-subtitle">
            Professional cleaning services tailored to your needs. 
            From routine maintenance to deep cleans, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''} ${service.featured ? 'featured' : ''} ${activeService === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}

              {/* Featured Badge */}
              {service.featured && (
                <div className="featured-badge">
                  <span>⭐ Custom Solution</span>
                </div>
              )}

              {/* Service Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
                <div className="service-icon">{service.icon}</div>
              </div>

              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* Features List */}
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Service Meta */}
                <div className="service-meta">
                  <div className="meta-item">
                    <span className="meta-label">Price</span>
                    <span className="meta-value">{service.price}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="service-cta">
                  <span>Book Now</span>
                  <div className="cta-hover-effect"></div>
                </button>
              </div>

              {/* Hover Effect Layer */}
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Services CTA */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Space?</h3>
            <p>Join thousands of satisfied customers who trust MadEasy for their cleaning needs.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Book a Service</button>
              <button className="cta-btn secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;