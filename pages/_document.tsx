import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/png' sizes='32x32' href='/images/lg-favicon-32x32.png' />
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
          }}/>
        </Head>
        <body>
          <div id="globalLoader">
            <svg className="animate-spin flex-no-shrink fill-current" fill="none" data-icon="spinner" viewBox="0 0 512 512" width="100" height="100"><path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"></path></svg>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}