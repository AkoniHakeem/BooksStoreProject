const routes = [
  {
    path: "/",
    component: () => import("layouts/BookstoreLayout.vue"),
    children: [
      { path: "", component: () => import("pages/BookDetailPage.vue") },
      { path: ":id", component: () => import("pages/BookingFormPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
