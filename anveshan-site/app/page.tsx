import type { Metadata } from 'next';

import HomePage from '@/components/site/pages/home-page';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'Explore the Anveshan platform for digital forensics, UAV telemetry extraction, multimedia analysis, and investigation workflows.',
};

export default function Page() {
  return <HomePage />;
}
