import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { DEV_BASE_WEB_URI } from 'services/settings';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.background = '#000000';
    router.replace(`${DEV_BASE_WEB_URI}/login`);
  }, [router]);

  return <></>;
}
