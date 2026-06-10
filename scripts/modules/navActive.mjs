export function setActiveNav() {

    const currentPath =
      window.location.pathname;
  
    const links =
      document.querySelectorAll(
        ".nav-link"
      );
  
    links.forEach(link => {
  
      if (
        currentPath ===
        new URL(
          link.href
        ).pathname
      ) {
  
        link.classList.add(
          "active-nav"
        );
      }
    });
  }