'use client';
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export function AppHeader() {
  const { data: session } = useSession();
  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-[1200] flex items-center border-b border-stone-300 bg-white/90 backdrop-blur lg:px-8 px-4 sm:px-6">
      <Link href="/" className="text-lg font-pirata-one text-stone-800 hover:text-amber-600 transition-colors">
        Mausritter
      </Link>
      <div className="ml-auto flex items-center gap-3">
        {session && (
          <>
            <span className="text-xs text-stone-500 max-w-[140px] truncate" title={session.user?.email || session.user?.name || ''}>{session.user?.name || session.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="px-3 py-1 text-xs rounded bg-stone-800 text-white hover:bg-stone-700"
            >Выйти</button>
          </>
        )}
      </div>
    </header>
  );
}
