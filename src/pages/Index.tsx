import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const products = [
    { name: 'Starter PC', price: '₽65,000', cpu: 'i5-12400F', gpu: 'RTX 3060', ram: '16GB' },
    { name: 'Gaming PC', price: '₽120,000', cpu: 'i7-13700K', gpu: 'RTX 4070', ram: '32GB' },
    { name: 'Pro PC', price: '₽200,000', cpu: 'i9-13900K', gpu: 'RTX 4090', ram: '64GB' }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Cpu" size={28} className="text-primary" />
            <span className="text-2xl font-bold">TechBuild</span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-primary">Каталог</a>
            <a href="#" className="hover:text-primary">О нас</a>
            <a href="#" className="hover:text-primary">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-black mb-6">Собираем мощные ПК</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Игровые компьютеры и рабочие станции под заказ
        </p>
        <Button size="lg" className="text-lg px-8">
          <Icon name="ShoppingBag" className="mr-2" />
          Выбрать конфигурацию
        </Button>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Популярные сборки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((pc) => (
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
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Icon name="Wrench" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Сборка за 2 дня</h3>
            <p className="text-muted-foreground">Быстрая профессиональная сборка</p>
          </div>
          <div>
            <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Гарантия 2 года</h3>
            <p className="text-muted-foreground">На все компоненты</p>
          </div>
          <div>
            <Icon name="Truck" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Доставка по РФ</h3>
            <p className="text-muted-foreground">Быстрая и надёжная</p>
          </div>
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
