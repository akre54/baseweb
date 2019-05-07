/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {LayersManager} from '../layer/index.js';
import {ThemeProvider} from '../styles/index.js';
import type {ThemeT} from '../styles/types.js';

const BaseProvider = (props: {children: ?React.Node, theme: ThemeT}) => {
  const {children, theme} = props;
  return (
    <LayersManager>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayersManager>
  );
};

export default BaseProvider;