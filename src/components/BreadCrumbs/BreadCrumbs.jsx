import { Link, useLocation } from 'react-router-dom';
import '../BreadCrumbs/BreadCrumbs.css';

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Статичні маршрути для підкатегорій
  const subCategories = {
    '/category/citrus': [
      { path: '/category/citrus/lemons', label: 'Лимони' },
      { path: '/category/citrus/tangerines', label: 'Мандарини' },
      { path: '/category/citrus/oranges', label: 'Апельсини' },
    ],
  };

  // Не показувати на головній сторінці
  if (location.pathname === '/') return null;

  return (
    <nav className="nav">
      <div className="container">
        <ul className="breadcrumbs">
          <li>
            <Link to="/">Головна</Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to}>
                {isLast ? (
                  <span>{decodeURIComponent(value)}</span>
                ) : (
                  <Link to={to}>{decodeURIComponent(value)}</Link>
                )}

                {/* Показати підкатегорії, якщо вони є */}
                {subCategories[to] && (
                  <ul className="sub-breadcrumbs">
                    {subCategories[to].map(sub => (
                      <li key={sub.path}>
                        <Link to={sub.path}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
