import { createRouter, createWebHistory } from 'vue-router';
import routeManifest from '../routeManifest';

const getRoutes = () => {
  const remoteRoutes = [];

  routeManifest.forEach((mfe) => {
    if (mfe.route) {
      remoteRoutes.push({
        path: mfe.route.path,
        name: mfe.route.name,
        meta: { ...mfe.route.meta },
        component: () => import('@/components/Loader.vue'),
      });
    } else if (Array.isArray(mfe.routes)) {
      mfe.routes.forEach((r) => {
        remoteRoutes.push({
          path: r.path,
          name: r.name,
          meta: { ...r.meta },
          component: () => import('@/components/Loader.vue'),
        });
      });
    }
  });

  return remoteRoutes;
};

const routes = getRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const useRoute = () => {
  return router;
};
