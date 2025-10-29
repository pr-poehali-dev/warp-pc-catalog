import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const [email, setEmail] = useState('');

  const systems = [
    {
      title: 'GENESIS',
      power: '15 TFLOPS',
      price: 89990,
      features: ['Intel i5-13400F', 'RTX 4060 8GB', '16GB DDR4', '512GB NVMe'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'PHANTOM',
      power: '28 TFLOPS',
      price: 149990,
      features: ['AMD Ryzen 7 7700X', 'RTX 4070 Ti 12GB', '32GB DDR5', '1TB NVMe'],
      color: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      title: 'TITAN',
      power: '45 TFLOPS',
      price: 239990,
      features: ['Intel i9-14900K', 'RTX 4090 24GB', '64GB DDR5', '2TB NVMe'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-black" size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-wider">WARP<span className="text-primary">PC</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Phone" size={16} className="mr-2" />
              КОНТАКТ
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="slide-up">
            <div className="inline-block mb-8">
              <div className="flex items-center gap-2 px-6 py-2 glass-dark rounded-full border border-primary/30">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold tracking-wider text-primary">СЛЕДУЮЩЕЕ ПОКОЛЕНИЕ</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <span className="text-primary neon-text">МОЩНОСТЬ</span>
              <br />
              БЕЗ ГРАНИЦ
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Игровые системы премиум-класса. Экстремальная производительность. 
              Собрано вручную профессионалами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold text-lg h-14 px-10 glow-box">
                <Icon name="Rocket" size={20} className="mr-2" />
                ВЫБРАТЬ СИСТЕМУ
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/10 text-lg h-14 px-10 font-bold">
                <Icon name="Play" size={20} className="mr-2" />
                СМОТРЕТЬ DEMO
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-32 max-w-4xl mx-auto">
            <div className="slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-black text-primary mb-2">800+</div>
              <div className="text-muted-foreground uppercase text-sm tracking-wider">Систем собрано</div>
            </div>
            <div className="slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-black text-primary mb-2">24/7</div>
              <div className="text-muted-foreground uppercase text-sm tracking-wider">Поддержка</div>
            </div>
            <div className="slide-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl font-black text-primary mb-2">3 ГОДА</div>
              <div className="text-muted-foreground uppercase text-sm tracking-wider">Гарантия</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              ВЫБЕРИ <span className="text-primary neon-text">СВОЮ МОЩЬ</span>
            </h2>
            <p className="text-xl text-muted-foreground">Три уровня производительности под любые задачи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {systems.map((sys, idx) => (
              <Card 
                key={idx}
                className={`relative overflow-hidden group hover:scale-105 transition-all duration-500 glass-dark border-2 ${
                  sys.popular ? 'border-primary glow-box' : 'border-primary/30'
                }`}
              >
                {sys.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                    ПОПУЛЯРНО
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${sys.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <CardContent className="relative p-8">
                  <div className="mb-8">
                    <h3 className="text-3xl font-black mb-2 tracking-wider">{sys.title}</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold">
                      <Icon name="Cpu" size={16} />
                      <span>{sys.power}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {sys.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-base">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-primary/20">
                    <div className="text-4xl font-black text-primary mb-6">
                      {sys.price.toLocaleString('ru')} ₽
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
      </section>

      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-dark border border-primary/30 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-black mb-6">
                ГОТОВ К <span className="text-primary neon-text">СТАРТУ</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставь email и получи персональную скидку 5%
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="твой@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 px-6 bg-background/50 border-2 border-primary/30 rounded-lg focus:border-primary focus:outline-none font-bold text-lg"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold h-14 px-10">
                  <Icon name="Send" size={20} className="mr-2" />
                  ОТПРАВИТЬ
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="glass-dark p-4 rounded-lg border border-primary/20">
                  <Icon name="Zap" size={32} className="text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Быстрая сборка</div>
                </div>
                <div className="glass-dark p-4 rounded-lg border border-primary/20">
                  <Icon name="Shield" size={32} className="text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">3 года гарантии</div>
                </div>
                <div className="glass-dark p-4 rounded-lg border border-primary/20">
                  <Icon name="Truck" size={32} className="text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Доставка 24ч</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-black" size={18} />
              </div>
              <span className="text-xl font-bold tracking-wider">WARP<span className="text-primary">PC</span></span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">Гарантия</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
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

export default Index;
