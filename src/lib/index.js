export const router = {
    onNavigate(pathname) {
      window.history.pushState({},
        pathname,
        window.location.origin + pathname);
    },
  
  };