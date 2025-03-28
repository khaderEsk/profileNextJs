import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

// الحصول على مسار المجلد الحالي (لتوافق مع نظام الوحدات ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// تهيئة المحول للتكوينات التقليدية
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    // إعدادات موصى بها للتحويل
    jsx: true,
    typescript: true,
  },
});

// التكوين الأساسي لـ ESLint
const eslintConfig = [
  // تحويل التكوينات التقليدية إلى Flat Config
  ...compat.extends(
    'next/core-web-vitals',        // قواعد Next.js الأساسية
    'next/typescript'             // دعم TypeScript في Next.js
  ),
  
  // يمكنك إضافة قواعد مخصصة هنا
  {
    rules: {
      // مثال على قواعد مخصصة
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];

export default eslintConfig;