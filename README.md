# REACT REDUX x REDUX TOOLKIT

### 1 Create a Store

    *   Configure the Store
    *   Give it Reducers

### 2 Make components aware of the store

    *   Wrap Index.js with `<Provider store={store}>`

### 3 Define Slices

    *   Declare initial state
    *   use `createSlice` from redux toolkit, provide name, initialstate and as many reducers and
    *   export slice, and export inidividual methods

### 4 How to use it

    *   use `useDispatch` to perform the action and the imported method from the slice
    *   to extract data use `useSelector` which has the state automatically
