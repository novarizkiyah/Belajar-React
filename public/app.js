/**
        const root = document.querySelector('#root');
        const element = document.createElement('h1');
        element.textContent = 'Hello from JS!';
        element.className = "heading-1";
        root.appendChild(element);**/

/**
const p1 = React.createElement('p', {
    children : 'Hello from Paragraf1!',
});
const p2 = React.createElement('p', {
    children : 'Hello from Paragraf2!',
});

const element = React.createElement(React.Fragment, {
    children: [p1, p2],
});**/

/**
const li = React.createElement('li', {
    children: 'Dragon Fruit'
});
const li2 = React.createElement('li', {
    children: 'Banana'
});
const li3 = React.createElement('li', {
    children: 'Cherry'
});**/

/**const element = React.createElement('ul', {
    children: [li, li2, li3],
});**/
const root = document.querySelector('#root');
/**const element = React.createElement('ul', 
    {className: 'list'}, 
    li, li2, li3); **/

/**const element = React.createElement(
    'ul', 
    {className: 'list'},
    React.createElement('li', null, 'Dragon Fruit'),
    React.createElement('li', null, 'Banana'),
    React.createElement('li', null, 'Cherry'),
);  **/

/**const element = (
    <ul>
        <li>Dragon Fruit</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
);**/

/**function Halo(props){
    
    return <p>Halo <b>{props.name}</b></p>
}
const element = (
    <>
        <Halo name="Nova"/>
        <Halo name="Aryya"/>
        <Halo name="Aya"/>
       
    </>
)**/

/**function tick() {
    const element = (
    <div>
        <h1>Jam sekarang</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
)
ReactDOM.render(element, root);
}
tick();
 setInterval(function(){
    tick();
}, 1000);**/

const element = /*#__PURE__*/React.createElement("div", {
  className: "box"
});

/**const element = <button>Click Me</button>**/
ReactDOM.render(element, root);