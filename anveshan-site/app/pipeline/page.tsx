import type { Metadata } from 'next';

import PipelinePage from '@/components/site/pages/pipeline-page';

export const metadata: Metadata = {
  title: 'Pipeline',
  description:
    'Review the Anveshan investigation pipeline from acquisition and processing through analysis and court-ready reporting.',
};

export default function Page() {
  return <PipelinePage />;
}
