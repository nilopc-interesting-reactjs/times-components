/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

//package com.facebook.react.views.text;
package uk.co.news.rnttext;

import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Manages raw text nodes. Since they are used only as a virtual nodes any type of native view
 * operation will throw an {@link IllegalStateException}
 */
@ReactModule(name = ReactRawTextTweakManager.REACT_CLASS)
public class ReactRawTextTweakManager extends ReactTextTweakViewManager {

  @VisibleForTesting
  public static final String REACT_CLASS = "RCTRawTextTweak";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public ReactTextView createViewInstance(ThemedReactContext context) {
    throw new IllegalStateException("RKRawTextTweak doesn't map into a native view");
  }

  @Override
  public void updateExtraData(ReactTextView view, Object extraData) {
  }

  @Override
  public ReactTextShadowNode createShadowNodeInstance() {
    return new ReactVirtualTextShadowNode();
  }
}
