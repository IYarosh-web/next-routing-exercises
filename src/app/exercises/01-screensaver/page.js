import React from 'react';

import ScreenSaver from '../../../components/ScreenSaver';
import { COLORS } from './namedColors';
import Link from 'next/link';

function ScreenSaverExercise() {
  return (
    <main>
      <ol>
        {COLORS.map(color => (
          <li>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

export default ScreenSaverExercise;
