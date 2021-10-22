
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = {
"gatsby-plugin-image": pluginGatsbyNode0,
"gatsby-source-filesystem": pluginGatsbyNode1,
"gatsby-transformer-sharp": pluginGatsbyNode2,
"gatsby-plugin-sharp": pluginGatsbyNode3,
"gatsby-plugin-page-creator": pluginGatsbyNode4,
}

export const gatsbyWorkers = {
"gatsby-plugin-sharp": pluginGatsbyWorker0,
}

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "2.0.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [
      "wrapRootElement"
    ],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "92cfba2d-4197-5bf3-8dcb-0ba768d5b8d6",
    "name": "gatsby-source-filesystem",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/src/images"
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "unstable_shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "6511e980-81d6-5cdd-af57-9e51db91e678",
    "name": "gatsby-plugin-sharp",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "0a589335-222a-5792-ae7e-3f4b94cd3df6",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "92c87c65-7032-56ff-9909-e6abef4b9e79",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "f832c235-f539-581a-9bc8-0c2f1d74d6de",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9be3fc61-3a8c-51bd-a2d2-64ec1701791b",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "c693807d-d080-575d-aed2-548f81831fb6",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "71fbff6e-1817-55c0-9566-b492b10a4b36",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "1c4588ee-1042-5f1f-9deb-0895e7c7b264",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "a5855cf1-f4be-50be-aff8-a7ad0d564ff8",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-plugin-react-helmet/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "89bd906c-c63e-5e34-bb4f-423eb6b2f639",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "1d71453a-78e6-5eb1-8123-7824334e2fb1",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "3c78fc3a-39af-549c-b1fd-351930bf8b9d",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "6774a5db-ead7-56a4-97bd-c217ba708918",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "2be4f5ac-64e0-5401-8af7-10c66e0fb36d",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "c2393997-7ccf-588e-b6f3-d343aa857b41",
    "name": "gatsby-plugin-page-creator",
    "version": "4.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jasminekokkat/Downloads/gatsby-starter-default/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  }
]
