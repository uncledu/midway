import { join } from 'path';
import { initializeGlobalApplicationContext, MidwayConfigService, createConfiguration, EmptyFramework } from '../src';

describe('/test/emptyFramework.test.ts', () => {
  it('should test ConfigFramework', async () => {

    const container = await initializeGlobalApplicationContext({
      baseDir: join(
        __dirname,
        './fixtures/base-app-config/src'
      ),
      preloadModules: [EmptyFramework],
      configurationModule: createConfiguration({
        imports: []
      }).onReady(async () => {

      })
    });

    const configService = await container.getAsync(MidwayConfigService);
    //
    // const framework = new ConfigFramework();
    // await framework.initialize({
    // });

    expect(configService.getConfiguration()).toEqual({
      "hello": {
        "a": 1,
        "b": 4,
        "c": 3,
        "d": [
          1,
          2,
          3
        ]
      },
      "keys": "key",
      "plugins": {
        "bucLogin": false
      }
    });
  });
});
