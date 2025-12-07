import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tsplugin from '@typescript-eslint/eslint-plugin'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import path from 'path'
import tseslint from 'typescript-eslint'
import { URL } from 'url'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('eslint').Linter.FlatConfigArray} */
export default [
  {
    ignores: [
      '**/dist/**',
      'node_modules',
      '**/.next/**',
      'build',
      'client/public',

      // Добавляем, чтобы ESLint НЕ ТРОГАЛ конфиги Next/Tailwind
      'next.config.js',
      'next.config.mjs',
      'tailwind.config.js',
      'postcss.config.js',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs'
    ]
  },

  // Base JS + TS recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Common plugins and rules for all packages
  {
    ...prettierConfig,
    plugins: {
      ...prettierConfig,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: importPlugin
    },
    rules: {
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },

  // Frontend override (client folder, Next.js + React + Next plugin)
  {
    files: ['client/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, './client/tsconfig.json'),
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      next: nextPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    ...react.configs.recommended,
    ...reactHooks.configs.recommended,
    ...jsxA11y.configs.recommended,
    rules: {
      'react/react-in-jsx-scope': 'off',

      // next/core-web-vitals manual rules:
      'next/next-script-for-ga': 'error',
      'next/no-before-interactive-script-outside-document': 'error',
      'next/no-html-link-for-pages': ['error', 'src/pages'],
      'next/no-img-element': 'warn',
      'next/no-script-component-in-head': 'error',
      'next/no-sync-scripts': 'error'
    }
  },

  // Backend override (server folder, NestJS)
  {
    files: ['server/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, './server/tsconfig.json'),
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': tsplugin
    },
    rules: {
      ...tsplugin.configs['recommended-requiring-type-checking'].rules,

      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },

  // Shared packages override (optional)
  {
    files: ['packages/**/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './packages/*/tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname
      }
    }
  }
]
