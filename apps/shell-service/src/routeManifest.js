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
    route: {
      name: 'vueService',
      path: '/vue',
      meta: {
        title: 'Micro App 2',
      },
    },
  },
];

/**
 * This function returns the remotes from the route manifest.
 */
export const getRemotes = () => {
  return routeManifest.map((mfe) => mfe.remote);
};

export default routeManifest;
