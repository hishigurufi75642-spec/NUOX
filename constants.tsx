
import React from 'react';
import { Category, Project, Review, Step } from './types';

// Категории изображений Unsplash для удобства
const KITCHEN_IMG = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800';
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800';
const KIDS_IMG = 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800';
const LIVING_IMG = 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=800';
const HALLWAY_IMG = 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800';
const WARDROBE_IMG = 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800';

export const CATEGORIES: Category[] = [
  {
    id: 'kitchens',
    title: 'Кухни',
    description: 'Эргономичные и стильные кухни, где рождаются кулинарные шедевры.',
    image: KITCHEN_IMG,
    slug: 'kitchens'
  },
  {
    id: 'bedrooms',
    title: 'Спальни',
    description: 'Уют и спокойствие для вашего идеального отдыха.',
    image: BEDROOM_IMG,
    slug: 'bedrooms'
  },
  {
    id: 'kids',
    title: 'Детские',
    description: 'Безопасные и функциональные решения для роста и развития.',
    image: KIDS_IMG,
    slug: 'kids'
  },
  {
    id: 'living',
    title: 'Гостиные',
    description: 'Центр вашего дома для встреч с близкими.',
    image: LIVING_IMG,
    slug: 'living'
  },
  {
    id: 'hallways',
    title: 'Прихожие',
    description: 'Первое впечатление, которое остается навсегда.',
    image: HALLWAY_IMG,
    slug: 'hallways'
  },
  {
    id: 'wardrobes',
    title: 'Шкафы-купе',
    description: 'Идеальный порядок и максимум свободного пространства.',
    image: WARDROBE_IMG,
    slug: 'wardrobes'
  }
];

