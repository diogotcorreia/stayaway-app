/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import colors, { lightColors, darkColors } from './colors';
import sizes from './sizes';
import fontSizes from './fontSizes';
import iconSizes from './iconSizes';
import lineHeights from './lineHeights';
import fontWeights from './fontWeights';

export const LIGHT = 'light';
export const DARK = 'dark';
export const AUTO = 'auto';

const themes = {
  names: {
    light: LIGHT,
    dark: DARK,
    auto: AUTO,
  },
  [LIGHT]: {
    colors: lightColors,
  },
  [DARK]: {
    colors: darkColors,
  },
};

export default {
  ...colors,
  ...sizes,
  ...fontSizes,
};

export {themes, colors, sizes, fontSizes, iconSizes, lineHeights, fontWeights};
