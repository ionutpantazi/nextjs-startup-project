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
          <script type='text/javascript' dangerouslySetInnerHTML={{
            __html: `
            <script>
              window.onUsersnapLoad = function(api) {
                api.init();
              };
              var script = document.createElement('script');
              script.defer = 1;
              script.src = 'https://widget.usersnap.com/global/load/e7e6d64b-b758-45a5-99dd-08262200189d?onload=onUsersnapLoad';
              document.getElementsByTagName('head')[0].appendChild(script);
            </script>
            `
          }}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}