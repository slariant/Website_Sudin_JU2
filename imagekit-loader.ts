'use client';

import { ImageLoaderProps } from 'next/image';

export default function imageKitLoader({ src, width, quality }: ImageLoaderProps) {
    if (src[0] === '/') src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(',');
    let urlEndpoint = 'https://ik.imagekit.io/qiplf6uhb';
    if (urlEndpoint[urlEndpoint.length - 1] === '/') {
        urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    }
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
}
