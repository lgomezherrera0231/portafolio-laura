// Page data extracted from the Canva design (1351 x 770 design pixels per page).
// Every element keeps its original position, size and rotation.

type Opt = Record<string, unknown>;
export type El = {
  t: 'img' | 'txt' | 'btn' | 'fill' | 'frame' | 'video';
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  [k: string]: any;
};
export type Page = {
  slug: string;
  title: string;
  bg: string;
  /** Decorative stickers (hidden on mobile unless `m` pins them to a corner). */
  deco: El[];
  /** Content in reading order; each group becomes one block on mobile. */
  groups: El[][];
};

const S = 0.98902; // Canva preview scale for "fixed size" text
const S7 = 0.7033;
const S8 = 0.70812;
const BLUE = '#c2e1ff';
const PINK = '#fac2c5';

const I = (src: string, x: number, y: number, w: number, h: number, o: Opt = {}): El => ({
  t: 'img', src: `/assets/${src}`, x, y, w, h, alt: '', ...o,
});
const T = (html: string, x: number, y: number, w: number, h: number, fs: number, lh: number, sc: number, o: Opt = {}): El => ({
  t: 'txt', html, x, y, w, h, fs, lh, sc, fw: 400, ta: 'center', c: '#000', ...o,
});
const B = (label: string, href: string, x: number, y: number, w: number, h: number, o: Opt = {}): El => ({
  t: 'btn', label, href, x, y, w, h, fs: 18.67, sc: S, bg: BLUE, ...o,
});
const V = (src: string, x: number, y: number, w: number, h: number): El => ({
  t: 'video', src: `https://www.youtube-nocookie.com/embed/${src}`, x, y, w, h,
});
// Sample cards: pink fill + black outline
const card = (x: number, y: number): El[] => [
  { t: 'fill', x, y, w: 295.63, h: 278.21, bg: PINK },
  { t: 'frame', x: x + 7.83, y: y + 12.06, w: 278.82, h: 252.51, bw: 4.52 },
];
const cardTitle = (html: string, x: number, y: number, w = 245.21, o: Opt = {}) =>
  T(html, x, y, w, 31.53, 37.33, 52, S8, { fw: 700, ty: -3.73, ...o });
const more = (href: string, x: number, y: number) => B('More info', href, x, y, 219.28, 51.88);
const label = (html: string, x: number, y: number, w = 213.05, h = 31.32) =>
  T(html, x, y, w, h, 37.33, 52, S7, { ty: -3.73 });

const gdoc = (id: string, q = 'usp=drive_link') =>
  `https://docs.google.com/document/d/${id}/edit?${q}&ouid=111416967843601787399&rtpof=true&sd=true`;
const gfolder = (id: string, q = 'usp=drive_link') => `https://drive.google.com/drive/folders/${id}?${q}`;

const butterflies = [
  I('butterfly-1.png', 1234.85, 64.39, 177.11, 247.24, { r: -19.85, m: 'tr' }),
  I('butterfly-2.png', -68.98, 167.69, 199.85, 199.48, { r: -92.37 }),
];

// YouTube IDs of the AVT samples, in page order
const YT = ['Jc0EXFocbZI', 'Csct80XPqe0', '1lVL_IfXyZQ', 't_oCaBJ8c8s'];
const avt = (n: number, video: [number, number, number, number], titleY: number, sub: El): Page => ({
  slug: `avt-sample-${n}`,
  title: 'AVT sample',
  bg: PINK,
  deco: [I('smiley-yellow.png', 1192.88, -30.23, 168.26, 167.65, { r: -15.78, m: 'tr' })],
  groups: [
    [
      T('Audiovisual translation samples', 199.34, titleY, 952.33, 71.74, 85.33, 102, S7, { fw: 600 }),
      sub,
      V(YT[n - 1], ...video),
    ],
  ],
});
const AMARA = 'Volunteer EN&lt;&gt;SP translation and subtiling<br>for Amara made using the Aegisub software.';
const avtSub = (html: string, x: number, y: number, w = 625.69) =>
  T(html, x, y, w, 71.52, 28.44, 39, S, { fw: 300, ty: -2.84 });

