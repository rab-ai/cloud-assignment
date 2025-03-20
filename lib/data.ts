const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
}

export default data

/*
const data = {
  headerMenus: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Categories',
      submenus: [
        { name: 'Vinyls', href: '/search?category=vinyls' },
        { name: 'Antique Furniture', href: '/search?category=antique-furniture' },
        { name: 'GPS Sport Watches', href: '/search?category=gps-watches' },
        { name: 'Running Shoes', href: '/search?category=running-shoes' },
      ],
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'User Account',
      submenus: [
        { name: 'Sign In', href: '/signin' },
        { name: 'Profile', href: '/profile' },
        { name: 'Browsing History', href: '/#browsing-history' },
      ],
    },
    {
      name: 'Admin Panel',
      href: '/admin',
      requiresAdmin: true, // Bu, sadece admin kullanıcılara gösterilmesini sağlar.
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
};

export default data;
*/
