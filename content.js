//TODO SPAなどの未対応分
window.onload = function() {
  const before_words = ['マック','マクド'].join('|');
  const replace_words = 'マクナル';

  const body = document.getElementsByTagName('body')[0];

  let r = body.innerHTML.replace(
    new RegExp(`(?<=>)[^<>]*?(${before_words})[^<>]*?(?=<)`,'gi'), // https://mo2nabe.com/html-str-change-notag/
    function(){
      return arguments[0].replace(
        new RegExp(`(${before_words})`,'gi'),
        replace_words
      );
    }
  );

  r = r.replaceAll('マクナルナルド', 'マクドナルド');
  body.innerHTML = r;
};
