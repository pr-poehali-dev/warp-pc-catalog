import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ParallaxBackground from '@/components/ParallaxBackground';
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
    }
  ];

  const features = [
    {
      icon: 'Cpu',
      title: 'Мощность',
      description: 'Самые современные комплектующие для максимальной производительности'
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Быстрая сборка и доставка в течение 5 рабочих дней'
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: '3 года официальной гарантии на все комплектующие'
    },
    {
      icon: 'Wrench',
      title: 'Поддержка',
      description: 'Бесплатная техническая поддержка и консультации'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" size={28} className="text-primary" />
              <span className="text-2xl font-bold">WarpPC</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'catalog', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
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
              <Button onClick={() => scrollToSection('contacts')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <ParallaxBackground />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Воплощаем <span className="text-primary">любые идеи</span> в мире компьютеров
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем персональные компьютеры под любые задачи: от офисной работы до профессионального гейминга и 3D-рендеринга
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg button-hover" onClick={() => scrollToSection('catalog')}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg button-hover" onClick={() => scrollToSection('contacts')}>
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>

          <div ref={featuresRef.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary card-hover animate-on-scroll ${
                  featuresRef.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div ref={catalogRef.ref} className={`text-center mb-12 animate-on-scroll ${
            catalogRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог компьютеров</h2>
            <p className="text-xl text-muted-foreground">Выберите готовую конфигурацию или закажите индивидуальную сборку</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {computers.map((computer, index) => (
              <Card 
                key={computer.id} 
                className={`overflow-hidden group card-hover hover-shimmer animate-on-scroll-scale ${
                  catalogRef.isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-muted to-background">
                  <img 
                    src={computer.image} 
                    alt={computer.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-primary shadow-lg group-hover:scale-110 transition-transform duration-300">{computer.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{computer.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {computer.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">{computer.price}</span>
                    <Button size="sm" className="button-hover">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="button-hover text-lg"
              onClick={() => navigate('/catalog')}
            >
              <Icon name="Grid3x3" size={20} className="mr-2" />
              Показать все компьютеры
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div ref={aboutRef.ref} className={`text-center mb-12 animate-on-scroll ${
            aboutRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нас</h2>
          </div>
          <Card className={`border-2 animate-on-scroll ${
            aboutRef.isVisible ? 'visible' : ''
          }`} style={{ transitionDelay: '0.2s' }}>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <span className="text-foreground font-semibold">WarpPC</span> — это команда энтузиастов, которые влюблены в технологии и знают всё о создании идеального компьютера.
                </p>
                <p>
                  Мы не просто собираем ПК — мы воплощаем ваши идеи в реальность. Будь то мощная игровая станция, рабочая лошадка для монтажа видео или компактный офисный компьютер — мы найдем оптимальное решение.
                </p>
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm">Собранных ПК</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3 года</div>
                    <div className="text-sm">Гарантия</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div ref={contactsRef.ref} className={`text-center mb-12 animate-on-scroll ${
            contactsRef.isVisible ? 'visible' : ''
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <Card className={`border-2 animate-on-scroll-scale ${
            contactsRef.isVisible ? 'visible' : ''
          }`} style={{ transitionDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email или телефон</label>
                  <Input placeholder="ivan@example.com или +7 900 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших требованиях к компьютеру..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@warppc.ru</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Технологическая, 1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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

export default Index;