import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='smooth-scroll' lang="en">
      <Head />
      <body className='bg-[#a8c7ba]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/* 

className='bg-gradient-to-b from-[#90cd9c] via-[#a5c8b6] to-[#c1d9d6]'

className='bg-gradient-to-b from-[#90cd9c] to-[#c1c1d9]'

className='bg-[#a8c7ba]'

*/
