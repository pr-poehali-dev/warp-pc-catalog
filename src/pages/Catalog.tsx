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
    { id: 'Creative', name: 'Для творчества', icon: 'Palette' },
    { id: 'Office', name: 'Офисные', icon: 'Briefcase' },
    { id: 'Professional', name: 'Профессиональные', icon: 'Building2' }
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Icon name="Rocket" size={28} className="text-primary" />
              <span className="text-2xl font-bold">WarpPC</span>
            </button>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button onClick={() => navigate('/')} variant="outline">
                <Icon name="Home" size={16} className="mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-destructive bg-clip-text text-transparent">
              Полный каталог
            </h1>
            <p className="text-xl text-muted-foreground">Все наши конфигурации компьютеров в одном месте</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, idx) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="button-hover animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon name={category.icon} size={18} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredComputers.map((computer, index) => (
              <Card 
                key={`${computer.id}-${selectedCategory}`}
                className={`overflow-hidden group card-hover hover-shimmer relative ${
                  animateCards ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-muted to-background">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 animate-shimmer" />
                  <img 
                    src={computer.image} 
                    alt={computer.name}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-xl" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {computer.category}
                  </Badge>
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-destructive group-hover:w-full transition-all duration-700" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-500 group-hover:translate-x-2">
                    {computer.name}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {computer.specs.map((spec, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm text-muted-foreground flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                      >
                        <Icon name="Check" size={16} className="text-primary group-hover:scale-125 transition-transform duration-300" />
                        <span className="group-hover:text-foreground transition-colors duration-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                    <span className="text-2xl font-bold text-primary group-hover:scale-125 transition-all duration-500 inline-block relative">
                      <span className="absolute inset-0 blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative">{computer.price}</span>
                    </span>
                    <Button size="sm" className="button-hover group-hover:scale-110 transition-transform duration-300">
                      <Icon name="ShoppingCart" size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredComputers.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Компьютеры не найдены</p>
            </div>
          )}
        </div>
      </div>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Rocket" size={24} className="text-primary" />
            <span className="text-xl font-bold text-foreground">WarpPC</span>
          </div>
          <p>© 2024 WarpPC. Воплощаем любые идеи в мире компьютеров</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;