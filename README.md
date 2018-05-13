# react-server-side

## next Handling errors

    1/ not found page
        first create a not found page then attach it to the routes file without any path field
    2/ informe the browser with 404 status (if page not found)
        for this we use the context object inside the static router then pass it to not found page as Static Context props
        manage the notFound field in here then cominucate with index.js

    3/handle the promises errors;
        - catch statement
