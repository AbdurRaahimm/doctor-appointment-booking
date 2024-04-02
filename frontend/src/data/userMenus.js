const user = JSON.parse(localStorage.getItem("user")) || [];
console.log(user.username);

export const userMenus = [
    {
        id: 1,
        name: "Profile",
        icon: "bi bi-person",
    },
    {
        id: 2,
        name: "appointments",
        path: "appointments",
        icon: "bi bi-calendar3",
    },
    {
        id: 3,
        name: "Apply for Doctor",
        path: "apply-doctor",
        icon: "bi bi-person-plus",
    },

]
