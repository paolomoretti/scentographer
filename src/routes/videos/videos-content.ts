export interface VideoContent {
  index: number;
  name: string;
  cover: string;
  src: string;
  description: string;
  year: number;
  sounds: string;
  pictures: string;
}

export default <Array<VideoContent>>[
  {
    index: 3,
    name: 'Sulphur',
    cover: 'https://i.ytimg.com/vi_webp/VmD_VdVaKVI/maxresdefault.webp',
    src: 'https://www.youtube.com/embed/VmD_VdVaKVI?rel=0&showinfo=0&autohide=1&modestbranding=1&rel=0&autoplay=0&vq=hd1080',
    description: `-------description-----`,
    year: 0,
    sounds: '--sounds--',
    pictures: '--pictures--'
  },
  {
    index: 2,
    name: 'Popcorn',
    cover: 'https://i.ytimg.com/vi_webp/7pZMkm3SoPU/maxresdefault.webp',
    src: 'https://www.youtube.com/embed/7pZMkm3SoPU?rel=0&showinfo=0&autohide=1&modestbranding=1&rel=0&autoplay=0&vq=hd1080',
    description: `-------description-----`,
    year: 0,
    sounds: '--sounds--',
    pictures: '--pictures--'
  },
  {
    index: 1,
    name: 'Eucalyptus and Mildstew',
    cover: 'https://i.ytimg.com/vi_webp/_DAjgsbO0KQ/maxresdefault.webp',
    src: 'https://www.youtube.com/embed/_DAjgsbO0KQ?rel=0&showinfo=0&autohide=1&modestbranding=1&rel=0&autoplay=0&vq=hd1080',
    description: `-------description-----`,
    year: 0,
    sounds: '--sounds--',
    pictures: '--pictures--'
  },
  {
    index: 0,
    name: 'Salty Wood and Carbon Steel',
    cover: 'https://i.ytimg.com/vi_webp/1_M3M83C-B8/maxresdefault.webp',
    src: 'https://www.youtube.com/embed/1_M3M83C-B8?rel=0&showinfo=0&autohide=1&modestbranding=1&rel=0&autoplay=0&vq=hd1080',
    description: `In the land where water takes all different forms, from ice to snow, from hotspring to rain, from ocean to single drops, the sulphur smell was recorded in an epic exploration of remote areas in Iceland.

Black and white imagery alternate to colored shots and sounds are filtered with resonators to empathize the reverbered nature of this island.`,
    year: 2017,
    sounds: 'recorded with zoom H1, processed with Ableton Live.',
    pictures: 'shot with Nikon D610'
  }
];