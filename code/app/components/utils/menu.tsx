'use client';

import { useState, useEffect } from 'react';
import {
  DialogTrigger,
  Dialog,
  Heading,
  Button,
  Modal,
} from 'react-aria-components';
import { renderLinks } from './navigation';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between p-4 md:hidden">
      <div>
        <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button className="p-2 focus:outline-none">
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          <Modal>
            <Dialog className="fixed inset-0 z-50 flex">
              <div
                className="absolute inset-0 bg-slate-800 bg-opacity-50"
                onClick={() => setIsOpen(false)}
              />

              <div className="relative bg-slate-200 w-64 h-full shadow-xl p-4 animate-slide-in-left z-10 ml-auto">
                <div className="flex justify-between items-center mb-4">
                  <Heading slot="title" className="font-semibold text-xl">Menu</Heading>
                  <Button
                    className="p-1 hover:bg-gray-100 rounded"
                    onPress={() => setIsOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>

                <nav className="flex flex-col py-4 space-y-8 list-none text-lg">
                  {renderLinks}
                </nav>
              </div>
            </Dialog>
          </Modal>
        </DialogTrigger>
      </div>
    </nav>
  );
}