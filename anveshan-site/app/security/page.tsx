import type { Metadata } from 'next';

import SecurityPage from '@/components/site/pages/security-page';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Understand the security posture behind Anveshan, including evidentiary integrity, cryptographic custody, and zero-trust operations.',
};

export default function Page() {
  return <SecurityPage />;
}
