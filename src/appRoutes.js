export const appRoutes = [
  {
    component: "Login",
    breadcrumb: ["App", "Login"],
    url: "/",
  },
  {
    component: "Homepage",
    breadcrumb: ["App", "Əsas səhifə"],
    url: "/homepage",
    isIndex: true,
  },
  {
    component: "Employees",
    breadcrumb: ["App", "Employees"],
    url: "/employees",
    isIndex: true,
  },
  {
    component: "Inguiry",
    breadcrumb: ["App", "Inguiry"],
    url: "/inquiry",
    children: [
      {
        component: "Dayoff",
        breadcrumb: ["App", "Inguiry", "Dayoff"],
        url: "/inquiry/dayoff",
        isIndex: true,
      },
      {
        component: "Ezam",
        breadcrumb: ["App", "Inguiry", "Ezam"],
        url: "/inquiry/ezam",
      },
      {
        component: "Vacation",
        breadcrumb: ["App", "Inguiry", "Vacation"],
        url: "/inquiry/vacation",
      },
      {
        component: "Guest",
        breadcrumb: ["App", "Inguiry", "Guest"],
        url: "/inquiry/guest",
      },
      {
        component: "IT",
        breadcrumb: ["App", "Inguiry", "IT"],
        url: "/inquiry/it",
      },
      {
        component: "Procurement",
        breadcrumb: ["App", "Inguiry", "Procurement"],
        url: "/inquiry/procurement",
      },
    ],
  },
  {
    component: "Announcements",
    breadcrumb: ["App", "Announcements"],
    url: "/announcements",
    children: [
      {
        component: "Announcement",
        breadcrumb: ["App", "Inguiry", "Announcement"],
        url: "/announcements/announcement",
        isIndex: true,
      },
    ],
  },
  {
    component: "Parameters",
    breadcrumb: ["App", "Parameters"],
    url: "/parameters",
    children: [
      {
        component: "Users",
        breadcrumb: ["App", "Inguiry", "Users"],
        url: "/parameters/users",
        isIndex: true,
      },
      {
        component: "/UserRoles",
        breadcrumb: ["App", "Inguiry", "UserRoles"],
        url: "/parameters/userroles",
      },
    ],
  },
];