export const pages: Page[] = [
  {
    slug: '',
    title: 'Home',
    bg: '#f7ca66',
    deco: [
      I('notebook-label.png', 258.93, 82.4, 833.13, 615.64, { r: -5.79 }),
      I('rainbow.png', 1109.03, 551.7, 291.43, 160.61, { m: 'br' }),
      I('flower-blue.png', 1141.16, 0, 259.31, 288.12, { m: 'tr' }),
      I('smiley-white.png', 627.91, 571.93, 171.29, 170.67, { r: -5.51 }),
      I('flower-sculpture.png', 154.75, 90.92, 166.96, 173.32),
      I('taped-flowers.png', -21.4, 422.03, 270.6, 413.16, { r: 24.08 }),
    ],
    groups: [
      [
        T('Laura Gómez', 368.87, 241.47, 613.26, 80.88, 96, 115, S7, { fw: 700, r: -6.08, up: 1, h1: 1 }),
        T('English &lt;&gt; Spanish (LATAM) Translator', 432.74, 322.27, 485.52, 29.15, 69.33, 83, 0.35118, { r: -6.08 }),
        T('Specialized translation, general translation,<br>literary translation and audiovisual translation.', 402.62, 393.72, 545.77, 53.41, 23.29, 27, S, { r: -6.08 }),
        B('Services', '#services', 432.26, 489.91, 240.71, 58.76, { r: -6.12, bg: '#99add0' }),
        B('Contact', '#contact', 705.57, 462.72, 241.69, 55.87, { r: -5.93, bg: '#99add0' }),
      ],
    ],
  },
  {
    slug: 'about',
    title: 'About me',
    bg: '#f063a0',
    deco: [
      I('cloud.svg', 76.29, 80.88, 212.18, 149.57),
      I('sun.png', 1085.31, -16.62, 237.74, 242.14, { m: 'tr' }),
      I('flower-pink.png', 1071.96, 505.18, 131.53, 130.33, { r: -9.71 }),
      I('star.png', 88.39, 515.47, 165.92, 112.01, { r: 15.78 }),
    ],
    groups: [
      [
        T('About me', 289.09, 91.31, 772.81, 90.02, 106.67, 128, S7, { fw: 600, c: '#fff', h1: 1 }),
        T(
          'I have experience in subtitling and translating technical, literary, administrative, and marketing texts. I’ve been a volunteer translator for over 2 years, and now I’m ready to make a living out of this beatiful industry!',
          301.72, 199.06, 747.56, 371.29, 55.4, 77, S7, { fw: 300, c: '#fff', ta: 'justify', ty: -5.54 },
        ),
        B('CV', gdoc('1Tpxa8GY6I3Ae00-enrJQDlefPL_hRYc5', 'usp=sharing'), 512.53, 611.89, 303.26, 67.58, { fs: 26.67 }),
      ],
    ],
  },
  {
    slug: 'services',
    title: 'Services',
    bg: '#97d873',
    deco: butterflies,
    groups: [
      [T('Services', 152.85, 48.29, 1045.28, 77.36, 91.67, 110, S7, { fw: 600, h1: 1 })],
      [I('closed-caption.png', 223.71, 219.75, 211.24, 153.15), label('Subtitling', 223.71, 398.58)],
      [I('translation-icon.png', 581.07, 209.88, 169.82, 163.02), label('Translation', 568.97, 398.58)],
      [I('transcription.png', 949.48, 181.04, 166.92, 191.86), label('Transcription', 926.42, 398.58)],
      [I('editing.png', 583.63, 478.66, 183.72, 188.44), label('Editing &amp; proofreading', 513.53, 688.73, 323.94)],
    ],
  },
  {
    slug: 'translation-samples',
    title: 'Translation Samples',
    bg: '#f7ca66',
    deco: [],
    groups: [
      [T('Translation samples', 402.23, 35.95, 546.54, 66.87, 56.93, 79, S, { fw: 700, ty: -5.69, h1: 1 })],
      [
        ...card(50.33, 129.95),
        cardTitle('Medical texts', 111.06, 162.45, 173.03),
        T('EN &lt;&gt; SP translation of a myositis case report.', 75.54, 228.64, 245.21, 81.89, 21, 29, S, { ta: 'justify', ty: -2.1 }),
        more(gdoc('178Yeod8JnaUtKfbm5FyJej0ZyUlEWd2d', 'usp=sharing'), 87.94, 321.8),
      ],
      [
        ...card(379.87, 129.95),
        cardTitle('Technical texts', 398.43, 152.95, 258.52),
        T('EN &lt;&gt; SP translation of an Amazon’s technical case study about machine learning.', 405.08, 194.69, 245.21, 141.01, 29.33, 41, S8, { ta: 'justify', ty: -2.93 }),
        more(gdoc('1KyrYUfCbh-xhxnDbOz_slLsumBo5hNrz'), 417.48, 327.99),
      ],
      [
        ...card(709.13, 129.95),
        T('Marketing texts', 727.68, 149.82, 258.52, 27.88, 24.06, 33, S, { fw: 700, ty: -2.41 }),
        T('EN &lt;&gt; SP translation of website fragments advertising a university, a medical center, and personal services.', 734.72, 177.7, 245.21, 170.04, 29.33, 41, S8, { ta: 'justify', ty: -2.93 }),
        more(gfolder('1D2APtaDYwLvUN9_AsqlP4ec2CZs9s4fy'), 747.7, 332.07),
      ],
      [
        ...card(1038.38, 129.95),
        cardTitle('Financial texts', 1064.09, 158.16),
        T('EN &lt;&gt; SP translation of Tesco’s 2023 annual report and financial statement, and a tender report of a pitched roofing programme in Southampton, England.', 1063.27, 192.54, 244.7, 161.4, 17.07, 23, S, { ta: 'justify', ty: -1.71 }),
        more(gfolder('1gBoLsW6GlFKGKV-Ec8qv51M1t-no8hT2', 'usp=sharing'), 1077.06, 331.95),
      ],
      [
        ...card(379.87, 434.87),
        cardTitle('Literary texts', 405.59, 463.08),
        T(
          '<ul><li>EN &lt;&gt; SP translation of “Love<br>of my Days” by Louise<br>Erdrich, published by The<br>New Yorker.</li><li>Inverse translation of two of<br>Gabriela Mistral’s poems.</li></ul>',
          397.58, 498.04, 259.07, 154.62, 16.26, 22, S, { ta: 'left', ty: -1.63 },
        ),
        more(gfolder('12mJsXr37lHWpKq35pGuZugtaFVSu7xjx'), 418.56, 635.77),
      ],
      [
        ...card(709.41, 434.87),
        cardTitle('Inverse translations', 725.68, 455.39, 263.09),
        T(
          '<ul><li>Two portfolios containing all my Spanish → English translations.</li><li>Topics: general topics, techinal topics, science, medicine, law, literature, academic texts, argumentative texts, tourism, news, etc.</li></ul>',
          722.18, 494.62, 268.95, 160.82, 14.93, 20, S, { ta: 'justify', ty: -1.49 },
        ),
        more(gdoc('12MOBKjpbJqA77Z93YCb1O_DdY4qCjaR0'), 747.7, 635.77),
      ],
    ],
  },
  {
    slug: 'volunteer-work',
    title: 'Volunteer work',
    bg: PINK,
    deco: [
      I('smiley-yellow.png', 1210.13, -25.97, 204.6, 203.86, { r: -15.78, m: 'tr' }),
      I('rainbow.png', -99.58, 41.82, 291.43, 160.61),
    ],
    groups: [
      [T('Volunteering', 217.22, 91.08, 959.39, 67.52, 80, 96, S7, { fw: 600, h1: 1 })],
      [
        I('ted.png', 217.22, 238.9, 326.82, 326.82, { href: 'https://www.ted.com/profiles/46825449/translator', alt: 'TED' }),
        T('Check my TED<br>Translators’<br>profile', 252.51, 593.69, 256.26, 125.65, 37.33, 52, 0.84593, { ty: -3.73 }),
      ],
      [
        I('amara.png', 840.53, 238.9, 326.82, 326.82, { href: 'https://amara.org/profiles/account/', alt: 'Amara' }),
        T('Check my Amara<br>Subtitling and<br>Translation’s profile', 831.27, 593.69, 345.34, 125.65, 37.33, 52, 0.84593, { ty: -3.73 }),
      ],
    ],
  },
  avt(1, [237.97, 196.31, 875.07, 490.12], 30.97, avtSub(AMARA, 362.66, 113.86)),
  avt(2, [230.69, 203.9, 889.61, 498.27], 31.45, avtSub(AMARA, 362.66, 117.79)),
  avt(3, [230.22, 217.5, 890.56, 498.8], 32.04, avtSub(AMARA, 327.28, 124.88)),
  avt(4, [230.22, 217.5, 890.56, 498.8], 32.04,
    avtSub('EN&lt;&gt;SP transcription, translation, and subtitling made<br>using the Aegisub software.', 327.28, 124.88, 747.82)),
  {
    slug: 'technical-tools',
    title: 'Technical Tools',
    bg: '#97d873',
    deco: butterflies,
    groups: [
      [T('Technical tools', 152.86, 81.32, 1045.28, 77.36, 91.67, 110, S7, { fw: 600, h1: 1 })],
      [I('memoq.png', 363.3, 219.86, 119.48, 119.48, { alt: 'MemoQ' }), label('MemoQ', 315.8, 365.93)],
      [I('smartcat.png', 622.93, 219.86, 128.19, 128.19, { alt: 'Smartcat' }), label('Smartcat', 584.14, 365.93)],
      [I('antconc.png', 883.81, 219.86, 138.76, 138.76, { alt: 'AntConc' }), label('AntConc', 852.47, 365.93)],
      [
        I('trados.png', 211.14, 467.52, 139.01, 132.56, { alt: 'SDL Trados Studio', in: [139.01, 139.01, 0, -6.46] }),
        label('SDL Trados<br>Studio', 174.12, 621.08, 213.05, 67.89),
      ],
      [I('omnipage.png', 474.65, 474.06, 119.48, 119.48, { alt: 'OmniPage' }), label('OmniPage', 427.15, 618.53)],
      [I('gimp.png', 739, 467.52, 126.02, 126.02, { alt: 'GIMP' }), label('GIMP', 695.49, 618.45)],
      [I('aegisub.png', 1006.78, 472.94, 127.14, 127.14, { alt: 'Aegisub' }), label('Aegisub', 963.82, 621.08)],
    ],
  },
  {
    slug: 'contact',
    title: 'Contact info',
    bg: '#f7ca66',
    deco: [
      I('notebook-label.png', 258.93, 78.4, 833.13, 615.64, { r: -5.79 }),
      I('shooting-star.png', 943.35, 359.52, 331.36, 200.58),
      I('rainbow.png', 1109.03, 551.7, 291.43, 160.61, { m: 'br' }),
      I('flower-blue.png', 1109.03, -44.22, 268.22, 298.02, { m: 'tr' }),
      I('smiley-white.png', 627.91, 567.93, 171.29, 170.67, { r: -5.51 }),
      I('flower-sculpture.png', 229.99, 104.59, 166.96, 173.32),
      I('white-rabbit.png', 133.59, 386.22, 192.79, 303.83),
    ],
    groups: [
      [
        T('Reach out!', 368.87, 237.47, 613.26, 80.88, 96, 115, S7, { fw: 700, r: -6.08, up: 1, h1: 1 }),
        T('Time zone: GMT-3', 432.74, 318.27, 485.52, 29.15, 69.33, 83, 0.35118, { r: -6.08 }),
      ],
      [
        I('linkedin.png', 531.93, 398.6, 68.32, 58.26, { r: -5.15, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-g%C3%B3mez-herrera-6aa093269', icon: 1 }),
        I('email.png', 649.06, 390.3, 79.63, 56.61, { r: -6.12, alt: 'Email', href: 'mailto:lgomezherrera0231@gmail.com', icon: 1 }),
        I('proz.png', 775.58, 371.78, 62.85, 62.85, { r: -1.03, alt: 'ProZ', href: 'https://www.proz.com/profile/4395773', icon: 1 }),
      ],
    ],
  },
];

export const nav = pages.map((p) => ({ href: `#${p.slug || 'home'}`, title: p.title }));
