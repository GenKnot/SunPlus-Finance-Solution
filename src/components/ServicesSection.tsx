import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ image, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#CC4C3D] flex flex-col h-full transform hover:-translate-y-2">
      <div className="w-full h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#CC4C3D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#CC4C3D] transition-colors duration-300">{title}</h3>
        
        <p className="text-gray-600 text-center mb-8 leading-relaxed flex-1 text-base">{description}</p>
        
        <ul className="space-y-4 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              <div className="w-3 h-3 bg-[#CC4C3D] rounded-full mr-4 flex-shrink-0 group-hover:bg-[#CC4C3D]/80 transition-colors duration-300"></div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Convert more visitors into customers with websites that load fast, look professional, and work perfectly on all devices.',
      features: [
        'Mobile-first responsive design',
        'SEO optimization for Google ranking',
        '24/7 performance monitoring',
        'Monthly security updates'
      ],
      image: '/Images/s-1.png'
    },
    {
      id: 2,
      title: 'IT Leadership',
      description: 'Make smarter technology decisions and lead your team with confidence. We guide your IT strategy from planning to execution.',
      features: [
        'Technology roadmap development',
        'Team training & mentoring',
        'System integration planning',
        'Vendor management'
      ],
      image: '/Images/s-2.png'
    },
    {
      id: 3,
      title: 'Bookkeeping',
      description: 'Keep your finances organized and compliant with CPA-certified bookkeeping. Get qualified member benefits for advanced financial planning.',
      features: [
        'Monthly financial reports',
        'Tax preparation & filing',
        'Qualified member perks',
        'Audit support'
      ],
      image: '/Images/s-3.png'
    },
    {
      id: 4,
      title: 'Consultation',
      description: 'Streamline your operations and boost efficiency with expert guidance on administrative processes and management best practices.',
      features: [
        'Process optimization audits',
        'Management training programs',
        'Administrative system setup',
        'Growth strategy planning'
      ],
      image: '/Images/s-4.png'
    }
  ];

  return (
    <div id="services" className="relative">
      <div className="w-full h-64 primary-bg flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-6">What We Do Best</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Four specialized services that work together to transform your business operations and drive growth
          </p>
        </div>
      </div>
      
      <div className="py-20" style={{backgroundColor: 'rgba(204, 76, 61, 0.05)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}