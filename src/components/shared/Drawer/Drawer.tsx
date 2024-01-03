'use client';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { AnimatePresence, motion } from 'framer-motion';
import CloseButton from '../CloseButton';
import VisuallyHidden from '../VisuallyHidden';
import { allowBodyScroll, drawerVariants, preventBodyScroll } from './Drawer.helpers';
import useAcessibilityDrawerActions from './Drawer.hooks';
import styles from './Drawer.module.css';
import { IDrawerProps } from './Drawer.types';

const Drawer = ({ children, onClose, isOpen = false, titleHeader = '' }: IDrawerProps) => {
  const drawerRef = React.useRef<HTMLDivElement>(null);
  useAcessibilityDrawerActions(onClose, drawerRef);

  useEffect(() => {
    const allowScroll = () => {
      if (isOpen) {
        return preventBodyScroll();
      }

      return allowBodyScroll();
    };

    allowScroll();
  }, [isOpen]);

  return (
    <>
      {createPortal(
        <FocusLock>
          <AnimatePresence>
            {isOpen && (
              <dialog open={isOpen} className={styles.overlay}>
                <aside className={styles.wrapper}>
                  <motion.section
                    variants={drawerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    ref={drawerRef}
                    id="drawer"
                    className={styles.drawer}
                  >
                    <header className={styles.header}>
                      <div>{titleHeader}</div>
                      <CloseButton onClose={onClose}>
                        <VisuallyHidden>Fechar Modal</VisuallyHidden>
                      </CloseButton>
                    </header>
                    <div className={styles.content}>{children}</div>
                  </motion.section>
                </aside>
              </dialog>
            )}
          </AnimatePresence>
        </FocusLock>,
        document.body
      )}
    </>
  );
};

export default Drawer;
