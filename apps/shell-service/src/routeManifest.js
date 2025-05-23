const routeManifest = [
  {
    remote: {
      module: 'viteService',
      entry: 'http://localhost:5011/remoteEntry.js',
    },
    route: {
      name: 'viteService',
      path: '/vite',
      meta: {
        title: 'Micro App 1',
      },
    },
  },
  {
    remote: {
      module: 'vueService',
      entry: 'http://localhost:5012/remoteEntry.js',
    },
    routes: [
      {
        name: 'vueHome',
        path: '/vue',
        meta: {
          title: 'Vue Home',
        },
      },
      {
        name: 'vueAbout',
        path: '/about',
        meta: {
          title: 'Vue About',
        },
      },
    ],
  },
];

export const getRemotes = () => {
  return routeManifest.map((mfe) => mfe.remote);
};

export default routeManifest;
