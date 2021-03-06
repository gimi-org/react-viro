
/**
 * Copyright (c) 2016-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViroTextStylePropTypes
 * @flow
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

var ColorPropType = require('react-native').ColorPropType;
var ViroStylePropTypes = require('./ViroPropTypes');

var ViroTextStylePropTypes =  Object.assign(Object.create(ViroStylePropTypes), {
  color: ColorPropType,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,

  /**
   * Specifies text alignment.
   */
  textAlign: PropTypes.oneOf(
    [ 'left'/*default*/, 'right', 'center']
  ),

  textAlignVertical: PropTypes.oneOf(
    ['top' /*default*/, 'bottom', 'center']
  ),

  textClipMode: PropTypes.oneOf(['none', 'clipToBounds']),
  textLineBreakMode: PropTypes.oneOf(['wordwrap','charwrap','justify','none'])
});

module.exports = ViroTextStylePropTypes;
