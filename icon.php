<?php
$icon = isset($_GET['i']) ? $_GET['i'] : 'default';
$text = isset($_GET['t']) ? $_GET['t'] : 'Donate me';

function createSVG($icon, $text) {
  $length = strlen($text);
  $width = 44;
  if ($length == 0) {
    $width = 44;
  }
  else if ($length == 1) {
    $width = 44 + ($length * 20);
  }
  else if ($length == 2) {
    $width = 44 + ($length * 16);
  }
  else if ($length == 3) {
    $width = 44 + ($length * 12);
  }
  else if ($length == 4) {
    $width = 44 + ($length * 13);
  }
  else if ($length == 5) {
    $width = 44 + ($length * 12);
  }
  else if ($length >= 6 && $length <= 10) {
    $width = 44 + ($length * 9);
  }
  else if ($length >= 10 && $length <= 20) {
    $width = 44 + ($length * 7.5);
  }
  else if ($length >= 20 && $length <= 35) {
    $width = 44 + ($length * 7.3);
  }
  else if ($length >= 35 && $length <= 50) {
    $width = 44 + ($length * 7.2);
  }
  else {
    $width = 44;
  }

  if ($icon === "default") {
    return '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" height="30" width="' . $width . 'px" fill="none" xmlns:v="https://vecta.io/nano"><rect width="100%" height="100%" rx="7" ry="7" x="0" y="0" fill="#e41a55"/><path d="M18.34 14.34L7.82 3.56c.03-.03.06-.07.09-.1l1.98.15 6.48.63 4.82.47c.41.04.51.13.4.46l-1.91 5.52-1.14 3.29c-.03.1-.1.19-.2.38zm14.08 1.73h-.56l-9.2-1.17-3.05-.37c-.7-.09-.72-.1-.53-.64l2.93-8.49c.06-.18.15-.35.28-.62l10.14 11.29zm-.67.57L20.7 21.05l-1.78-6.2 12.81 1.63c0 .05.01.11.02.16zM14.17 26.5l4.11-11.58h.17l.43 1.43 1.6 5.78c.07.26.03.42-.24.59l-5.62 3.67c-.1.06-.22.1-.33.15-.04-.02-.08-.03-.11-.05zm14.66-14.99l6.73-.96L33 16.13l-4.17-4.62zm-6.3 9.22l9.82-3.99c.09.62-.2 1.06-.8 1.25l-8.6 2.76c-.12.04-.24.05-.37.08-.02-.03-.03-.07-.05-.1zm16.1-7.85h-3.69l.98-2.13 2.71 2.13zM13.1 9.75L7.39 5.44c.75-.3 1.56-.17 1.99.27l3.56 3.65c.1.1.19.21.28.32-.04.03-.08.05-.12.08z" fill="#fff" stroke="#e31b56" stroke-miterlimit="10" stroke-width=".25"/><text dx="0" dy="0" font-family="&quot;Helvetica Neue, Helvetica, Arial, sans-serif&quot;" font-size="14" font-weight="700" transform="translate(47.374535 20.033816)" fill="#fff"><tspan font-family="&quot;Helvetica Neue, Helvetica, Arial, sans-serif&quot;" font-size="14" font-weight="700" font-style="normal" transform="translate(100 20)" fill="#fff"><![CDATA[' . $text . ']]></tspan></text></svg>';
  }
  else if ($icon === "bkash") {
    return '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" height="30" width="' . $width . 'px" fill="none" xmlns:v="https://vecta.io/nano"><rect width="100%" height="100%" rx="7" ry="7" x="0" y="0" fill="#e41a55"/><path d="M18.34 14.34L7.82 3.56c.03-.03.06-.07.09-.1l1.98.15 6.48.63 4.82.47c.41.04.51.13.4.46l-1.91 5.52-1.14 3.29c-.03.1-.1.19-.2.38zm14.08 1.73h-.56l-9.2-1.17-3.05-.37c-.7-.09-.72-.1-.53-.64l2.93-8.49c.06-.18.15-.35.28-.62l10.14 11.29zm-.67.57L20.7 21.05l-1.78-6.2 12.81 1.63c0 .05.01.11.02.16zM14.17 26.5l4.11-11.58h.17l.43 1.43 1.6 5.78c.07.26.03.42-.24.59l-5.62 3.67c-.1.06-.22.1-.33.15-.04-.02-.08-.03-.11-.05zm14.66-14.99l6.73-.96L33 16.13l-4.17-4.62zm-6.3 9.22l9.82-3.99c.09.62-.2 1.06-.8 1.25l-8.6 2.76c-.12.04-.24.05-.37.08-.02-.03-.03-.07-.05-.1zm16.1-7.85h-3.69l.98-2.13 2.71 2.13zM13.1 9.75L7.39 5.44c.75-.3 1.56-.17 1.99.27l3.56 3.65c.1.1.19.21.28.32-.04.03-.08.05-.12.08z" fill="#fff" stroke="#e31b56" stroke-miterlimit="10" stroke-width=".25"/><text dx="0" dy="0" font-family="&quot;Helvetica Neue, Helvetica, Arial, sans-serif&quot;" font-size="14" font-weight="700" transform="translate(47.374535 20.033816)" fill="#fff"><tspan font-family="&quot;Helvetica Neue, Helvetica, Arial, sans-serif&quot;" font-size="14" font-weight="700" font-style="normal" transform="translate(100 20)" fill="#fff"><![CDATA[' . $text . ']]></tspan></text></svg>';
  }
}

$svgContent = createSVG($icon, $text);

header('Content-Type: image/svg+xml');

echo $svgContent;
?>