import React, { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext({ path: "", params: {}, navigate: () => {} });

export function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function navigate(to) {
    window.history.pushState(null, "", to);
    setPath(to);
  }

  return (
    <RouterContext.Provider value={{ path, navigate, params: {} }}>
      {children}
    </RouterContext.Provider>
  );
}

function matchRoute(pattern, path) {
  const paramNames = [];
  const re = new RegExp(
    "^" + pattern.replace(/:([^/]+)/g, (_, n) => { paramNames.push(n); return "([^/]+)"; }).replace(/\//g, "\\/") + "$"
  );
  const match = path.match(re);
  if (!match) return null;
  return Object.fromEntries(paramNames.map((name, i) => [name, match[i + 1]]));
}

export function Routes({ children }) {
  const { path, navigate } = useContext(RouterContext);
  for (const child of React.Children.toArray(children)) {
    const params = matchRoute(child.props.path, path);
    if (params !== null) {
      return (
        <RouterContext.Provider value={{ path, navigate, params }}>
          {child.props.element}
        </RouterContext.Provider>
      );
    }
  }
  return null;
}

export function Route() { return null; }

export function Link({ to, children, className, style, onClick, ...props }) {
  const { navigate } = useContext(RouterContext);
  function handleClick(e) {
    e.preventDefault();
    onClick?.();
    navigate(to);
  }
  return <a href={to} className={className} style={style} onClick={handleClick} {...props}>{children}</a>;
}

export function useLocation() {
  const { path, navigate } = useContext(RouterContext);
  return [path, navigate];
}

export function useParams() {
  return useContext(RouterContext).params;
}
