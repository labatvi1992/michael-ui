'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ConfigProvider, theme } from 'michael-ui';

export interface ThemeState {
  isDark: boolean;
  isCompact: boolean;
  colorPrimary: string;
  borderRadius: number;
}

interface ThemeContextValue {
  themeState: ThemeState;
  setIsDark: (val: boolean) => void;
  setIsCompact: (val: boolean) => void;
  setColorPrimary: (val: string) => void;
  setBorderRadius: (val: number) => void;
  resetTheme: () => void;
}

const defaultThemeState: ThemeState = {
  isDark: false,
  isCompact: false,
  colorPrimary: '#1677ff',
  borderRadius: 6,
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useDocsTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDocsTheme must be used within a DocsThemeProvider');
  }
  return context;
}

export function DocsThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeState, setThemeState] = useState<ThemeState>(defaultThemeState);

  // Sync dark mode class to html element for Fumadocs
  useEffect(() => {
    if (themeState.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeState.isDark]);

  const value = useMemo<ThemeContextValue>(() => ({
    themeState,
    setIsDark: (isDark) => setThemeState((prev) => ({ ...prev, isDark })),
    setIsCompact: (isCompact) => setThemeState((prev) => ({ ...prev, isCompact })),
    setColorPrimary: (colorPrimary) => setThemeState((prev) => ({ ...prev, colorPrimary })),
    setBorderRadius: (borderRadius) => setThemeState((prev) => ({ ...prev, borderRadius })),
    resetTheme: () => setThemeState(defaultThemeState),
  }), [themeState]);

  const antdThemeConfig = useMemo(() => {
    const algorithms = [];
    if (themeState.isDark) {
      algorithms.push(theme.darkAlgorithm);
    }
    if (themeState.isCompact) {
      algorithms.push(theme.compactAlgorithm);
    }

    return {
      algorithm: algorithms.length > 0 ? algorithms : theme.defaultAlgorithm,
      token: {
        colorPrimary: themeState.colorPrimary,
        borderRadius: themeState.borderRadius,
      },
    };
  }, [themeState]);

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider theme={antdThemeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
