import Headset1 from "../assets/headset1.png";
import Headset2 from "../assets/headset2.png";
import Headset3 from "../assets/headset3.png";

import Earphones from "../assets/earphones.png";

import Speaker1 from "../assets/speaker-desk.png";
import Speaker2 from "../assets/speaker2.png";

import Image from "../assets/details/image.png";
import Image2 from "../assets/details/image2.png";
import Image3 from "../assets/details/image3.png";
import Image4 from "../assets/details/image4.png";
import Image5 from "../assets/details/image5.png";
import Image6 from "../assets/details/image6.png";
import Image7 from "../assets/details/image7.png";
import Image8 from "../assets/details/image8.png";
import Image9 from "../assets/details/image9.png";

import { ProductPrototype } from "../utils/types";

export const headsets: ProductPrototype[] = [
  {
    subTitle: "NEW PRODUCT",
    title: "XX99 Mark II Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: Headset2,
    slug: "xx99-mark-ii",
    details: {
      price: 4500,
      feature: [
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      ],
      inBox: [
        { x: "1x", y: "Headphone Unit" },
        { x: "2x", y: "Replacement Earcups" },
        { x: "1x", y: "User Manual" },
        { x: "1x", y: "3.5mm 5m Audio Cable" },
      ],
      images: [Image4, Image5, Image6],
      similar_products: [
        {
          img: Headset1,
          title: "XX99 MARK I",
        },
        {
          img: Headset3,
          title: "XX59",
        },
        {
          img: Speaker1,
          title: "ZX9 SPEAKER",
        },
      ],
    },
  },
  {
    subTitle: null,
    title: "XX99 Mark I Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: Headset1,
    slug: "xx99-mark-i",
    details: {
      price: 4500,
      feature: [
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      ],
      inBox: [
        { x: "1x", y: "Headphone Unit" },
        { x: "2x", y: "Replacement Earcups" },
        { x: "1x", y: "User Manual" },
        { x: "1x", y: "3.5mm 5m Audio Cable" },
      ],
      images: [Image, Image2, Image3],
      similar_products: [
        {
          img: Headset2,
          title: "XX99 MARK I",
        },
        {
          img: Headset3,
          title: "XX99 MARK I",
        },
        {
          img: Speaker1,
          title: "XX99 MARK I",
        },
      ],
    },
  },
  {
    subTitle: null,
    title: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: Headset3,
    slug: "xx99-headphones",
    details: {
      price: 4500,
      feature: [
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      ],
      inBox: [
        { x: "1x", y: "Headphone Unit" },
        { x: "2x", y: "Replacement Earcups" },
        { x: "1x", y: "User Manual" },
        { x: "1x", y: "3.5mm 5m Audio Cable" },
      ],
      images: [Image7, Image8, Image9],
      similar_products: [
        {
          img: Headset2,
          title: "XX99 MARK I",
        },
        {
          img: Headset1,
          title: "XX99 MARK I",
        },
        {
          img: Speaker1,
          title: "XX99 MARK I",
        },
      ],
    },
  },
];

export const earphones = [
  {
    subTitle: "NEW PRODUCT",
    title: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: Earphones,
    slug: "yx1-wireless-EARPHONES",
  },
];

export const speakers = [
  {
    subTitle: null,
    title: "ZX9 SPEAKER",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: Speaker1,
    slug: "zx9-SPEAKER",
  },
  {
    subTitle: null,
    title: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: Speaker2,
    slug: "zx7-SPEAKER",
  },
];
