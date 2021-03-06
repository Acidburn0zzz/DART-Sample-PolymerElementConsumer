/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is goverened by a BSD-style
 * license that can be found in the LICENSE file.
 */

suite('Range', function() {

  var wrap = ShadowDOMPolyfill.wrap;

  test('instanceof', function() {
    var range = document.createRange();
    assert.instanceOf(range, Range);

    var range2 = wrap(document).createRange();
    assert.instanceOf(range2, Range);
  });

  test('createContextualFragment', function() {
    // IE9 does not support createContextualFragment.
    if (!Range.prototype.createContextualFragment)
      return;

    var range = document.createRange();
    var container = document.body || document.head;

    range.selectNode(container);

    var fragment = range.createContextualFragment('<b></b>');

    assert.instanceOf(fragment, DocumentFragment);
    assert.equal(fragment.firstChild.localName, 'b');
    assert.equal(fragment.childNodes.length, 1);
  });

  test('WebIDL attributes', function() {
    var range = document.createRange();

    assert.isTrue('collapsed' in range);
    assert.isFalse(range.hasOwnProperty('collapsed'));

    assert.isTrue('commonAncestorContainer' in range);
    assert.isFalse(range.hasOwnProperty('commonAncestorContainer'));

    assert.isTrue('endContainer' in range);
    assert.isFalse(range.hasOwnProperty('endContainer'));

    assert.isTrue('endOffset' in range);
    assert.isFalse(range.hasOwnProperty('endOffset'));

    assert.isTrue('startContainer' in range);
    assert.isFalse(range.hasOwnProperty('startContainer'));

    assert.isTrue('startOffset' in range);
    assert.isFalse(range.hasOwnProperty('startOffset'));
  });

});
