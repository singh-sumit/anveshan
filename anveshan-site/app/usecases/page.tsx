import type { Metadata } from 'next';

import UsecasesPage from '@/components/site/pages/usecases-page';

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Review real-world Anveshan deployment scenarios across incident response, UAV investigations, e-discovery, and multimedia analysis.',
};

export default function Page() {
  return <UsecasesPage />;
}
