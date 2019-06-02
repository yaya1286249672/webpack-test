export default ( nextState, callback )=> {
    require.ensure([], (require) => {
        callback(null, require('../component/sort/index').default);
    }, "sort");
}