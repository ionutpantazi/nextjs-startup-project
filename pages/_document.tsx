import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import NextImage from 'next/image'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/png' sizes='32x32' href='/images/lg-favicon-32x32.png' />
          <link rel="stylesheet" href="https://use.typekit.net/xvx1cbc.css"></link>
          <script type='text/javascript' dangerouslySetInnerHTML={{
            __html: `
                window.onUsersnapLoad = function(api) {
                  api.init();
                };
                var script = document.createElement('script');
                script.defer = 1;
                script.src = 'https://widget.usersnap.com/global/load/e7da562a-2583-4df3-ad01-5c6b4ad8b1ff?onload=onUsersnapLoad';
                document.getElementsByTagName('head')[0].appendChild(script);
            `
          }} />
        </Head>
        <body>
          <div id="globalLoader">
            <NextImage
              src={'/images/lg-favicon-32x32.png'}
              className=''
              alt=''
              width={32}
              height={32}
            />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}