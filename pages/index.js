import { Inter } from 'next/font/google';
import PhoneImage from '@/assets/phone.png';
import CheckBox from '@/assets/checkbox.png';
import HowItWorks from '@/assets/howtodo.png';
import Image from 'next/image';
import TodoList from '@/components/Todo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen mx-auto ${inter.className} `}>
      <TodoList />
    </main>
  );
}
