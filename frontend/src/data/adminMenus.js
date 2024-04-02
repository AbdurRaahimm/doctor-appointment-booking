const user = JSON.parse(localStorage.getItem("user")) || [];
console.log(user.username);
export const adminMenus = [
    {
        id: 1,
        name: "Profile",
        path: `${user.username}`,
        icon: "bi bi-house",
    },
    {
        id: 2,
        name: "Users",
        path: "/users",
        icon: "bi bi-person",
    },
    {
        id: 3,
        name: "Doctors",
        path: "/doctors",
        icon: "bi bi-person",
    },
]