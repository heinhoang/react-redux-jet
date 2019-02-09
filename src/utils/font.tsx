import FontFaceObserver from 'fontfaceobserver';

export default function loadFont(fontName = 'OPen Sans', fontOptions = {}) {
  const openSansObserver = new FontFaceObserver(fontName, fontOptions);

  openSansObserver.load().then(
    () => {
        document.body.classList.add('fontLoaded');
    },
    () => {
        document.body.classList.remove('fontLoaded');
    }
  );
}
