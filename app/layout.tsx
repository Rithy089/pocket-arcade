import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Pocket Arcade — Free Mini Games',description:'Your next good break starts here. Play 12 free mini-games, from Snake and 2048 to word puzzles and reflex challenges. No downloads or sign-up.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
