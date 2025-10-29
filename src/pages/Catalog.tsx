import { useState, useEffect, useRef } from 'react';
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const allComputers = [
    {
      id: 1,
      name: 'Quantum Rift Pro',
      category: 'Gaming',
      price: '₽ 185 000',
      specs: ['RTX 4090', 'i9-14900K', '64GB DDR5', '4TB Gen5 NVMe'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Nebula Creator X',
      category: 'Creative',
      price: '₽ 240 000',
      specs: ['RTX 4090', 'Ryzen 9 7950X3D', '128GB DDR5', '8TB Storage'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500'
    },
    {
      id: 3,
      name: 'Nova Office Plus',
      category: 'Office',
      price: '₽ 75 000',
      specs: ['RTX 4060', 'i5-14600K', '32GB DDR5', '1TB NVMe'],
      gradient: 'from-blue-500 via-indigo-500 to-violet-500'
    },
    {
      id: 4,
      name: 'Titan Workstation',
      category: 'Professional',
      price: '₽ 320 000',
      specs: ['RTX A6000', 'Xeon W-3375', '256GB ECC', '16TB RAID'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    },
    {
      id: 5,
      name: 'Cyber Storm Elite',
      category: 'Gaming',
      price: '₽ 220 000',
      specs: ['RTX 4080 Super', 'i9-14900KS', '64GB DDR5', '4TB NVMe'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      id: 6,
      name: 'Spark Mini',
      category: 'Office',
      price: '₽ 50 000',
      specs: ['RTX 4050', 'i3-14100', '16GB DDR5', '512GB SSD'],
      gradient: 'from-sky-500 via-blue-500 to-indigo-500'
    },
    {
      id: 7,
      name: 'Stream Master',
      category: 'Gaming',
      price: '₽ 195 000',
      specs: ['RTX 4070 Ti', 'Ryzen 9 7900X', '64GB DDR5', '2TB NVMe'],
      gradient: 'from-lime-500 via-green-500 to-emerald-500'
    },
    {
      id: 8,
      name: 'Vision Designer',
      category: 'Creative',
      price: '₽ 190 000',
      specs: ['RTX 4070 Super', 'i7-14700K', '64GB DDR5', '3TB SSD'],
      gradient: 'from-fuchsia-500 via-purple-500 to-violet-500'
    },
    {
      id: 9,
      name: 'Apex Server',
      category: 'Professional',
      price: '₽ 380 000',
      specs: ['RTX A6000 Ada', 'Xeon W-3465X', '512GB ECC', '32TB Storage'],
      gradient: 'from-red-500 via-orange-500 to-amber-500'
    },
    {
      id: 10,
      name: 'Pulse Compact',
      category: 'Office',
      price: '₽ 85 000',
      specs: ['RTX 4060', 'i5-14400', '32GB DDR5', '1TB SSD'],
      gradient: 'from-cyan-500 via-sky-500 to-blue-500'
    },
    {
      id: 11,
      name: 'Cinema Pro Max',
      category: 'Creative',
      price: '₽ 280 000',
      specs: ['RTX 4090', 'i9-14900KS', '192GB DDR5', '12TB NVMe'],
      gradient: 'from-pink-500 via-rose-500 to-red-500'
    },
    {
      id: 12,
      name: 'Arena Starter',
      category: 'Gaming',
      price: '₽ 95 000',
      specs: ['RTX 4060 Ti', 'Ryzen 5 7600X', '32GB DDR5', '1TB NVMe'],
      gradient: 'from-teal-500 via-cyan-500 to-sky-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все системы', icon: 'Grid3x3' },
    { id: 'Gaming', name: 'Gaming', icon: 'Gamepad2' },
    { id: 'Creative', name: 'Creative', icon: 'Palette' },
    { id: 'Office', name: 'Office', icon: 'Briefcase' },
    { id: 'Professional', name: 'Pro', icon: 'Building2' }
  ];

  const filteredComputers = selectedCategory === 'all' 
    ? allComputers 
    : allComputers.filter(c => c.category === selectedCategory);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [filteredComputers]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent animate-gradient flex items-center justify-center">
                <Icon name="Cpu" size={24} className="text-black" />
              </div>
              <span className="text-2xl font-bold text-gradient">WarpPC</span>
            </button>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button onClick={() => navigate('/')} variant="outline" className="glass">
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Полный <span className="text-gradient">каталог</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите готовую конфигурацию или закажите персональную сборку
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide justify-center flex-wrap">
            {categories.map((category, idx) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                size="lg"
                className={`button-hover animate-fade-in glass ${
                  selectedCategory === category.id ? 'neon-border' : 'border-white/20'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon name={category.icon} size={20} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComputers.map((computer, index) => (
              <Card 
                key={computer.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`overflow-hidden group card-hover glass neon-border ${
                  animateCards ? 'animate-on-scroll-scale visible' : 'animate-on-scroll-scale'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-64 bg-gradient-to-br ${computer.gradient} animate-gradient`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Cpu" size={100} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 text-sm">
                    {computer.category}
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 neon-text">{computer.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {computer.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-3xl font-bold text-primary">{computer.price}</span>
                    <Button size="lg" className="button-hover">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredComputers.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">Компьютеры не найдены в этой категории</p>
            </div>
          )}
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-white/10 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent animate-gradient flex items-center justify-center">
              <Icon name="Cpu" size={18} className="text-black" />
            </div>
            <span className="text-xl font-bold text-gradient">WarpPC</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 WarpPC. Сборка компьютеров нового поколения
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
