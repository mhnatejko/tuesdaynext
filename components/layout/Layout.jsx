import Link from 'next/link'
import * as style from './layout.module.css';
import { useRouter } from 'next/router';

export default function Layout({ children }){
    const { route } = useRouter();

    const links = [
        {href: '/', label: 'home'},
        {href: '/page', label: '> page'},
    ];

    return (
        <div>
            <header className={style.header}>
                <nav className={style.nav}>
                    {
                        links
                            .filter(link => link.href !== route)
                            .map(({ href, label }) => (
                                <Link key={href} href={href}><a>{label}</a></Link>
                            ))
                    }
                </nav>
            </header>
            <main className={style.main}>
                {children}
            </main>
            <footer className={style.footer}>*</footer>
        </div>
    )
}