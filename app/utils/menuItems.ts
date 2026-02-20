// آیتم‌ منوی سایدبار 
export function getMenuItems() {
  return [
    {
      title: 'منوی اصلی',
      children: [
        { title: 'صفحه اصلی', icon: 'icon-menu-dashboard', to: '/' },
        { title: 'گزارش‌ها', icon: 'icon-menu-charts', to: '/reports' },
        { title: 'درباره ما', icon: 'icon-menu-documentation', to: '/about' }
      ]
    }
  ]
}
