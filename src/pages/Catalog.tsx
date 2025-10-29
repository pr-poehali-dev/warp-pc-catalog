import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Catalog() {
  const navigate = useNavigate();

  const allProducts = [
    { name: 'Starter PC', price: '₽65,000', cpu: 'i5-12400F', gpu: 'RTX 3060', ram: '16GB' },
    { name: 'Office PC', price: '₽45,000', cpu: 'i3-12100', gpu: 'Intel UHD', ram: '8GB' },
    { name: 'Gaming PC', price: '₽120,000', cpu: 'i7-13700K', gpu: 'RTX 4070', ram: '32GB' },
    { name: 'Gaming Pro', price: '₽160,000', cpu: 'i9-13900K', gpu: 'RTX 4080', ram: '32GB' },
    { name: 'Pro PC', price: '₽200,000', cpu: 'i9-13900K', gpu: 'RTX 4090', ram: '64GB' },
    { name: 'Workstation', price: '₽250,000', cpu: 'Xeon W', gpu: 'RTX A5000', ram: '128GB' }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <Icon name="Cpu" size={28} className="text-primary" />
            <span className="text-2xl font-bold">TechBuild</span>
          </button>
          <Button onClick={() => navigate('/')} variant="outline">
            <Icon name="Home" className="mr-2" size={18} />
            Главная
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-center mb-4">Каталог</h1>
        <p className="text-center text-muted-foreground mb-12">Все наши конфигурации</p>

        <div className="grid md:grid-cols-3 gap-8">
          {allProducts.map((pc) => (
            <Card key={pc.name} className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{pc.name}</h3>
              <div className="space-y-2 mb-6 text-muted-foreground">
                <p>CPU: {pc.cpu}</p>
                <p>GPU: {pc.gpu}</p>
                <p>RAM: {pc.ram}</p>
              </div>
              <div className="text-3xl font-bold text-primary mb-4">{pc.price}</div>
              <Button className="w-full">Заказать</Button>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TechBuild. Сборка компьютеров на заказ</p>
        </div>
      </footer>
    </div>
  );
}
