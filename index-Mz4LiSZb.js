const text = await Promise.all([
  fetch("./bundle-1.txt").then((response) => response.text()),
  ...[2, 3, 4, 5, 6, 7, 8, 9].map((part) =>
    fetch(`./bundle-${part}.txt`).then((response) => response.text()).then((value) =>
      new TextDecoder().decode(Uint8Array.from(atob(value), (character) => character.charCodeAt(0)))
    )
  ),
]);
(0, eval)(text.join(""));
