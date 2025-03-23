import Link from 'next/link';
import { ModeToggle } from './theme-toggle-button';
import { buttonVariants } from './ui/button';

function Narvar() {
  return (
    <nav className='flex justify-between py-5'>
      <Link href="/">
      <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
        Tu gestor de tareas
      </h1>
      </Link>
      <div className='flex gap-x-2 items-star'>
        <Link href="/new"
        className={buttonVariants({variant: "secondary"})}
        >
        Crear tarea</Link>
      <ModeToggle />
      </div>
    </nav>
  );
}

export default Narvar;