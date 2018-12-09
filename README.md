# twemoji-emojionearea-adapter

use awesome [emojionearea](https://github.com/mervick/emojionearea) with awesome [twemoji](https://github.com/twitter/twemoji) icons


### html
```html

<script src="twemoji-emojionearea-adapter.js"></script>

```
###javascript
```javascript
var emojiableOnElement = function(el, options) {
  $(el).emojioneArea({
    imageType        : "svg",
    useInternalCDN   : false,
    sprite           : false,
    tones            : false,
    shortnames       : true,
    saveEmojisAs     : "unicode",
    pickerPosition   : "bottom",
    autocomplete     : true,
    autocompleteTones: false,
    textcomplete     : {
      maxCount: 8
    },
    events: {
      keyup: function(editor, e) {
        var form, key;
        key = e.which || e.keyCode || 0;
        if (options && options.shortcutSubmitForm && key === 13 && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          form = options.shortcutSubmitForm === true ? editor.closest('form') : $(options.shortcutSubmitForm);
          el.val(el.data('emojioneArea').getText());
          return form.submit();
        }
      },
      ready: function() {}
    }
  });
}
```