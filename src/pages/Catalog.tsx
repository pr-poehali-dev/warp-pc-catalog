import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);

  const allComputers = [
    {
      id: 1,
      name: 'WarpPC Gaming Pro',
      category: 'Gaming',
      price: '₽ 150 000',
      specs: ['RTX 4080', 'i9-13900K', '32GB RAM', '2TB NVMe'],
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'WarpPC Creator',
      category: 'Creative',
      price: '₽ 200 000',
      specs: ['RTX 4090', 'Ryzen 9 7950X', '64GB RAM', '4TB NVMe'],
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'WarpPC Office',
      category: 'Office',
      price: '₽ 60 000',
      specs: ['GTX 1660', 'i5-12400', '16GB RAM', '512GB SSD'],
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'WarpPC Workstation',
      category: 'Professional',
      price: '₽ 250 000',
      specs: ['RTX A5000', 'Xeon W-2295', '128GB RAM', '8TB Storage'],
      image: 'https://images.unsplash.com/photo-1555680202-c3335513cf32?w=500&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'WarpPC Gaming Elite',
      category: 'Gaming',
      price: '₽ 220 000',
      specs: ['RTX 4090', 'i9-14900K', '64GB RAM', '4TB NVMe'],
      image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=500&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'WarpPC Budget',
      category: 'Office',
      price: '₽ 40 000',
      specs: ['GTX 1650', 'i3-12100', '8GB RAM', '256GB SSD'],
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'WarpPC Streamer',
      category: 'Gaming',
      price: '₽ 180 000',
      specs: ['RTX 4070 Ti', 'Ryzen 9 7900X', '32GB RAM', '2TB NVMe'],
      image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'WarpPC Designer',
      category: 'Creative',
      price: '₽ 170 000',
      specs: ['RTX 4070', 'i7-13700K', '32GB RAM', '2TB SSD'],
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'WarpPC Server',
      category: 'Professional',
      price: '₽ 300 000',
      specs: ['RTX A6000', 'Xeon W-3345', '256GB RAM', '16TB Storage'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=400&fit=crop'
    },
    {
      id: 10,
      name: 'WarpPC Compact',
      category: 'Office',
      price: '₽ 80 000',
      specs: ['RTX 3060', 'i5-13400', '16GB RAM', '1TB SSD'],
      image: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&h=400&fit=crop'
    },
    {
      id: 11,
      name: 'WarpPC Video Pro',
      category: 'Creative',
      price: '₽ 240 000',
      specs: ['RTX 4090', 'i9-13900KS', '128GB RAM', '8TB NVMe'],
      image: 'https://images.unsplash.com/photo-1603481546921-34775a0a60e7?w=500&h=400&fit=crop'
    },
    {
      id: 12,
      name: 'WarpPC Starter',
      category: 'Gaming',
      price: '₽ 90 000',
      specs: ['RTX 3060', 'Ryzen 5 5600', '16GB RAM', '512GB NVMe'],
      image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=500&h=400&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'Gaming', name: 'Игровые', icon: 'Gamepad2' },
    { id: 'Creative', name: 'Творчество', icon: 'Palette' },
    { id: 'Office', name: 'Офис', icon: 'Briefcase' },
    { id: 'Professional', name: 'Про', icon: 'Building2' }
  ];

  const filteredComputers = selectedCategory === 'all' 
    ? allComputers 
    : allComputers.filter(c => c.category === selectedCategory);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Compact Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="px-2 py-1.5 md:px-4 md:py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity"
            >
              <Icon name="Rocket" size={16} className="text-primary md:w-7 md:h-7" />
              <span className="text-base md:text-2xl font-bold">WarpPC</span>
            </button>
            <div className="flex items-center gap-1 md:gap-3">
              <ThemeToggle />
              <Button onClick={() => navigate('/')} variant="outline" size="sm" className="h-7 px-1.5 md:h-9 md:px-3">
                <Icon name="Home" size={12} className="md:w-4 md:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Compact Content */}
      <div className="pt-11 md:pt-24 pb-3 md:pb-20">
        <div className="px-2 md:px-4 max-w-7xl mx-auto">
          {/* Mobile Compact Title */}
          <div className="text-center mb-2 md:mb-12 animate-fade-in relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-72 md:h-72 bg-destructive/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            </div>
            <h1 className="text-lg md:text-6xl font-bold mb-1 md:mb-4 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent animate-gradient bg-300">
              Каталог
            </h1>
            <p className="text-xs md:text-xl text-muted-foreground hidden md:block">Все наши конфигурации компьютеров в одном месте</p>
          </div>

          {/* Mobile Compact Filters */}
          <div className="flex gap-1 md:gap-3 overflow-x-auto pb-1.5 mb-2 md:mb-12 scrollbar-hide justify-start md:justify-center">
            {categories.map((category, idx) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className={`button-hover animate-fade-in text-[10px] md:text-sm relative overflow-hidden group/btn h-6 px-1.5 md:h-9 md:px-4 flex-shrink-0 ${
                  selectedCategory === category.id ? 'shadow-lg shadow-primary/50' : ''
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                <Icon name={category.icon} size={11} className="md:mr-2 md:w-4 md:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative hidden md:inline">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-6">
            {filteredComputers.map((computer, index) => (
              <Card 
                key={`${computer.id}-${selectedCategory}`}
                className={`overflow-hidden group card-hover hover-shimmer relative border ${
                  animateCards ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-700 animate-pulse-slow" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-destructive/10 rounded-full blur-2xl group-hover:bg-destructive/30 transition-all duration-700 animate-pulse-slow" style={{animationDelay: '1s'}} />
                
                {/* Mobile Compact Image */}
                <div className="relative overflow-hidden h-20 md:h-48 bg-gradient-to-br from-muted via-background to-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-destructive/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-gradient-slow" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img 
                    src={computer.image} 
                    alt={computer.name}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent blur-xl animate-pulse-glow" />
                  </div>
                  <Badge className="absolute top-1 right-1 md:top-4 md:right-4 text-[8px] md:text-sm bg-primary/90 backdrop-blur-sm shadow-lg group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-primary/50 transition-all duration-500 px-1 py-0 md:px-2 md:py-1">
                    {computer.category}
                  </Badge>
                  <div className="absolute top-1 left-1 md:top-4 md:left-4 w-6 h-6 md:w-10 md:h-10 rounded-full bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Icon name="Zap" size={12} className="text-primary animate-pulse md:w-4 md:h-4" />
                  </div>
                </div>

                {/* Mobile Compact Content */}
                <CardContent className="p-1.5 md:p-6 relative">
                  <div className="absolute top-0 left-0 w-0 h-0.5 md:h-1 bg-gradient-to-r from-primary via-destructive to-primary bg-300 group-hover:w-full transition-all duration-1000 animate-gradient" />
                  <div className="absolute top-0 right-0 w-0.5 md:w-1 h-0 bg-gradient-to-b from-primary to-destructive group-hover:h-full transition-all duration-1000 delay-300" />
                  
                  {/* Mobile Compact Title */}
                  <h3 className="text-[10px] leading-tight md:text-xl font-bold mb-1 md:mb-3 group-hover:text-primary transition-all duration-500 group-hover:translate-x-1 line-clamp-1">
                    {computer.name}
                  </h3>
                  
                  {/* Mobile Compact Specs */}
                  <ul className="space-y-0 md:space-y-2 mb-1 md:mb-4">
                    {computer.specs.slice(0, 1).map((spec, idx) => (
                      <li 
                        key={idx} 
                        className="text-[8px] md:text-sm text-muted-foreground flex items-start gap-0.5 md:gap-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                      >
                        <Icon name="Check" size={8} className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 mt-0.5 md:w-3.5 md:h-3.5" />
                        <span className="group-hover:text-foreground transition-colors duration-300 line-clamp-1">{spec}</span>
                      </li>
                    ))}
                    <li className="text-[8px] md:text-sm text-muted-foreground opacity-40 md:hidden">+{computer.specs.length - 1} ещё</li>
                    {computer.specs.slice(2).map((spec, idx) => (
                      <li 
                        key={idx + 2} 
                        className="hidden md:flex text-sm text-muted-foreground items-start gap-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${(idx + 2) * 0.1}s` }}
                      >
                        <Icon name="Check" size={14} className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 mt-0.5" />
                        <span className="group-hover:text-foreground transition-colors duration-300 line-clamp-1">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Mobile Compact Price & Button */}
                  <div className="flex items-center justify-between pt-1 md:pt-4 border-t border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                    <span className="text-xs md:text-2xl font-bold text-primary group-hover:scale-110 md:group-hover:scale-125 transition-all duration-500 inline-block relative">
                      <span className="absolute inset-0 blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                      <span className="relative animate-gradient bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text bg-300">{computer.price}</span>
                    </span>
                    <Button size="sm" className="button-hover group-hover:scale-110 transition-all duration-300 text-[9px] md:text-sm shadow-lg group-hover:shadow-primary/50 h-5 px-1.5 md:h-9 md:px-4">
                      <Icon name="ShoppingCart" size={10} className="group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 md:mr-2 md:w-3.5 md:h-3.5" />
                      <span className="hidden md:inline">Заказать</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;