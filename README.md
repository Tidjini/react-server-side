# react-server-side

## next Organisation with page component

    1/page and common component organisation

        add pages folder to client and move home and UserList to it => rename to HomePage and UsersPage
        update the import in Routes
    commit 'refactoring the pages components'

    2/refactoring the component to brinkg the object (export )
        HomePage.js (use this for UsersList)
        ..
        export default {
            component: Home
        }
        ..
        then in Routes.js
        {
            ...HomePage,
            exact: true,
            path:'/',
        }
        --RUN TEST---
        commit 'refactoring the load data in home and users list page'
    3/Dumping the initial state to the Html template
        in renderers.js
            ..
            <script>
                window.INITIAL_STATE = ${JSON.stringfy(store.getState())}
            </script>
            ..

            and refer to client.js as initial state createStore(..,window.INITIAL_STATE..)
        --RUN TEST---

    commit 'Dumping the initial state to the html template'
    4/handle the XSS attacks
    in renderer.js
        ..
        import serilaze from "serilize-javascript"; //to not compile js object and use it instead of  JSON.stringfy
        ..

    commit and test
