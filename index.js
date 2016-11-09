export default url =>  {
    const worker = new Worker(url);

    return ({ dispatch, getState }) => next => {

        worker.addEventListener('message', e => {
            next({
                type: 'SET_STATE',
                state: e.data
            });
        });

        return action => {
            worker.postMessage({
                state: getState(),
                action
            });
        };
    }
}

export const reducer = (state = {}, action) => {
    if(action.type == 'SET_STATE') return action.state;
    return state;
};

export const CreateWorker = (ReducersController) => {
    self.onmessage = function (e) {
        self.postMessage( ReducersController(e.data.state, e.data.action) );
    };
};