export const PROJECTS: Project[] = [
  // КУХНИ
  {
    id: 1,
    title: 'Кухня в современном стиле',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1556912177-859418473787?auto=format&fit=crop&q=80&w=800',
    description: 'Минималистичное решение с гладкими фасадами и скрытой фурнитурой.',
    materials: ['МДФ Эмаль', 'Hettich', 'Кварц']
  },
  {
    id: 2,
    title: 'Кухня в классическом стиле',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
    description: 'Изысканная классика с объемной фрезеровкой фасадов.',
    materials: ['МДФ Фрезеровка', 'Патина', 'Blum']
  },
  {
    id: 3,
    title: 'Кухня в стиле неоклассика',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    description: 'Элегантное сочетание классических линий и современных акцентов с тонкой рамкой.',
    materials: ['МДФ тонкая рамка', 'Эмаль', 'GTV']
  },
  {
    id: 4,
    title: 'Кухня с металлическим профилем',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1520979858461-ac469b52467b?auto=format&fit=crop&q=80&w=800',
    description: 'Часть фасадов в черной металлической рамке со стеклом "Грей" и встроенной подсветкой.',
    materials: ['Алюминиевый профиль', 'Стекло Grey', 'LED']
  },
  {
    id: 5,
    title: 'Кухня с ручкой Gola',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
    description: 'Современная эргономика без выступающих ручек благодаря профилю Gola.',
    materials: ['Профиль Gola', 'ЛДСП Egger', 'МДФ']
  },
  {
    id: 6,
    title: 'Кухня с фасадами из пластика',
    category: 'Кухни',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800',
    description: 'Максимальная практичность и устойчивость к повреждениям.',
    materials: ['HPL Пластик', 'Kronospan', 'АБС кромка']
  },

  // СПАЛЬНЯ
  {
    id: 7,
    title: 'Шкаф с современной фрезеровкой',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    description: 'Геометрический узор на фасадах, создающий уникальный ритм в интерьере.',
    materials: ['МДФ Фрезеровка', 'Эмаль матовая']
  },
  {
    id: 8,
    title: 'Шкаф с зеркальными фасадами',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1616486332352-4775d73ad7ca?auto=format&fit=crop&q=80&w=800',
    description: 'Визуальное расширение пространства и функциональность.',
    materials: ['Зеркало серебро', 'МДФ', 'Firmax']
  },
  {
    id: 9,
    title: 'Шкаф в металлической рамке',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
    description: 'Стильный шкаф с фасадами в тонкой рамке и интегрированной подсветкой полок.',
    materials: ['Черный металл', 'Стекло', 'LED-профиль']
  },
  {
    id: 10,
    title: 'Шкаф с классической фрезеровкой',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1505693419148-db19f2852c9a?auto=format&fit=crop&q=80&w=800',
    description: 'Традиционный дизайн для уютной и спокойной спальни.',
    materials: ['МДФ Эмаль', 'Классический рисунок']
  },
  {
    id: 11,
    title: 'Шкаф с интегрированной ручкой',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    description: 'Прямые фасады в эмали с удобным и лаконичным хватом.',
    materials: ['МДФ Эмаль', 'Интегрированная ручка']
  },
  {
    id: 12,
    title: 'Шкаф с гладкими фасадами',
    category: 'Спальни',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    description: 'Базовое решение, идеально дополняющее любой интерьер.',
    materials: ['ЛДСП Egger', 'Push-to-open']
  },

  // ДЕТСКИЕ
  {
    id: 13,
    title: 'Шкаф с открытыми полками',
    category: 'Детские',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800',
    description: 'Комбинированная система хранения в спокойных пастельных тонах.',
    materials: ['ЛДСП Lamarty', 'Пастельные оттенки']
  },
  {
    id: 14,
    title: 'Шкаф и рабочая зона',
    category: 'Детские',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800',
    description: 'Единая мебельная группа: шкаф и письменный стол с выдвижными ящиками.',
    materials: ['МДФ Пленка', 'Телескопические направляющие']
  },
  {
    id: 15,
    title: 'Рабочая зона с навесными шкафами',
    category: 'Детские',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Компактное рабочее место с дополнительным местом хранения над столом.',
    materials: ['ЛДСП Egger', 'Мягкие цвета']
  },
  {
    id: 16,
    title: 'Детский шкаф в эмали',
    category: 'Детские',
    image: 'https://images.unsplash.com/photo-1620225783510-720610996f92?auto=format&fit=crop&q=80&w=800',
    description: 'Премиальное покрытие фасадов с безопасной интегрированной ручкой.',
    materials: ['МДФ Эмаль', 'Эко-краска']
  },

  // ГОСТИНЫЕ
  {
    id: 17,
    title: 'Навесная консоль под ТВ',
    category: 'Гостиные',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800',
    description: '"Парящая" конструкция, добавляющая легкости интерьеру гостиной.',
    materials: ['МДФ Эмаль', 'Усиленный подвес']
  },
  {
    id: 18,
    title: 'Напольная ТВ-консоль',
    category: 'Гостиные',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    description: 'Классическое надежное решение с большой полезной площадью.',
    materials: ['ЛДСП Egger', 'Матовая эмаль']
  },
  {
    id: 19,
    title: 'ТВ-зона с боковыми шкафами',
    category: 'Гостиные',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&q=80&w=800',
    description: 'Навесная консоль в окружении невысоких шкафов-витрин по бокам.',
    materials: ['МДФ', 'Стекло', 'Подсветка']
  },
  {
    id: 20,
    title: 'Гостиная с напольной базой',
    category: 'Гостиные',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
    description: 'Напольная консоль и симметричные шкафы для хранения.',
    materials: ['ЛДСП Lamarty', 'МДФ Пленка']
  },
  {
    id: 21,
    title: 'Стенка с настенными панелями',
    category: 'Гостиные',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    description: 'Композиция из консоли, декоративных стеновых панелей и открытых полок.',
    materials: ['Стеновые панели', 'Шпон/МДФ', 'LED']
  },

  // ПРИХОЖИЕ
  {
    id: 22,
    title: 'Прихожая с сиденьем',
    category: 'Прихожие',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?auto=format&fit=crop&q=80&w=800',
    description: 'Функциональный набор: шкаф, тумба для сидения и панель с крючками.',
    materials: ['МДФ', 'Текстиль', 'Крючки Boyard']
  },
  {
    id: 1023, // Adjusted to avoid conflicts
    id_fix: 23,
    title: 'Прихожая с зеркалом',
    category: 'Прихожие',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800',
    description: 'Шкаф и изящная навесная тумба с большим настенным зеркалом.',
    materials: ['Зеркало', 'МДФ Эмаль', 'Hettich']
  },
  {
    id: 24,
    title: 'Прихожая с обувницей',
    category: 'Прихожие',
    image: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=800',
    description: 'Основной шкаф и специализированная тумба для хранения обуви.',
    materials: ['ЛДСП Egger', 'Механизм для обуви']
  },

  // ШКАФЫ-КУПЕ
  {
    id: 25,
    title: 'Зеркальный шкаф-купе',
    category: 'Шкафы-купе',
    image: 'https://images.unsplash.com/photo-1616486332352-4775d73ad7ca?auto=format&fit=crop&q=80&w=800',
    description: 'Классический шкаф-купе с полностью зеркальными раздвижными дверями.',
    materials: ['Зеркало', 'Алюминиевый профиль']
  },
  {
    id: 26,
    title: 'Матовый шкаф-купе',
    category: 'Шкафы-купе',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Спокойный дизайн с фасадами из матового ЛДСП или МДФ.',
    materials: ['Soft-touch покрытие', 'МДФ матовый']
  },
  {
    id: 27,
    title: 'Шкаф-купе с делителями',
    category: 'Шкафы-купе',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    description: 'Матовые фасады, разделенные по горизонтали декоративным профилем.',
    materials: ['Декоративный профиль', 'ЛДСП']
  },
  {
    id: 28,
    title: 'Глянцевый шкаф-купе',
    category: 'Шкафы-купе',
    image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800',
    description: 'Эффектное решение с блестящими фасадами, отражающими свет.',
    materials: ['МДФ Глянец', 'UV-лак']
  }
].map(p => ({...p, id: p.id_fix || p.id})); // Small fix for sequential IDs

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Анна К.',
    text: 'Заказывали кухню. Очень довольны качеством сборки и вниманием к деталям. Все механизмы работают идеально!',
    rating: 5,
    date: '12.05.2024',
    avatar: 'https://i.pravatar.cc/150?u=anna'
  },
  {
    id: 2,
    author: 'Максим С.',
    text: 'Важно было использовать экологичные материалы для детской. NUOX предложили отличный проект из массива.',
    rating: 5,
    date: '03.06.2024',
    avatar: 'https://i.pravatar.cc/150?u=maxim'
  }
];

export const STEPS: Step[] = [
  { number: 1, title: 'Замер', description: 'Наш специалист приедет в удобное время и снимет точные параметры.' },
  { number: 2, title: 'Проект', description: 'Создаем 3D-визуализацию с учетом всех ваших пожеланий.' },
  { number: 3, title: 'Договор', description: 'Фиксируем сроки и стоимость. Никаких скрытых платежей.' },
  { number: 4, title: 'Производство', description: 'Изготавливаем мебель на собственном высокоточном оборудовании.' },
  { number: 5, title: 'Доставка', description: 'Бережно привозим ваш заказ в согласованный день.' },
  { number: 6, title: 'Монтаж', description: 'Профессиональная установка и уборка рабочего места.' }
];

export const ADVANTAGES = [
  { title: 'Собственное производство', description: 'Полный контроль качества на каждом этапе.' },
  { title: 'Эко-материалы', description: 'Используем только сертифицированные и безопасные материалы.' },
  { title: 'Гарантия 1 год', description: 'Мы уверены в надежности нашей мебели.' },
  { title: '3D-проект бесплатно', description: 'Визуализация вашей мечты еще до начала работ.' }
];
