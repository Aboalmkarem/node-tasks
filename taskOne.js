const userApi = { id: 1, name: "mohammed" };
const tasksApi = [
    { userId: 1, task: "Writecode" },
    { userId: 1, task: "ReviewPRs" },
];
let errorsCheckerApi;
function errorHandler(message) {
    console.error("Error fetching data, error:", message);
    console.error("server will be closed");
    // throw new Error(message);
}
// ======================= CALLBACK ==========================//
// function fetchUser(cb) {
//     console.log("starting fetching the user ...");
//     setTimeout(() => {
//         const userData = userApi;
//         if (userData) {
//             cb(userData);
//         } else {
//             errorHandler(
//                 "userData is not true"
//             );
//         }
//     }, 2000);
// }
// function showUser(userData, cb) {
//     if (Object.keys(userData).length === 0) {
//         console.log("fetched user data: there is no user");
//         return;
//     }
//     console.log("fetched user data:", userData);
//     cb(userData);
// }
// function fetchTasks(userData, cb) {
//     console.log("starting fetching tasks for user:", userData.name, "...");
//     setTimeout(() => {
//         const task = tasksApi.filter((task) => task.userId === userData.id);
//         if (task && userData) {
//             cb(task.length < 1 ? "there is no tasks" : task);
//         } else {
//             errorHandler(
//                 "tasks data is not true"
//             );
//         }
//     }, 2000);
// }

// fetchUser((userData) => {
//     showUser(userData, (userData) => {
//         fetchTasks(userData, (task) => {
//             console.log("fetched task data:", task);
//         });
//     });
// });
//============================= CALLBACK'S END =============================//

//============================ PROMISE =============================//

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         console.log("starting fetching the user ...");
//         setTimeout(() => {
//             const userData = userApi;
//             if (userData) {
//                 resolve(userData);
//             } else {
//                 reject("userData is not true");
//             }
//         }, 2000);
//     });
// }
// function fetchTasks(userData) {
//     return new Promise((resolve, reject) => {
//         console.log("starting fetching tasks for user: ", userData.name, "...");
//         setTimeout(() => {
//             const tasks = tasksApi.filter(
//                 (task) => task.userId === userData.id
//             );
//             if (tasks) {
//                 resolve(tasks);
//             } else {
//                 reject("tasks data is not true");
//             }
//         }, 2000);
//     });
// }

// fetchUser()
//     .then((userData) => {
//         if (Object.keys(userData).length === 0) {
//             console.log("fetched user data: there is no user");
//             return;
//         } else {
//             console.log("fetched user data: ", userData);
//             return fetchTasks(userData);
//         }
//     })
//     .then((tasks) => {
//         if (tasks.length > 0) {
//             console.log("fetched tasks data: ", tasks);
//         } else {
//             console.log("fetched tasks data: there is no tasks");
//         }
//     })
//     .catch((message) => {
//         errorHandler(message);
//     });
// ============================== PROMISE'S END =============================//

// ============================== ASYNC =============================//
function fetchUser() {
    return new Promise((resolve, reject) => {
        console.log("starting fetching the user ...");
        setTimeout(() => {
            const userData = userApi;
            if (userData) {
                resolve(userData);
            } else {
                errorHandler("userData is not true");
            }
        }, 2000);
    });
}
function fetchTasks(userData) {
    return new Promise((resolve, reject) => {
        console.log("starting fetching tasks for user: ", userData.name, "...");
        setTimeout(() => {
            const tasks = tasksApi.filter(
                (task) => task.userId === userData.id
            );
            if (tasks) {
                resolve(tasks);
            } else {
                errorHandler("tasks data is not true");
            }
        }, 2000);
    });
}
async function fetchUserToGetTasks() {
    const userData = await fetchUser()
    console.log('fetched user data ', userData)
    const tasksData = await fetchTasks(userData)
    console.log('fetched tasks data ', tasksData);
}
fetchUserToGetTasks()
