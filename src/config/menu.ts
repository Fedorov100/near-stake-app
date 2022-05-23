export interface RouteMenu {
  to: string;
  title: string;
}

const dashboard: RouteMenu = {
  to: '/',
  title: 'DASHBOARD',
};

const myPage: RouteMenu = {
  to: `/mypage`,
  title: 'MY PAGE',
};

const earn: RouteMenu = {
  to: '/earn',
  title: 'EARN',
};

const borrow: RouteMenu = {
  to: '/utility',
  title: 'UTILITY+',
};


const useMenus = (): RouteMenu[] => {
  return [dashboard, myPage, earn, borrow];
};

export { useMenus };
