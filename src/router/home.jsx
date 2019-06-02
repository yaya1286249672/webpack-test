export default ( nextState, callback )=> {
    require.ensure([], (require) => {
        callback(null, require('../component/index/index.jsx').default);
    }, "homeIndex");
}