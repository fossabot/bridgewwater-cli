import pkgInfo from '../../package.json'
import { binName } from '../utils/pkgInfo'
import path from 'path'
import { AndroidTemplate } from './AndroidTemplate'

export interface NodeTemplate {
  templateUrl: string
}

export interface ICfgSetting {
  name: string
  version: string
  nodeTemplate: NodeTemplate
  androidTemplate: AndroidTemplate
}

export const CfgSetting: ICfgSetting = {
  name: binName(),
  version: pkgInfo.version,
  nodeTemplate: {
    templateUrl: 'https://github.com/bridgewwater/bridgewwater-cli.git'
  },
  androidTemplate: {
    templateUrl: 'https://github.com/bridgewwater/android-java-temple.git',
    templateProjectName: 'android-java-temple',
    versionName: '1.0.1-SNAPSHOT',
    versionCode: '1000001',
    library: {
      name: 'plugin',
      source: {
        srcRoot: path.join('src'),
        androidManifestPath: path.join('src', 'main', 'AndroidManifest.xml'),
        resPath: path.join('src', 'main', 'res'),
        javaPath: path.join('src', 'main', 'java'),
        testJavaPath: path.join('src', 'test', 'java'),
        androidTestJavaPath: path.join('src', 'androidTest', 'java'),
        package: 'com.sinlov.android.plugin'
      },
      mvn: {
        group: 'com.sinlov.android',
        pomArtifactId: 'android-java-plugin',
        pomName: 'android-java-plugin',
        pomPackaging: 'aar'
      }
    },
    application: {
      name: 'test',
      applicationId: 'com.sinlov.android.demo.template',
      source: {
        srcRoot: path.join('src'),
        androidManifestPath: path.join('src', 'main', 'AndroidManifest.xml'),
        resPath: path.join('src', 'main', 'res'),
        javaPath: path.join('src', 'main', 'java'),
        testJavaPath: path.join('src', 'test', 'java'),
        androidTestJavaPath: path.join('src', 'androidTest', 'java'),
        package: 'com.sinlov.android.demo.template'
      }
    }
  }
}
