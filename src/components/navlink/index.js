import {
  Link,
  useLocation,
  matchRoutes,
  useResolvedPath,
} from "react-router-dom";
import { routes } from "../../routes";

export default function NavLink({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) {
  const location = useLocation();
  let resolvedPath = useResolvedPath(to);
  let matchedRoutes = matchRoutes(routes, location);

  let isActive;
  if (exact) {
    //first version
    isActive = location.pathname === resolvedPath.pathname;
  } else {
    //second version
    isActive = matchedRoutes.some(
      (match) => match.pathname === resolvedPath.pathname
    );
  }

  let allClassNames =
    className + (isActive ? ` ${activeClassName} ` : ` ${inactiveClassName} `);
  return <Link className={allClassNames} to={to} {...rest} />;
}
