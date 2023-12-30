const routes = {
  library: '/biblioteca',
  bookDetail: (slug: string) => `${routes.library}/livro/${slug}`
};

export default routes;
