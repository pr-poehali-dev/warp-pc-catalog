import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const featuresRef = useScrollAnimation();
  const catalogRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const contactsRef = useScrollAnimation();

  const computers = [
    {
      id: 1,
      name: 'Quantum Rift',
      category: 'Gaming Elite',
      price: '₽ 185 000',
      specs: ['RTX 4090', 'i9-14900K', '64GB DDR5', '4TB Gen5 NVMe'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Nebula Core',
      category: 'Creator Pro',
      price: '₽ 240 000',
      specs: ['RTX 4090', 'Ryzen 9 7950X3D', '128GB DDR5', '8TB Storage'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500'
    },
    {
      id: 3,
      name: 'Nova Spark',
      category: 'Office Max',
      price: '₽ 75 000',
      specs: ['RTX 4060', 'i5-14600K', '32GB DDR5', '1TB NVMe'],
      gradient: 'from-blue-500 via-indigo-500 to-violet-500'
    },
    {
      id: 4,
      name: 'Titan Forge',
      category: 'Workstation',
      price: '₽ 320 000',
      specs: ['RTX A6000', 'Xeon W-3375', '256GB ECC', '16TB RAID'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    }
  ];

  const features = [
    {
      icon: 'Cpu',
      title: 'Максимальная мощность',
      description: 'Новейшее поколение процессоров и видеокарт для непревзойденной производительности'
    },
    {
      icon: 'Zap',
      title: 'Молниеносная сборка',
      description: 'Профессиональная сборка и тестирование за 3-5 рабочих дней'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 3 года',
      description: 'Полная гарантия на все компоненты с бесплатным обслуживанием'
    },
    {
      icon: 'Headphones',
      title: '24/7 Поддержка',
      description: 'Круглосуточная техническая поддержка от настоящих экспертов'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent animate-gradient flex items-center justify-center">
                <Icon name="Cpu" size={24} className="text-black" />
              </div>
              <span className="text-2xl font-bold text-gradient">WarpPC</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'catalog', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-primary neon-text' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button onClick={() => scrollToSection('contacts')} className="button-hover">
                <Icon name="Sparkles" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-32 px-6 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-float-slow">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
              <span className="text-sm text-primary font-medium">Сборка компьютеров нового поколения</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Компьютеры из <span className="text-gradient">будущего</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Создаём мощные системы для геймеров, творцов и профессионалов. 
              Передовые технологии, безупречная сборка, космическая производительность.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" className="text-lg button-hover h-14 px-8" onClick={() => scrollToSection('catalog')}>
                <Icon name="Rocket" size={22} className="mr-2" />
                Выбрать систему
              </Button>
              <Button size="lg" variant="outline" className="text-lg button-hover h-14 px-8 glass" onClick={() => scrollToSection('contacts')}>
                <Icon name="MessageCircle" size={22} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>

          <div ref={featuresRef.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`glass neon-border card-hover animate-on-scroll ${
                  featuresRef.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 mx-auto">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-32 px-6">
        <div className="container mx-auto">
          <div ref={catalogRef.ref} className={`text-center mb-20 animate-on-scroll ${
            catalogRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Наши <span className="text-gradient">системы</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые конфигурации премиум-класса или персональная сборка под ваши требования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {computers.map((computer, index) => (
              <Card 
                key={computer.id} 
                className={`overflow-hidden group card-hover glass neon-border animate-on-scroll-scale ${
                  catalogRef.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`relative h-56 bg-gradient-to-br ${computer.gradient} animate-gradient`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Cpu" size={80} className="text-white/20" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20">
                    {computer.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 neon-text">{computer.name}</h3>
                  <ul className="space-y-3 mb-6">
                    {computer.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-3xl font-bold text-primary">{computer.price}</span>
                    <Button size="sm" className="button-hover">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="button-hover text-lg h-14 px-8"
              onClick={() => navigate('/catalog')}
            >
              <Icon name="Grid3x3" size={22} className="mr-2" />
              Полный каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div ref={aboutRef.ref} className={`text-center mb-16 animate-on-scroll ${
            aboutRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6"><span className="text-gradient">О нас</span></h2>
          </div>
          
          <Card className={`glass neon-border animate-on-scroll ${
            aboutRef.isVisible ? 'visible' : ''
          }`} style={{ transitionDelay: '0.3s' }}>
            <CardContent className="p-12">
              <div className="space-y-8 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary font-bold text-xl neon-text">WarpPC</span> — команда энтузиастов и профессионалов, 
                  которые превращают технологии в искусство. Мы не просто собираем компьютеры, 
                  мы создаём идеальные инструменты для достижения ваших целей.
                </p>
                <p className="text-muted-foreground">
                  Каждая система тестируется в экстремальных условиях, оптимизируется до предела 
                  и поставляется с персональной настройкой. Игры, 3D-моделирование, видеомонтаж — 
                  мы знаем, как добиться максимума.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 pt-12">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-3 neon-text">800+</div>
                    <div className="text-muted-foreground">Собранных систем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-3 neon-text">99%</div>
                    <div className="text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gradient mb-3 neon-text">5 лет</div>
                    <div className="text-muted-foreground">На рынке</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div ref={contactsRef.ref} className={`text-center mb-16 animate-on-scroll ${
            contactsRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6"><span className="text-gradient">Контакты</span></h2>
            <p className="text-xl text-muted-foreground">Готовы создать вашу идеальную систему</p>
          </div>

          <Card className={`glass neon-border animate-on-scroll-scale ${
            contactsRef.isVisible ? 'visible' : ''
          }`} style={{ transitionDelay: '0.3s' }}>
            <CardContent className="p-10">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block text-muted-foreground">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="glass border-white/20 h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-3 block text-muted-foreground">Email или телефон</label>
                  <Input placeholder="ivan@example.com" className="glass border-white/20 h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-3 block text-muted-foreground">Расскажите о ваших задачах</label>
                  <Textarea placeholder="Для каких целей нужен компьютер? Какие программы используете?" rows={5} className="glass border-white/20" />
                </div>
                <Button className="w-full button-hover h-12 text-base" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t border-white/10 space-y-5">
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-primary transition-colors">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <span className="text-lg">info@warppc.ru</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-primary transition-colors">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-primary transition-colors">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <span className="text-lg">Москва, ул. Технологическая, 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
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

export default Index;
