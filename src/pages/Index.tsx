import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const footballs = [
  {
    id: 1,
    name: 'Футбольный мяч Orange Pro',
    price: 2999,
    image: '/img/1637aa6f-3704-4296-9808-cf86ae8803f7.jpg',
    color: 'Оранжевый',
    description: 'Профессиональный мяч с усиленной конструкцией'
  },
  {
    id: 2,
    name: 'Футбольный мяч Green Field',
    price: 2599,
    image: '/img/96a50400-8f0a-4b74-89d6-5a7f9c526976.jpg',
    color: 'Зеленый',
    description: 'Идеальный выбор для тренировок на поле'
  },
  {
    id: 3,
    name: 'Футбольный мяч Classic',
    price: 2299,
    image: '/img/53836c3e-1c07-4122-ad1c-b07a519d463c.jpg',
    color: 'Черно-белый',
    description: 'Классический дизайн в традиционных цветах'
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={32} className="text-primary" />
              <span className="text-2xl font-montserrat font-bold text-primary">FootballStore</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="font-medium hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#2E7D32] opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-6">
              Футбольные мячи
              <br />
              <span className="text-5xl md:text-6xl">премиум качества</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Откройте мир профессионального футбола с нашими мячами разных цветов
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4">
              <Icon name="ArrowDown" size={24} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
        
        {/* Floating football icons */}
        <div className="absolute top-20 left-10 text-white/20 animate-bounce">
          <Icon name="Circle" size={60} />
        </div>
        <div className="absolute bottom-20 right-20 text-white/20 animate-bounce delay-500">
          <Icon name="Target" size={40} />
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный футбольный мяч из нашей коллекции премиум качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footballs.map((ball, index) => (
              <Card key={ball.id} className="group hover:shadow-xl transition-all duration-300 animate-bounce-in border-2 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-white mb-4">
                    <img
                      src={ball.image}
                      alt={ball.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary-foreground">
                    {ball.color}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardTitle className="text-xl font-montserrat mb-2">{ball.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{ball.description}</CardDescription>
                  <div className="text-3xl font-montserrat font-bold text-primary">
                    {ball.price.toLocaleString()} ₽
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда энтузиастов футбола, которая более 10 лет предоставляет качественную 
                спортивную экипировку. Наши мячи используют профессиональные команды и любители 
                по всей стране.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={24} className="text-secondary" />
                  <span className="text-lg">Только сертифицированные мячи</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={24} className="text-secondary" />
                  <span className="text-lg">Гарантия качества 2 года</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={24} className="text-secondary" />
                  <span className="text-lg">Более 50 000 довольных клиентов</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl animate-fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Моделей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Быстро и надежно доставим ваш заказ в любую точку России
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 animate-bounce-in border-2 hover:border-primary/20 transition-colors">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставка по Москве за 1 день, по России — 2-5 дней</p>
            </Card>
            
            <Card className="text-center p-8 animate-bounce-in border-2 hover:border-primary/20 transition-colors" style={{ animationDelay: '0.1s' }}>
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">Безопасная упаковка</h3>
              <p className="text-muted-foreground">Специальная упаковка защищает мячи от повреждений</p>
            </Card>
            
            <Card className="text-center p-8 animate-bounce-in border-2 hover:border-primary/20 transition-colors" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="CreditCard" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">Удобная оплата</h3>
              <p className="text-muted-foreground">Наличными, картой или онлайн-переводом</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 123, офис 456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@footballstore.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl animate-fade-in">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Написать нам</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Target" size={32} className="text-primary" />
                <span className="text-2xl font-montserrat font-bold">FootballStore</span>
              </div>
              <p className="text-background/70">
                Лучшие футбольные мячи для профессионалов и любителей
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Профессиональные мячи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тренировочные мячи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Детские мячи</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@footballstore.ru</li>
                <li>г. Москва, ул. Спортивная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 FootballStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}