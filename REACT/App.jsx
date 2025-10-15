const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:"brown",color:"white",textAlign:"center"}},"ABES ENGINEERING COLLEGE");
// root.render(h2);
const li1=React.createElement('li',{},"java");
const li2=React.createElement('li',{},"python");
const li3=React.createElement('li',{},"cpp");

const ul=React.createElement('ul',{style:{backgroundColor:"cyan"}},li1,li2,li3);
// root.render(ul);
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8G6pDbd7gCr67gp7Rb6xCqGyb0jVUjYqbWWzkv40p0gaz49EkViznRD6Ay4lJ3IEuYM&usqp=CAU',style:{height:'200px',width:'200px',textAlign:"center",borderRadius:"50%"}});
const my_name=React.createElement('h2',{},"ISHAN ARORA");

const pfp=React.createElement('div',{style:{display:"flex",flexDirection:"row",gap:'150px',alignItems:"center"}},img,my_name)
const wrapper=React.createElement('div',{},h2,pfp,ul);
// root.render(wrapper);

const h21=<h2>Hi,this is shorthand</h2>;
root.render(h21);


const li11=<li>react</li>;
const li21=<li>react</li>;
const li31=<li>react</li>;

const ul1=<ul>{li11}{li21}{li31}</ul>;

const wrapper1=(
    <>
    {h21},
    {ul1}
    </>
)

root.render(wrapper1);