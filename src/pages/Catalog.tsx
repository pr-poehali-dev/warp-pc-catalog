import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'GENESIS',
      category: 'starter',
      power: '15 TFLOPS',
      price: 89990,
      specs: ['Intel i5-13400F', 'RTX 4060 8GB', '16GB DDR4', '512GB NVMe'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      name: 'GENESIS PRO',
      category: 'starter',
      power: '18 TFLOPS',
      price: 109990,
      specs: ['AMD Ryzen 5 7600X', 'RTX 4060 Ti 8GB', '32GB DDR5', '1TB NVMe'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'PHANTOM',
      category: 'mid',
      power: '28 TFLOPS',
      price: 149990,
      specs: ['AMD Ryzen 7 7700X', 'RTX 4070 Ti 12GB', '32GB DDR5', '1TB NVMe'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 4,
      name: 'PHANTOM ULTRA',
      category: 'mid',
      power: '32 TFLOPS',
      price: 179990,
      specs: ['Intel i7-14700K', 'RTX 4070 Ti Super 16GB', '32GB DDR5', '2TB NVMe'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 5,
      name: 'TITAN',
      category: 'high',
      power: '45 TFLOPS',
      price: 239990,
      specs: ['Intel i9-14900K', 'RTX 4090 24GB', '64GB DDR5', '2TB NVMe'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 6,
      name: 'TITAN APEX',
      category: 'high',
      power: '50 TFLOPS',
      price: 289990,
      specs: ['Intel i9-14900KS', 'RTX 4090 24GB', '128GB DDR5', '4TB NVMe'],
      color: 'from-orange-400 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'ВСЕ СИСТЕМЫ', icon: 'Grid3x3' },
    { id: 'starter', label: 'СТАРТ', icon: 'Zap' },
    { id: 'mid', label: 'СРЕДНИЙ', icon: 'TrendingUp' },
    { id: 'high', label: 'ПРЕМИУМ', icon: 'Award' }
  ];

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-black" size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-wider">WARP<span className="text-primary">PC</span></h1>
          </button>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button onClick={() => navigate('/')} variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Home" size={16} className="mr-2" />
              ГЛАВНАЯ
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 slide-up">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              ПОЛНЫЙ <span className="text-primary neon-text">КАТАЛОГ</span>
            </h1>
            <p className="text-xl text-muted-foreground">Все наши системы в одном месте</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                variant={filter === cat.id ? 'default' : 'outline'}
                className={`font-bold tracking-wider ${
                  filter === cat.id 
                    ? 'bg-primary hover:bg-primary/90 text-black glow-box' 
                    : 'border-primary/50 hover:bg-primary/10'
                }`}
              >
                <Icon name={cat.icon} size={18} className="mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filtered.map((product, idx) => (
              <Card 
                key={product.id}
                className="relative overflow-hidden group hover:scale-105 transition-all duration-500 glass-dark border-2 border-primary/30 hover:border-primary"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <CardContent className="relative p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black mb-2 tracking-wider">{product.name}</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold">
                      <Icon name="Cpu" size={16} />
                      <span>{product.power}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-primary/20">
                    <div className="text-3xl font-black text-primary mb-4">
                      {product.price.toLocaleString('ru')} ₽
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      ЗАКАЗАТЬ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-black" size={18} />
              </div>
              <span className="text-xl font-bold tracking-wider">WARP<span className="text-primary">PC</span></span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 WarpPC. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
